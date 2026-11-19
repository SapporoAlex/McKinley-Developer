import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/**
 * Scroll-driven "travel through code" scene.
 *
 * The camera rides a straight tunnel (-z). Each content section on the page is
 * a "stop"; between two stops the camera crosses an electric gate, so every
 * section is reached by travelling through code and a pulse of light.
 */

export interface TunnelHooks {
  /** Document scroll position (px) at which the camera should sit at each stop. */
  getStopScrolls: () => number[];
  /** Called every frame with 0..1 progress, depth readout and travel speed. */
  /** Logo image URLs rendered as 3D bumpable slabs. */
  toolImages?: string[];
  /** Index of the stop (section) the tools float around. */
  toolStop?: number;
  /** Per-work floaties: a canvas face and the stop (section) it announces. */
  floaties?: { canvas: HTMLCanvasElement; stop: number }[];
  /** Bump this number after redrawing the canvases so textures re-upload. */
  canvasVersion?: () => number;
  onFrame?: (info: { progress: number; depth: number; speed: number }) => void;
}

const SPACING = 34;
const START_Z = 11;
const TUBE_R = 10;
const MAX_GATES = 16;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const rand = (a: number, b: number) => a + Math.random() * (b - a);

const TUBE_VERT = /* glsl */ `
  varying vec3 vPos;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`;

const TUBE_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uCamZ;
  uniform float uSpeed;
  uniform vec3 uColor;
  uniform float uGateZ[${MAX_GATES}];
  uniform float uGateGlow[${MAX_GATES}];
  varying vec3 vPos;

  float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
  float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  void main() {
    const float COLS = 84.0;
    const float CELL = 0.5;

    float ang = atan(vPos.y, vPos.x) / 6.2831853 + 0.5;
    float cx = ang * COLS;
    float col = floor(cx);
    float fx = fract(cx);

    float colSpeed = 0.5 + h11(col) * 1.6;
    float on = step(0.3, h11(col + 9.1));

    // glyph grid that scrolls along the tunnel
    float zc = -vPos.z / CELL + uTime * colSpeed * 1.4;
    float row = floor(zc);
    float fy = fract(zc);
    vec2 gp = floor(vec2(fx, fy) * vec2(4.0, 5.0));
    float bit = step(0.5, h21(gp + vec2(row, col) * 1.37));
    float margin = step(0.16, fx) * step(fx, 0.84) * step(0.12, fy) * step(fy, 0.88);
    float glyph = bit * margin;

    // bright "heads" streaming down each column
    float trail = fract(-vPos.z * 0.028 + uTime * colSpeed * 0.22 + h11(col) * 7.0);
    float head = pow(trail, 6.0);
    float flick = 0.55 + 0.45 * h21(vec2(row, col + floor(uTime * 3.0)));

    float inten = glyph * on * (0.07 + 1.5 * head) * flick;

    // thin electric seams between columns
    float seam = pow(1.0 - abs(fract(cx * 0.5) - 0.5) * 2.0, 14.0);
    inten += seam * 0.05 * on;

    // pulses travelling forward through the walls
    float pulse = 0.0;
    for (int k = 0; k < 3; k++) {
      float fk = float(k);
      float pz = uCamZ - 8.0 - mod(uTime * (22.0 + fk * 9.0) + fk * 47.0, 130.0);
      float band = exp(-pow((vPos.z - pz) / 2.2, 2.0));
      float forks = 0.35 + 0.65 * step(0.55, h21(vec2(col, fk + floor(uTime * 6.0))));
      pulse += band * (0.25 + seam * 6.0 + glyph * 1.4) * forks;
    }
    inten += pulse;

    // glow around each gate
    float gate = 0.0;
    for (int i = 0; i < ${MAX_GATES}; i++) {
      float d = vPos.z - uGateZ[i];
      gate += exp(-d * d / 14.0) * uGateGlow[i] * (0.35 + glyph * 1.6 + seam * 4.0);
    }
    inten += gate;

    // speed streaks
    inten += uSpeed * seam * 1.2 * on;

    float dist = abs(vPos.z - uCamZ);
    float fade = exp(-dist * 0.024) * smoothstep(8.0, -12.0, vPos.z);

    vec3 c = mix(uColor, vec3(1.0), clamp(head * 0.7 + pulse * 0.25 + gate * 0.2, 0.0, 1.0));
    float a = inten * fade;
    gl_FragColor = vec4(c * a, a);
  }
