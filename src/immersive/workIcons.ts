/** Procedural icon + title faces for the per-work floaties (light-blue line art). */

const CYAN = "#7ff0ff";
type Draw = (c: CanvasRenderingContext2D) => void;

const circle = (c: CanvasRenderingContext2D, x: number, y: number, r: number) => {
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
};

const ICONS: Record<string, Draw> = {
  // 清 emblem in a ring
  "works.seishinkaiKarate": (c) => {
    circle(c, 256, 175, 128);
    c.stroke();
    circle(c, 256, 175, 110);
    c.lineWidth = 3;
    c.stroke();
    c.lineWidth = 9;
    c.font = "700 170px 'Hiragino Mincho ProN','Yu Mincho',serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillStyle = CYAN;
    c.fillText("清", 256, 182);
  },

  // ramen bowl with steam + chopsticks
  "works.marugame": (c) => {
    c.beginPath();
    c.moveTo(110, 185);
    c.lineTo(402, 185);
    c.arc(256, 185, 146, 0, Math.PI, false);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(210, 345);
    c.lineTo(302, 345);
    c.stroke();
    // noodles
    c.lineWidth = 5;
    for (let k = 0; k < 3; k++) {
      c.beginPath();
      for (let x = 140; x <= 372; x += 6) {
        const y = 215 + k * 26 + Math.sin(x / 14 + k) * 7;
        x === 140 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.stroke();
    }
    // steam
    c.lineWidth = 7;
    for (const sx of [200, 256, 312]) {
      c.beginPath();
      for (let y = 160; y >= 70; y -= 4) {
        const x = sx + Math.sin(y / 11 + sx) * 9;
        y === 160 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.stroke();
    }
    // chopsticks
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(320, 150);
    c.lineTo(430, 40);
    c.moveTo(345, 165);
    c.lineTo(455, 55);
    c.stroke();
  },

  // fishing boat
  "works.gyoren": (c) => {
    c.beginPath();
    c.moveTo(90, 215);
    c.lineTo(422, 215);
    c.lineTo(366, 280);
    c.lineTo(150, 280);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(250, 215);
    c.lineTo(250, 60);
    c.stroke();
    c.beginPath();
    c.moveTo(250, 70);
    c.lineTo(360, 200);
    c.lineTo(250, 200);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(250, 62);
    c.lineTo(205, 78);
    c.lineTo(250, 94);
    c.stroke();
    c.lineWidth = 6;
    for (const wy of [310, 334]) {
      c.beginPath();
      for (let x = 70; x <= 442; x += 6) {
        const y = wy + Math.sin(x / 18 + wy) * 6;
        x === 70 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.stroke();
    }
  },

  // elevator: door + up/down arrows
  "works.mebs": (c) => {
    c.beginPath();
    c.roundRect(96, 50, 240, 280, 14);
    c.stroke();
    c.beginPath();
    c.moveTo(216, 50);
    c.lineTo(216, 330);
    c.stroke();
    c.lineWidth = 6;
    c.beginPath();
    c.roundRect(150, 70, 132, 28, 6);
    c.stroke();
    c.lineWidth = 9;
    c.beginPath();
    c.moveTo(406, 100);
    c.lineTo(372, 160);
    c.lineTo(440, 160);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(406, 270);
    c.lineTo(372, 210);
    c.lineTo(440, 210);
    c.closePath();
    c.stroke();
  },

  // game controller
  "works.gamerblog": (c) => {
    c.beginPath();
    c.roundRect(76, 110, 360, 170, 80);
    c.stroke();
    c.lineWidth = 12;
    c.beginPath();
    c.moveTo(166, 162);
    c.lineTo(166, 228);
    c.moveTo(133, 195);
    c.lineTo(199, 195);
    c.stroke();
    c.lineWidth = 8;
    circle(c, 336, 170, 16);
    c.stroke();
    circle(c, 380, 205, 16);
    c.stroke();
    c.beginPath();
    c.moveTo(230, 215);
    c.lineTo(282, 215);
    c.stroke();
  },

  // gear (dev tools)
  "works.OzTools": (c) => {
    const cx = 256;
    const cy = 185;
    c.beginPath();
    const teeth = 10;
    for (let k = 0; k < teeth * 2; k++) {
      const a = (k / (teeth * 2)) * Math.PI * 2;
      const r = k % 2 === 0 ? 140 : 108;
      const a2 = a + (Math.PI / teeth) * 0.55;
      c.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      c.lineTo(cx + Math.cos(a2) * r, cy + Math.sin(a2) * r);
    }
    c.closePath();
    c.stroke();
    circle(c, cx, cy, 48);
    c.stroke();
  },

  // artist palette
  "works.artistPortfolio": (c) => {
    c.beginPath();
    c.ellipse(256, 180, 160, 125, -0.1, 0, Math.PI * 2);
    c.stroke();
    circle(c, 330, 235, 24);
    c.stroke();
    for (const [x, y] of [
      [185, 150],
      [240, 112],
      [305, 125],
      [345, 175],
    ]) {
      circle(c, x, y, 18);
      c.stroke();
    }
    c.beginPath();
    c.moveTo(150, 250);
    c.lineTo(110, 330);
    c.stroke();
  },

  // hamster face
  "works.gamingSite": (c) => {
    circle(c, 256, 195, 112);
    c.stroke();
    circle(c, 172, 100, 36);
    c.stroke();
    circle(c, 340, 100, 36);
    c.stroke();
    c.fillStyle = CYAN;
    circle(c, 216, 180, 11);
    c.fill();
    circle(c, 296, 180, 11);
    c.fill();
    circle(c, 256, 212, 10);
    c.fill();
    c.lineWidth = 6;
    c.beginPath();
    c.arc(236, 228, 20, 0, Math.PI * 0.9);
    c.stroke();
    c.beginPath();
    c.arc(276, 228, 20, Math.PI * 0.1, Math.PI);
    c.stroke();
  },
};

const wrap = (c: CanvasRenderingContext2D, text: string, maxW: number): string[] => {
  const tokens = /\s/.test(text) ? text.split(" ").map((w, i, a) => (i < a.length - 1 ? w + " " : w)) : Array.from(text);
  const lines: string[] = [];
  let cur = "";
  for (const tk of tokens) {
    if (c.measureText(cur + tk).width > maxW && cur) {
      lines.push(cur.trim());
      cur = tk;
    } else cur += tk;
  }
  if (cur) lines.push(cur.trim());
  return lines;
};

export function renderWorkCanvas(canvas: HTMLCanvasElement, key: string, title: string) {
  const S = 512;
  canvas.width = S;
  canvas.height = S;
  const c = canvas.getContext("2d");
  if (!c) return;

  c.clearRect(0, 0, S, S);
  const bg = c.createLinearGradient(0, 0, 0, S);
  bg.addColorStop(0, "#05182a");
  bg.addColorStop(1, "#020a14");
  c.fillStyle = bg;
  c.fillRect(0, 0, S, S);

  // inner frame
  c.strokeStyle = "rgba(127,240,255,0.35)";
  c.lineWidth = 3;
  c.strokeRect(14, 14, S - 28, S - 28);

  // icon
  c.save();
  c.strokeStyle = CYAN;
  c.fillStyle = CYAN;
  c.lineWidth = 9;
  c.lineCap = "round";
  c.lineJoin = "round";
  c.shadowColor = "#2cd0ec";
  c.shadowBlur = 18;
  (ICONS[key] ?? ICONS["works.OzTools"])(c);
  c.restore();

  // title
  c.fillStyle = "#ffffff";
  c.textAlign = "center";
  c.textBaseline = "alphabetic";
  c.shadowColor = "#2cd0ec";
  c.shadowBlur = 10;
  let size = 38;
  let lines: string[] = [];
  for (; size >= 24; size -= 3) {
    c.font = `700 ${size}px system-ui, -apple-system, 'Hiragino Sans', 'Yu Gothic', sans-serif`;
    lines = wrap(c, title, S - 80);
    if (lines.length <= 3) break;
  }
  const lh = size * 1.22;
  const startY = 392 + (3 - Math.min(lines.length, 3)) * (lh / 2);
  lines.slice(0, 3).forEach((ln, i) => c.fillText(ln, S / 2, startY + i * lh));
}
