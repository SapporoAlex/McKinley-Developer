import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Tag from "../components/Tag";
import works from "../data/works.json";
import workHistory from "../data/workHistory.json";
import { createTunnel } from "./tunnel";
import { renderWorkCanvas } from "./workIcons";
import "../assets/Button.scss";
import "./Immersive.scss";

const CONTACT_EMAIL = "alexanderfromaustralia@gmail.com";
const BASE = import.meta.env.BASE_URL;

const TOOLS = [
  { img: "html.png", alt: "HTML5" },
  { img: "css.png", alt: "CSS3" },
  { img: "ts.png", alt: "TypeScript" },
  { img: "react.png", alt: "React" },
  { img: "vue.png", alt: "Vue" },
  { img: "astro.png", alt: "Astro" },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/** Heading that "boots" in with a flicker when its stop becomes active. */
const Heading: React.FC<{ label?: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="stop-heading">
    {label && <span className="stop-heading__label">{label}</span>}
    <h2 className="stop-heading__title">{children}</h2>
    <span className="stop-heading__bar" aria-hidden="true" />
  </div>
);

const Immersive: React.FC = () => {
  const { t, i18n } = useTranslation();
  const workCanvases = useRef<HTMLCanvasElement[]>([]);
  const canvasVersion = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLSpanElement>(null);
  const fxRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [webgl, setWebgl] = useState(true);

  const getStopScrolls = useCallback(() => {
    const root = rootRef.current;
    if (!root) return [];
    const vh = window.innerHeight;
    return Array.from(root.querySelectorAll<HTMLElement>(".stop")).map((el) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY + (r.height - vh) / 2;
    });
  }, []);

  const drawWorkCanvases = useCallback(() => {
    works.forEach((w, i) => {
      if (!workCanvases.current[i]) workCanvases.current[i] = document.createElement("canvas");
      renderWorkCanvas(workCanvases.current[i], w.i18nKey, t(`${w.i18nKey}.title`));
    });
    canvasVersion.current += 1;
  }, [t]);

  // Redraw the floaty faces on language change / when fonts arrive
  useEffect(() => {
    drawWorkCanvases();
    document.fonts?.ready.then(drawWorkCanvases);
  }, [drawWorkCanvases, i18n.language]);

  // 3D scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let dispose: (() => void) | undefined;
    try {
      dispose = createTunnel(canvas, {
        getStopScrolls,
        toolImages: TOOLS.map((tl) => `${BASE}${tl.img}`),
        toolStop: 2,
        floaties: works.map((_, i) => ({ canvas: workCanvases.current[i], stop: 3 + i })),
        canvasVersion: () => canvasVersion.current,
        onFrame: ({ progress, depth, speed }) => {
          if (railRef.current) railRef.current.style.setProperty("--p", String(progress));
          if (depthRef.current) depthRef.current.textContent = String(Math.round(depth * 12)).padStart(4, "0");
          if (fxRef.current) fxRef.current.style.setProperty("--speed", speed.toFixed(3));
        },
      });
    } catch (e) {
      console.warn("WebGL unavailable, falling back to flat background", e);
      setWebgl(false);
    }
    return () => dispose?.();
  }, [getStopScrolls]);

  // Panel travel animation: each stop swells in from ahead and is passed through.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = Array.from(root.querySelectorAll<HTMLElement>(".stop"));
    const contents = stops.map((s) => s.querySelector<HTMLElement>(".stop__content")!);
    let metrics: { center: number; half: number }[] = [];

    const measure = () => {
      metrics = stops.map((el) => {
        const r = el.getBoundingClientRect();
        return { center: r.top + window.scrollY + r.height / 2, half: r.height / 2 };
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const mid = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < stops.length; i++) {
        const m = metrics[i];
        const el = contents[i];
        if (!m || !el) continue;
        const u = (m.center - mid) / m.half; // >0 upcoming, <0 already passed
        const a = Math.abs(u);
        const k = smooth(0.4, 0.95, a);
        const opacity = 1 - k;
        let scale = 1;
        let blur = 0;
        if (u > 0) scale = 1 - 0.4 * k;
        else {
          scale = 1 + 0.9 * k;
          blur = k * 10;
        }
        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `scale(${scale.toFixed(4)})`;
        el.style.filter = blur > 0.2 ? `blur(${blur.toFixed(2)}px)` : "";
        el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
        el.style.pointerEvents = opacity < 0.5 ? "none" : "auto";
        stops[i].classList.toggle("is-active", a < 0.55);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const handleCopy = () => {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_EMAIL).then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <div className="immersive" ref={rootRef}>
      <canvas ref={canvasRef} className="immersive__canvas" aria-hidden="true" />
      {!webgl && <div className="immersive__fallback" aria-hidden="true" />}
      <div className="immersive__fx" ref={fxRef} aria-hidden="true" />

      <div className="immersive__hud" ref={railRef} aria-hidden="true">
        <span className="immersive__hud-label">DEPTH</span>
        <div className="immersive__hud-rail">
          <div className="immersive__hud-fill" />
          <div className="immersive__hud-spark" />
        </div>
        <span className="immersive__hud-value" ref={depthRef}>
          0000
        </span>
      </div>

      <main className="immersive__main">
        {/* HERO */}
        <section id="top" className="stop stop--hero">
          <div className="stop__sticky">
            <div className="stop__content">
              <p className="mono-tag">// SYSTEM ONLINE</p>
              <h1 className="hero-title">
                {t("top.title")}
                <span lang="en">{t("top.title-position")}</span>
              </h1>
              <p className="hero-text">{t("top.text")}</p>
              <div className="hero-cta">
                <Button buttonLink="#works" text={t("top.button")} />
              </div>
              <div className="scroll-hint" aria-hidden="true">
                <span>SCROLL TO DESCEND</span>
                <i />
              </div>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section id="work-history" className="stop">
          <div className="stop__sticky">
            <div className="stop__content stop__content--wide">
              <Heading label="// 01 · LOG">{t("workHistory.title")}</Heading>
              <ol className="history">
                {workHistory.map((entry) => (
                  <li key={entry.key} className="history__item">
                    <span className="history__year" lang="en">
                      {entry.year}
                    </span>
                    <span className="history__text">{t(`workHistory.entries.${entry.key}`)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="stop">
          <div className="stop__sticky">
            <div className="stop__content stop__content--wide">
              <Heading label="// 02 · STACK">{t("tools.title")}</Heading>
              <p className="tools-text">{t("tools.text")}</p>
              <p className="tools-list" lang="en">
                {TOOLS.map((tl) => tl.alt).join(" · ")}
              </p>
            </div>
          </div>
        </section>

        {/* WORKS — one stop per project */}
        {works.map((w, i) => {
          const title = t(`${w.i18nKey}.title`);
          const hasImage = !w.poster.includes("private-company");
          return (
            <section key={w.id} id={i === 0 ? "works" : undefined} className="stop">
              <div className="stop__sticky">
                <div className="stop__content stop__content--wide">
                  <span className="mono-tag" lang="en">
                    {`// ${t("header.works").toUpperCase()} · ${String(i + 1).padStart(2, "0")}/${String(works.length).padStart(2, "0")}`}
                  </span>
                  <article className={`work${hasImage ? "" : " work--text-only"}`}>
                    {hasImage && (
                    <div className="work__frame">
                      <i className="work__corner work__corner--tl" />
                      <i className="work__corner work__corner--br" />
                      <img src={`${BASE}${w.poster}`} alt={title} loading="lazy" />
                      <span className="work__scan" aria-hidden="true" />
                    </div>
                    )}
                    <div className="work__body">
                      <h2 className="work__title">{title}</h2>
                      {w.date && (
                        <span className="work__date" lang="en">
                          {w.date}
                        </span>
                      )}
                      <p className="work__desc">{t(`${w.i18nKey}.desc`)}</p>
                      <div className="work__tags">
                        {w.roles.map((r) => (
                          <Tag key={r} text={r} variant="role" />
                        ))}
                        {w.tools.map((tl) => (
                          <Tag key={tl} text={tl} variant="tool" />
                        ))}
                      </div>
                      {"link" in w && w.link && (
                        <a className="work__link" href={w.link} target="_blank" rel="noopener noreferrer">
                          {t("common.liveSite")} ↗
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </section>
          );
        })}

        {/* CONTACT */}
        <section id="contact" className="stop">
          <div className="stop__sticky">
            <div className="stop__content stop__content--wide">
              <Heading label="// 03 · SIGNAL">{t("contact.title")}</Heading>
              <div className="contact">
                <div className="contact__card">
                  <p>{t("contact.text")}</p>
                  <div className="contact__actions">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="btn is-visible">
                      {t("contact.emailButton")}
                    </a>
                    <button type="button" className="contact__copy" onClick={handleCopy} aria-label={t("contact.copy")}>
                      {copied ? t("contact.copied") : CONTACT_EMAIL}
                    </button>
                  </div>
                </div>
                <div className="contact__portrait">
                  <img src={`${BASE}profile_2.webp`} alt="profile" />
                </div>
              </div>
              <p className="contact__foot" lang="en">
                &copy; 2026 Alex McKinley
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Immersive;
