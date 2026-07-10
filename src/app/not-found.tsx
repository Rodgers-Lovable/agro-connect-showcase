import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | AgroInternational",
  robots: { index: false, follow: false },
};

const sceneVars = {
  "--nf-navy-top": "hsl(210 48% 8%)",
  "--nf-navy": "hsl(210 45% 14%)",
  "--nf-dusk": "hsl(26 42% 26%)",
  "--nf-gold": "hsl(45 72% 56%)",
  "--nf-gold-light": "hsl(45 88% 70%)",
  "--nf-ivory": "hsl(42 67% 96%)",
  "--nf-ivory-dim": "hsl(42 22% 76%)",
  "--nf-leaf": "hsl(95 36% 52%)",
} as CSSProperties;

const quickLinks = [
  { name: "Products", path: "/products" },
  { name: "Quality", path: "/quality" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

// Plowed furrows drawn in perspective, all converging to the horizon (600,0).
const furrows = Array.from({ length: 15 }, (_, i) => -260 + i * 130);

export default function NotFound() {
  return (
    <main className="nf" style={sceneVars}>
      <style>{nfCss}</style>

      {/* Sky */}
      <div className="nf-sky" aria-hidden="true" />
      {/* Sun halo behind the numerals */}
      <div className="nf-halo nf-anim" aria-hidden="true" />

      {/* Drifting seeds on the wind */}
      <div className="nf-motes" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className={`nf-mote nf-mote-${i}`} />
        ))}
      </div>

      {/* The field */}
      <div className="nf-field" aria-hidden="true">
        <svg
          className="nf-field-svg"
          viewBox="0 0 1200 340"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="nf-soil" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="hsl(26 40% 24%)" />
              <stop offset="0.22" stopColor="hsl(210 45% 12%)" />
              <stop offset="1" stopColor="hsl(212 52% 6%)" />
            </linearGradient>
          </defs>
          <rect width="1200" height="340" fill="url(#nf-soil)" />
          {/* Cross-furrow ridges for depth */}
          {[26, 66, 122, 208, 320].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="1200"
              y2={y}
              stroke="hsl(45 60% 55%)"
              strokeOpacity={0.06 + (y / 340) * 0.08}
              strokeWidth={1 + (y / 340) * 2}
            />
          ))}
          {/* Converging furrows */}
          {furrows.map((x, i) => (
            <line
              key={`f-${i}`}
              x1={x}
              y1="340"
              x2="600"
              y2="0"
              stroke="hsl(45 62% 56%)"
              strokeOpacity="0.16"
              strokeWidth="1.4"
            />
          ))}
        </svg>

        {/* The one living thing */}
        <svg
          className="nf-sprout nf-anim"
          viewBox="0 0 40 60"
          role="img"
          aria-label="A single green sprout"
        >
          <path
            d="M20 60 V26"
            stroke="var(--nf-leaf)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20 34 C10 30 5 22 6 14 C15 15 21 22 20 34 Z"
            fill="var(--nf-leaf)"
          />
          <path
            d="M20 30 C30 27 35 19 34 11 C25 12 19 19 20 30 Z"
            fill="var(--nf-leaf)"
            opacity="0.88"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="nf-content">
        <Link href="/" className="nf-brand nf-anim">
          <span className="nf-brand-agro">Agro</span>International
        </Link>

        <p className="nf-eyebrow nf-anim">Error 404 · Nothing planted here</p>

        <div className="nf-num nf-anim" aria-hidden="true">
          <span>4</span>
          <span className="nf-sun" />
          <span>4</span>
        </div>

        <h1 className="nf-head nf-anim">This field lies fallow</h1>

        <p className="nf-sub nf-anim">
          The page you&apos;re after was never sown — or its harvest already
          shipped. Let&apos;s walk you back to solid ground.
        </p>

        <div className="nf-actions nf-anim">
          <Link href="/" className="nf-btn">
            Back to home
          </Link>
          <nav className="nf-links" aria-label="Popular pages">
            {quickLinks.map((l, i) => (
              <span key={l.path} className="nf-link-wrap">
                {i > 0 && <span className="nf-dot" aria-hidden="true" />}
                <Link href={l.path} className="nf-link">
                  {l.name}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}

const nfCss = `
.nf {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: var(--nf-navy-top);
  color: var(--nf-ivory);
  font-family: var(--font-lato, ui-sans-serif, system-ui, sans-serif);
  isolation: isolate;
}
.nf-sky {
  position: absolute;
  inset: 0 0 34% 0;
  background: linear-gradient(
    to bottom,
    var(--nf-navy-top) 0%,
    var(--nf-navy) 46%,
    hsl(210 44% 18%) 74%,
    var(--nf-dusk) 100%
  );
}
.nf-halo {
  position: absolute;
  left: 50%;
  top: 34%;
  width: min(46rem, 92vw);
  height: min(46rem, 92vw);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(45 80% 60% / 0.5) 0%,
    hsl(45 75% 50% / 0.16) 32%,
    transparent 62%
  );
  z-index: -1;
  animation: nfGlow 7s ease-in-out infinite;
}
.nf-field {
  position: absolute;
  inset: auto 0 0 0;
  height: 34%;
}
.nf-field-svg {
  display: block;
  width: 100%;
  height: 100%;
}
/* warm horizon seam */
.nf-field::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    hsl(45 78% 62% / 0.55),
    transparent
  );
  box-shadow: 0 0 22px 3px hsl(40 70% 55% / 0.35);
}
.nf-sprout {
  position: absolute;
  left: 62%;
  bottom: 15%;
  width: clamp(2.4rem, 5vw, 3.7rem);
  height: auto;
  transform: translateX(-50%);
  transform-origin: 50% 100%;
  animation: nfSway 5.5s ease-in-out infinite;
  filter:
    drop-shadow(0 7px 9px hsl(212 55% 4% / 0.65))
    drop-shadow(0 0 14px hsl(95 46% 46% / 0.5));
}

.nf-motes {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.nf-mote {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: hsl(45 80% 70% / 0.85);
  bottom: 30%;
  opacity: 0;
  animation: nfDrift 11s linear infinite;
}
.nf-mote-0 { left: 14%; animation-delay: 0s; }
.nf-mote-1 { left: 27%; animation-delay: 3.4s; width: 3px; height: 3px; }
.nf-mote-2 { left: 41%; animation-delay: 6.1s; }
.nf-mote-3 { left: 56%; animation-delay: 1.7s; width: 3px; height: 3px; }
.nf-mote-4 { left: 68%; animation-delay: 8.2s; }
.nf-mote-5 { left: 79%; animation-delay: 4.6s; width: 5px; height: 5px; }
.nf-mote-6 { left: 90%; animation-delay: 2.5s; width: 3px; height: 3px; }

.nf-content {
  position: relative;
  z-index: 1;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1.5rem 40vh;
  gap: 0.35rem;
}
.nf-brand {
  position: absolute;
  top: clamp(1.25rem, 4vw, 2.25rem);
  left: clamp(1.25rem, 4vw, 2.5rem);
  font-family: var(--font-montserrat, ui-sans-serif, system-ui, sans-serif);
  font-weight: 700;
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  letter-spacing: -0.01em;
  color: var(--nf-ivory);
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.nf-brand:hover { opacity: 0.8; }
.nf-brand-agro { color: var(--nf-gold); }

.nf-eyebrow {
  font-size: clamp(0.72rem, 1.6vw, 0.85rem);
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: var(--nf-gold);
  margin: 0 0 0.4rem;
  font-weight: 600;
}
.nf-num {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.4rem, 2vw, 1.1rem);
  font-family: var(--font-montserrat, ui-sans-serif, system-ui, sans-serif);
  font-weight: 800;
  font-size: clamp(6.5rem, 26vw, 17rem);
  line-height: 0.82;
  letter-spacing: -0.04em;
  color: var(--nf-ivory);
}
.nf-sun {
  width: clamp(4.4rem, 18vw, 11.6rem);
  height: clamp(4.4rem, 18vw, 11.6rem);
  border-radius: 50%;
  background: radial-gradient(
    circle at 38% 34%,
    var(--nf-gold-light) 0%,
    var(--nf-gold) 52%,
    hsl(38 70% 44%) 100%
  );
  box-shadow:
    0 0 60px 6px hsl(45 78% 55% / 0.45),
    inset -8px -10px 26px hsl(32 60% 34% / 0.55);
}
.nf-head {
  font-family: var(--font-montserrat, ui-sans-serif, system-ui, sans-serif);
  font-weight: 700;
  font-size: clamp(1.9rem, 6vw, 3.4rem);
  letter-spacing: -0.02em;
  margin: 0.9rem 0 0;
  color: var(--nf-ivory);
}
.nf-sub {
  max-width: 34rem;
  font-size: clamp(1rem, 2.3vw, 1.18rem);
  line-height: 1.6;
  color: var(--nf-ivory-dim);
  margin: 0.9rem 0 0;
}
.nf-actions {
  margin-top: 2.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
}
.nf-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  background: var(--nf-gold);
  color: hsl(210 45% 12%);
  font-family: var(--font-montserrat, ui-sans-serif, system-ui, sans-serif);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 10px 30px -8px hsl(45 70% 45% / 0.6);
}
.nf-btn:hover {
  background: var(--nf-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 16px 36px -8px hsl(45 70% 45% / 0.7);
}
.nf-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 0.75rem;
}
.nf-link-wrap { display: inline-flex; align-items: center; gap: 0.75rem; }
.nf-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--nf-gold);
  opacity: 0.6;
}
.nf-link {
  color: var(--nf-ivory-dim);
  text-decoration: none;
  font-size: 0.95rem;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.nf-link:hover {
  color: var(--nf-ivory);
  border-bottom-color: var(--nf-gold);
}

/* Visible keyboard focus on the dark scene */
.nf a:focus-visible {
  outline: 2px solid var(--nf-gold);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Entrance */
.nf-anim { animation: nfRise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both; }
.nf-brand { animation-delay: 0.05s; }
.nf-eyebrow { animation-delay: 0.12s; }
.nf-num { animation-delay: 0.2s; }
.nf-head { animation-delay: 0.32s; }
.nf-sub { animation-delay: 0.42s; }
.nf-actions { animation-delay: 0.52s; }
.nf-halo { animation-delay: 0s, 0.2s; }
.nf-sprout { animation-delay: 0.2s; }

@keyframes nfRise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes nfGlow {
  0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.95; transform: translate(-50%, -50%) scale(1.06); }
}
@keyframes nfSway {
  0%, 100% { transform: translateX(-50%) rotate(-4deg); }
  50% { transform: translateX(-50%) rotate(4deg); }
}
@keyframes nfDrift {
  0% { transform: translate(0, 0); opacity: 0; }
  12% { opacity: 0.8; }
  85% { opacity: 0.6; }
  100% { transform: translate(46px, -46vh); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nf-anim,
  .nf-sprout,
  .nf-halo { animation: none !important; }
  .nf-motes { display: none; }
  .nf-sprout { transform: translateX(-50%); }
  .nf-halo { opacity: 0.7; }
}

@media (max-width: 640px) {
  .nf-content { padding-bottom: 46vh; }
  .nf-field { height: 40%; }
  .nf-sky { inset: 0 0 40% 0; }
}
`;