`;

interface Arc {
  line: THREE.Line;
  timer: number;
  on: boolean;
  refresh: number;
}

export function createTunnel(canvas: HTMLCanvasElement, hooks: TunnelHooks): () => void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.innerWidth < 800;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));

  const BG = 0x00030a;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.FogExp2(BG, 0.016);

  const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 400);

  let stopScrolls = hooks.getStopScrolls();
  const stopCount = Math.max(stopScrolls.length, 2);
  const stopZ = (i: number) => START_Z - i * SPACING;
  const lastZ = stopZ(stopCount - 1);

  // ── Lights ────────────────────────────────────────────────────────────────
  scene.add(new THREE.HemisphereLight(0x2cd0ec, 0x000814, 0.55));
  const camLight = new THREE.PointLight(0x5fe3ff, 180, 0, 2);
  scene.add(camLight);
  const gateLight = new THREE.PointLight(0xbdf3ff, 0, 40, 2);
  scene.add(gateLight);

  // ── Code tunnel ───────────────────────────────────────────────────────────
  const zFront = 20;
  const zBack = lastZ - 80;
  const tubeLen = zFront - zBack;
  const gateZ: number[] = [];
  for (let i = 1; i < stopCount; i++) gateZ.push(START_Z - (i - 0.5) * SPACING);

  const uGateZ = Array.from({ length: MAX_GATES }, (_, i) => (i < gateZ.length ? gateZ[i] : 1e5));
  const uGateGlow = new Array<number>(MAX_GATES).fill(0);

  const tubeMat = new THREE.ShaderMaterial({
    vertexShader: TUBE_VERT,
    fragmentShader: TUBE_FRAG,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uCamZ: { value: START_Z },
      uSpeed: { value: 0 },
      uColor: { value: new THREE.Color(0.17, 0.82, 0.93) },
      uGateZ: { value: uGateZ },
      uGateGlow: { value: uGateGlow },
    },
  });
  const tubeGeo = new THREE.CylinderGeometry(TUBE_R, TUBE_R, tubeLen, 128, 1, true);
  tubeGeo.rotateX(Math.PI / 2);
  const tube = new THREE.Mesh(tubeGeo, tubeMat);
  tube.position.z = (zFront + zBack) / 2;
  tube.frustumCulled = false;
  scene.add(tube);

  // ── Gates (rings of light between sections) ───────────────────────────────
  interface Gate {
    outer: THREE.Mesh;
    inner: THREE.Mesh;
    spokes: THREE.LineSegments;
    z: number;
  }
  const gates: Gate[] = [];
  const ringGeoOuter = new THREE.TorusGeometry(TUBE_R * 0.93, 0.07, 8, 160);
  const ringGeoInner = new THREE.TorusGeometry(TUBE_R * 0.74, 0.035, 6, 6 * 24);
  const spokePts: number[] = [];
  for (let k = 0; k < 36; k++) {
    const a = (k / 36) * Math.PI * 2;
    spokePts.push(Math.cos(a) * TUBE_R * 0.74, Math.sin(a) * TUBE_R * 0.74, 0);
    spokePts.push(Math.cos(a) * TUBE_R * 0.93, Math.sin(a) * TUBE_R * 0.93, 0);
  }
  const spokeGeo = new THREE.BufferGeometry();
  spokeGeo.setAttribute("position", new THREE.Float32BufferAttribute(spokePts, 3));
  const gateMatProto = () =>
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.3, 1.1, 1.5),
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
  gateZ.forEach((z) => {
    const outer = new THREE.Mesh(ringGeoOuter, gateMatProto());
    const inner = new THREE.Mesh(ringGeoInner, gateMatProto());
    const spokes = new THREE.LineSegments(
      spokeGeo,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(0.3, 1.1, 1.5),
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    [outer, inner, spokes].forEach((o) => {
      o.position.z = z;
      scene.add(o);
    });
    gates.push({ outer, inner, spokes, z });
  });

  // ── Floating shards ───────────────────────────────────────────────────────
  const solidMat = new THREE.MeshStandardMaterial({
    color: 0x0a1626,
    metalness: 0.85,
    roughness: 0.32,
    flatShading: true,
    emissive: 0x01101c,
  });
  const wireMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.25, 0.95, 1.25),
    wireframe: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  interface ShardData {
    pos: THREE.Vector3;
    rot: THREE.Euler;
    spin: THREE.Vector3;
    scale: THREE.Vector3;
  }
  interface ShardSet {
    solid: THREE.InstancedMesh;
    wire: THREE.InstancedMesh;
    data: ShardData[];
  }
  const shardSets: ShardSet[] = [];
  const makeShards = (geo: THREE.BufferGeometry, count: number): ShardSet => {
    const solid = new THREE.InstancedMesh(geo, solidMat, count);
    const wire = new THREE.InstancedMesh(geo, wireMat, count);
    solid.frustumCulled = false;
    wire.frustumCulled = false;
    const data: ShardData[] = [];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.4 + Math.pow(Math.random(), 1.4) * 6.6;
      let s = 0.2 + Math.pow(Math.random(), 4) * 3.4;
      s = Math.min(s, r * 0.55, (9.4 - r) * 0.7 + 0.3);
      data.push({
        pos: new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, rand(lastZ - 70, 14)),
        rot: new THREE.Euler(rand(0, 6.28), rand(0, 6.28), rand(0, 6.28)),
        spin: new THREE.Vector3(rand(-0.4, 0.4), rand(-0.4, 0.4), rand(-0.4, 0.4)),
        scale: new THREE.Vector3(s * rand(0.6, 1.5), s * rand(0.5, 1.7), s * rand(0.6, 1.5)),
      });
    }
    scene.add(solid, wire);
    const set = { solid, wire, data };
    shardSets.push(set);
    return set;
  };
  makeShards(new THREE.OctahedronGeometry(1, 0), mobile ? 110 : 190);
  makeShards(new THREE.TetrahedronGeometry(1, 0), mobile ? 90 : 150);
  makeShards(new THREE.IcosahedronGeometry(1, 0), mobile ? 30 : 60);

  const dummy = new THREE.Object3D();
  const updateShards = (dt: number, camZ: number) => {
    for (const set of shardSets) {
      for (let i = 0; i < set.data.length; i++) {
        const d = set.data[i];
        if (Math.abs(d.pos.z - camZ) > 110) continue;
        d.rot.x += d.spin.x * dt;
        d.rot.y += d.spin.y * dt;
        d.rot.z += d.spin.z * dt;
        dummy.position.copy(d.pos);
        dummy.rotation.copy(d.rot);
        dummy.scale.copy(d.scale);
        dummy.updateMatrix();
        set.solid.setMatrixAt(i, dummy.matrix);
        set.wire.setMatrixAt(i, dummy.matrix);
      }
      set.solid.instanceMatrix.needsUpdate = true;
      set.wire.instanceMatrix.needsUpdate = true;
    }
  };

  // ── Data-bit dust ─────────────────────────────────────────────────────────
  const dustCount = mobile ? 900 : 2400;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 0.9 + Math.sqrt(Math.random()) * 8.6;
    dustPos[i * 3] = Math.cos(a) * r;
    dustPos[i * 3 + 1] = Math.sin(a) * r;
    dustPos[i * 3 + 2] = rand(lastZ - 70, 18);
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      color: new THREE.Color(0.4, 1.2, 1.6),
      size: 0.09,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    }),
  );
  dust.frustumCulled = false;
  scene.add(dust);

  // ── Electric arcs ─────────────────────────────────────────────────────────
  const ARC_SEGS = 26;
  const arcs: Arc[] = [];
  const arcMat = new THREE.LineBasicMaterial({
    color: new THREE.Color(0.9, 1.9, 2.4),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  for (let i = 0; i < (mobile ? 8 : 16); i++) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array((ARC_SEGS + 1) * 3), 3));
    const line = new THREE.Line(geo, arcMat);
    line.frustumCulled = false;
    line.visible = false;
    scene.add(line);
    arcs.push({ line, timer: rand(0, 1), on: false, refresh: 0 });
  }
  const p0 = new THREE.Vector3();
  const p1 = new THREE.Vector3();
  const pt = new THREE.Vector3();
  const buildArc = (arc: Arc, camZ: number) => {
    const a0 = Math.random() * Math.PI * 2;
    const z0 = camZ - rand(6, 55);
    p0.set(Math.cos(a0) * TUBE_R * 0.97, Math.sin(a0) * TUBE_R * 0.97, z0);
    const wall = Math.random() < 0.5;
    const a1 = a0 + rand(-1.3, 1.3);
    const r1 = wall ? TUBE_R * 0.97 : rand(2.5, 9);
    p1.set(Math.cos(a1) * r1, Math.sin(a1) * r1, z0 - rand(2, 16));
    const len = p0.distanceTo(p1);
    const pos = arc.line.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let k = 0; k <= ARC_SEGS; k++) {
      const t = k / ARC_SEGS;
      const amp = Math.sin(Math.PI * t) * len * 0.09;
      pt.lerpVectors(p0, p1, t);
      pos.setXYZ(k, pt.x + rand(-amp, amp), pt.y + rand(-amp, amp), pt.z + rand(-amp, amp));
    }
    pos.needsUpdate = true;
  };

  // ── Hero core (the thing you fall into) ───────────────────────────────────
  const core = new THREE.Group();
  const coreSolid = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.2, 2),
    new THREE.MeshStandardMaterial({
      color: 0x06101c,
      metalness: 0.95,
      roughness: 0.22,
      flatShading: true,
      side: THREE.DoubleSide,
    }),
  );
  const coreWire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.23, 2),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.2, 0.9, 1.2),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  const coreShell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(4.7, 1),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.15, 0.7, 1.0),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  const coreHeart = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 2),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.35, 1.1, 1.5),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    }),
  );
  core.add(coreSolid, coreWire, coreShell, coreHeart);
  scene.add(core);

  // ── Toolbox: 3D logo slabs you can bump around ────────────────────────────
  interface Tool {
    group: THREE.Group;
    anchor: THREE.Vector3;
    vel: THREE.Vector3;
    spin: THREE.Vector3;
    face: THREE.MeshStandardMaterial;
    hover: number;
    phase: number;
    base: number;
  }
  const tools: Tool[] = [];
  const hitMeshes: THREE.Mesh[] = [];
  const toolTextures: THREE.Texture[] = [];
  const canvasTextures: THREE.CanvasTexture[] = [];
  let lastCanvasVersion = hooks.canvasVersion?.() ?? 0;
  {
    const toolBase = stopZ(hooks.toolStop ?? 2);
    const slabGeo = new THREE.BoxGeometry(2.3, 2.3, 0.4);
    const edgeGeo = new THREE.EdgesGeometry(slabGeo);
    const hitGeo = new THREE.SphereGeometry(1.8, 8, 8);
    const loader = new THREE.TextureLoader();
    const sideMat = new THREE.MeshStandardMaterial({
      color: 0x07131f,
      metalness: 0.9,
      roughness: 0.3,
      emissive: 0x04202e,
    });
    const edgeMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0.3, 1.1, 1.5),
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const addSlab = (tex: THREE.Texture, anchor: THREE.Vector3, scale: number, baseGlow: number) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      toolTextures.push(tex);
      const face = new THREE.MeshStandardMaterial({
        map: tex,
        emissiveMap: tex,
        emissive: 0xffffff,
        emissiveIntensity: baseGlow,
        color: 0xcfefff,
        metalness: 0.2,
        roughness: 0.5,
      });
      const group = new THREE.Group();
      group.add(new THREE.Mesh(slabGeo, [sideMat, sideMat, sideMat, sideMat, face, face]));
      group.add(new THREE.LineSegments(edgeGeo, edgeMat));
      const hit = new THREE.Mesh(hitGeo);
      hit.visible = false;
      hit.userData.tool = tools.length;
      group.add(hit);
      hitMeshes.push(hit);
      group.scale.setScalar(scale);
      group.position.copy(anchor);
      group.rotation.set(rand(0, 6), rand(0, 6), rand(0, 6));
      scene.add(group);
      tools.push({
        group,
        anchor,
        vel: new THREE.Vector3(),
        spin: new THREE.Vector3(),
        face,
        hover: 0,
        phase: rand(0, 6.28),
        base: baseGlow,
      });
    };
    (hooks.toolImages ?? []).forEach((src, i) => {
      const ang = i * 2.1 + 0.6;
      const r = 3.3 + (i % 2) * 0.9;
      addSlab(
        loader.load(src),
        new THREE.Vector3(Math.cos(ang) * r * 1.1 + 1.2, Math.sin(ang) * r * 0.6, toolBase - 8 - i * 3.4),
        1,
        0.3,
      );
    });
    (hooks.floaties ?? []).forEach((f, i) => {
      const tex = new THREE.CanvasTexture(f.canvas);
      canvasTextures.push(tex);
      const side = i % 2 === 0 ? -1 : 1;
      addSlab(tex, new THREE.Vector3(side * 3.9, (i % 3 - 1) * 0.9, stopZ(f.stop) - 1.5), 2.0, 0.55);
    });
  }
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2(9, 9);
  let pdx = 0;
  let pdy = 0;
  let clickPending = false;
  const vRight = new THREE.Vector3();
  const vUp = new THREE.Vector3();
  const vFwd = new THREE.Vector3();
  const bump = (tl: Tool, dx: number, dy: number, push: number) => {
    camera.updateMatrixWorld();
    vRight.setFromMatrixColumn(camera.matrixWorld, 0);
    vUp.setFromMatrixColumn(camera.matrixWorld, 1);
    vFwd.setFromMatrixColumn(camera.matrixWorld, 2).negate();
    const imp = vRight.multiplyScalar(dx * 45).add(vUp.multiplyScalar(dy * 45)).add(vFwd.multiplyScalar(push));
    if (imp.length() > 9) imp.setLength(9);
    tl.vel.add(imp);
    tl.spin.x += -dy * 22 + rand(-1, 1);
    tl.spin.y += dx * 22 + rand(-1, 1);
    tl.spin.z += rand(-2, 2);
    tl.spin.clampLength(0, 14);
    tl.hover = 1;
  };
  const updateTools = (dt: number, camZ: number) => {
    const cv = hooks.canvasVersion?.() ?? 0;
    if (cv !== lastCanvasVersion) {
      lastCanvasVersion = cv;
      canvasTextures.forEach((t) => (t.needsUpdate = true));
    }
    for (const tl of tools) {
      const near = Math.abs(tl.group.position.z - camZ) < 70;
      tl.group.visible = near;
      if (!near) continue;
      const tx = tl.anchor.x;
      const ty = tl.anchor.y + Math.sin(time * 1.1 + tl.phase) * 0.28;
      tl.vel.x += (tx - tl.group.position.x) * 3.0 * dt;
      tl.vel.y += (ty - tl.group.position.y) * 3.0 * dt;
      tl.vel.z += (tl.anchor.z - tl.group.position.z) * 3.0 * dt;
      tl.vel.multiplyScalar(Math.exp(-dt * 1.8));
      tl.group.position.addScaledVector(tl.vel, dt);
      tl.spin.multiplyScalar(Math.exp(-dt * 1.2));
      tl.group.rotation.y += (0.7 + tl.spin.y) * dt;
      tl.group.rotation.x += (0.18 * Math.sin(time * 0.6 + tl.phase) + tl.spin.x) * dt;
      tl.group.rotation.z += tl.spin.z * dt;
      tl.hover *= Math.exp(-dt * 2.5);
      tl.face.emissiveIntensity = tl.base + tl.hover * 0.9;
    }
    // pointer hit-test
    if (tools.length && (pdx !== 0 || pdy !== 0 || clickPending)) {
      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObjects(hitMeshes, false).find((h) => h.distance < 45);
      if (hit) {
        const tl = tools[hit.object.userData.tool as number];
        const sp = Math.hypot(pdx, pdy);
        if (clickPending) bump(tl, pdx, pdy, 7);
        else if (sp > 0.002) bump(tl, pdx, pdy, Math.min(sp * 40, 3));
        tl.hover = 1;
      }
      pdx = 0;
      pdy = 0;
      clickPending = false;
    }
  };

  // ── Post-processing ───────────────────────────────────────────────────────
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.65, 0.12);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  const recalc = () => {
    stopScrolls = hooks.getStopScrolls();
  };
  const ro = new ResizeObserver(recalc);
  ro.observe(document.body);

  let mx = 0;
  let my = 0;
  let tmx = 0;
  let tmy = 0;
  const onPointer = (e: PointerEvent) => {
    tmx = (e.clientX / window.innerWidth - 0.5) * 2;
    tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;
    if (ndc.x < 5) {
      pdx += nx - ndc.x;
      pdy += ny - ndc.y;
    }
    ndc.set(nx, ny);
  };
  const onDown = (e: PointerEvent) => {
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    clickPending = true;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });

  // ── Scroll → camera depth ─────────────────────────────────────────────────
  const mapZ = (s: number): number => {
    const n = Math.min(stopScrolls.length, stopCount);
    if (n < 2) return START_Z;
    if (s <= stopScrolls[0]) return stopZ(0);
    if (s >= stopScrolls[n - 1]) return stopZ(n - 1);
    let i = 0;
    while (i < n - 2 && s > stopScrolls[i + 1]) i++;
    const span = Math.max(1, stopScrolls[i + 1] - stopScrolls[i]);
    const t = clamp((s - stopScrolls[i]) / span);
    const e = t * 0.3 + smooth(t) * 0.7;
    return stopZ(i) + (stopZ(i + 1) - stopZ(i)) * e;
  };

  let raf = 0;
  let last = performance.now();
  let time = 0;
  let sScroll = window.scrollY;
  let camZ = mapZ(sScroll);
  let speed = 0;
  const flash = new Array<number>(gateZ.length).fill(0);
  let disposed = false;

  const frame = (now: number) => {
    if (disposed) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt * (reduce ? 0.25 : 1);

    sScroll += (window.scrollY - sScroll) * (1 - Math.exp(-dt * 7));
    const prevZ = camZ;
    camZ = mapZ(sScroll);
    const vel = dt > 0 ? Math.abs(camZ - prevZ) / dt : 0;
    speed += (clamp(vel / 70) - speed) * (1 - Math.exp(-dt * 6));

    // gate glow + crossing flash
    let nearest = 0;
    let nearestD = 1e9;
    for (let g = 0; g < gateZ.length; g++) {
      const gz = gateZ[g];
      const d = Math.abs(camZ - gz);
      if (d < nearestD) {
        nearestD = d;
        nearest = g;
      }
      if ((prevZ - gz) * (camZ - gz) < 0) flash[g] = 1.6;
      flash[g] *= Math.exp(-dt * 2.6);
      const near = Math.exp(-(d * d) / 160);
      uGateGlow[g] = Math.min(2.2, near * 0.9 + flash[g]);

      const gate = gates[g];
      const glow = uGateGlow[g];
      (gate.outer.material as THREE.MeshBasicMaterial).opacity = clamp(0.12 + glow * 0.7, 0, 1);
      (gate.inner.material as THREE.MeshBasicMaterial).opacity = clamp(0.1 + glow * 0.5, 0, 1);
      (gate.spokes.material as THREE.LineBasicMaterial).opacity = clamp(0.05 + glow * 0.6, 0, 1);
      gate.inner.rotation.z += dt * (0.4 + glow * 2.5);
      gate.spokes.rotation.z -= dt * (0.2 + glow * 1.2);
    }
    if (gateZ.length) {
      gateLight.position.set(0, 0, gateZ[nearest]);
      gateLight.intensity = uGateGlow[nearest] * 260;
    }

    // camera
    mx += (tmx - mx) * (1 - Math.exp(-dt * 3));
    my += (tmy - my) * (1 - Math.exp(-dt * 3));
    const heroT = clamp((START_Z - camZ) / 7);
    const xOff = window.innerWidth / window.innerHeight > 1.1 ? -3.2 * (1 - smooth(heroT)) : 0;
    const swayX = Math.sin(camZ * 0.052 + 1.0) * 0.55 + mx * 0.45;
    const swayY = Math.cos(camZ * 0.038) * 0.4 - my * 0.3;
    camera.position.set(xOff + swayX, swayY, camZ);
    camera.lookAt(xOff + swayX * 0.4, swayY * 0.4, camZ - 10);
    camera.rotation.z += Math.sin(time * 0.25) * 0.004 + mx * 0.012;
    camera.fov = 65 + speed * 20;
    camera.updateProjectionMatrix();
    camLight.position.set(camera.position.x, camera.position.y + 0.5, camZ - 1.5);

    // scene bits
    tubeMat.uniforms.uTime.value = time;
    tubeMat.uniforms.uCamZ.value = camZ;
    tubeMat.uniforms.uSpeed.value = speed;
    bloom.strength = 0.62 + speed * 0.45 + (nearestD < 5 ? 0.25 : 0);

    core.visible = camZ > -12;
    if (core.visible) {
      const pulse = 1 + Math.sin(time * 2.6) * 0.025;
      core.scale.setScalar(pulse);
      coreSolid.rotation.y += dt * 0.12;
      coreWire.rotation.y += dt * 0.12;
      coreShell.rotation.y -= dt * 0.08;
      coreShell.rotation.x += dt * 0.05;
      coreHeart.rotation.y += dt * 0.6;
      coreHeart.scale.setScalar(1 + Math.sin(time * 5.0) * 0.12);
      (coreHeart.material as THREE.MeshBasicMaterial).opacity = 0.15 + 0.65 * clamp(Math.abs(camZ) / 9);
    }

    dust.position.z = 0;
    updateShards(dt, camZ);
    updateTools(dt, camZ);

    // arcs
    const activity = 0.35 + speed * 1.6 + (nearestD < 8 ? 1.0 : 0);
    for (const arc of arcs) {
      arc.timer -= dt;
      if (arc.timer <= 0) {
        if (arc.on) {
          arc.on = false;
          arc.line.visible = false;
          arc.timer = rand(0.05, 0.9) / activity;
        } else {
          buildArc(arc, camZ);
          arc.on = true;
          arc.line.visible = true;
          arc.timer = rand(0.08, 0.28);
          arc.refresh = 0;
        }
      } else if (arc.on) {
        arc.refresh -= dt;
        if (arc.refresh <= 0) {
          buildArc(arc, camZ);
          arc.refresh = 0.045;
        }
      }
    }
    arcMat.opacity = 0.65 + Math.random() * 0.35;

    composer.render();

    const total = Math.max(1, stopScrolls[stopScrolls.length - 1] - stopScrolls[0]);
    hooks.onFrame?.({
      progress: clamp((sScroll - stopScrolls[0]) / total),
      depth: Math.max(0, START_Z - camZ),
      speed,
    });
  };
  raf = requestAnimationFrame(frame);

  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("pointerdown", onDown);
    toolTextures.forEach((t) => t.dispose());
    ro.disconnect();
    scene.traverse((obj) => {
      const m = obj as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else if (mat) mat.dispose();
    });
    composer.dispose();
    renderer.dispose();
  };
}
