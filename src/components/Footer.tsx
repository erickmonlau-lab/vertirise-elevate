import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

// Glass wall grid constants
const GCOLS = 4;
const GROWS = 8;
const GW = 55;
const GH = 52;

// Water drip positions relative to squeegee tip area (approx x=52, y=20 in worker local coords)
const DRIPS = [
  { dx:  0, dy: 0,  delay: '0s',    dur: '1.1s' },
  { dx:  6, dy: 2,  delay: '-0.3s', dur: '1.3s' },
  { dx: -5, dy: 1,  delay: '-0.6s', dur: '1.0s' },
  { dx:  3, dy: 4,  delay: '-0.9s', dur: '1.4s' },
  { dx: -8, dy: 3,  delay: '-0.2s', dur: '1.2s' },
  { dx:  8, dy: 0,  delay: '-0.5s', dur: '1.5s' },
];

// Water particle burst (8 pts that fan out from squeegee impact)
const BURST = [
  { angle: -60, dist: 18 }, { angle: -40, dist: 14 }, { angle: -20, dist: 20 },
  { angle:   0, dist: 16 }, { angle:  20, dist: 18 }, { angle:  40, dist: 12 },
  { angle:  60, dist: 16 }, { angle:  80, dist: 14 },
];

function GondolaWorker() {
  const panels = [];
  for (let r = 0; r < GROWS; r++) {
    for (let c = 0; c < GCOLS; c++) {
      const bright = (c + r) % 3 === 0;
      const accent = (c + r) % 5 === 0;
      panels.push({ r, c, bright, accent, idx: r * GCOLS + c });
    }
  }

  const rope1X = 80;
  const rope2X = 140;

  return (
    <div style={{
      position: 'absolute', right: 0, top: 0,
      width: '220px', height: '100%',
      overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
      opacity: 0.88,
    }}>
      <style>{`
        @keyframes gondola {
          0%   { transform: translateY(20px); }
          100% { transform: translateY(280px); }
        }
        @keyframes ropeMove {
          to { stroke-dashoffset: -32; }
        }
        @keyframes blinkPanel {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
        /* ── window wipe arm ── */
        @keyframes wipeWindow {
          0%   { transform: rotate(-30deg); }
          50%  { transform: rotate(20deg); }
          100% { transform: rotate(-30deg); }
        }
        /* ── rope hold arm ── */
        @keyframes holdRopeL {
          0%, 100% { transform: rotate(-8deg); }
          50%      { transform: rotate(8deg); }
        }
        /* ── head nod ── */
        @keyframes nod {
          0%, 100% { transform: rotate(0deg); }
          30%      { transform: rotate(-8deg); }
          70%      { transform: rotate(5deg); }
        }
        /* ── body breathe ── */
        @keyframes bodyBreathe {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(1.025); }
        }
        /* ── glass clean ── */
        @keyframes glassFlash {
          0%, 100% { opacity: 0; }
          40%, 60% { opacity: 0.22; }
        }
        /* ── shine ── */
        @keyframes shineFlash {
          0%, 100% { opacity: 0; }
          50%      { opacity: 0.9; }
        }
        /* ── drips ── */
        @keyframes drip {
          0%   { transform: translateY(0px);  opacity: 1; }
          100% { transform: translateY(35px); opacity: 0; }
        }
      `}</style>

      <svg
        width="220"
        height="100%"
        viewBox="0 0 220 400"
        preserveAspectRatio="xMidYMin meet"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,150,255,0.4))' }}
      >
        {/* ── Glass wall ── */}
        {panels.map((p) => (
          <rect
            key={p.idx}
            x={p.c * GW} y={p.r * GH}
            width={GW} height={GH}
            fill={
              p.accent ? 'rgba(0,150,255,0.28)' :
              p.bright ? 'rgba(0,150,255,0.16)' :
                         'rgba(0,150,255,0.07)'
            }
            stroke="rgba(0,150,255,0.4)" strokeWidth="1"
            style={p.accent ? {
              animation: `blinkPanel ${2 + (p.idx % 3) * 0.7}s ease-in-out ${-(p.idx * 0.3)}s infinite`,
            } : undefined}
          />
        ))}

        {/* Glass sheens */}
        {panels.filter(p => p.bright || p.accent).map((p) => (
          <line
            key={`s${p.idx}`}
            x1={p.c * GW + 6} y1={p.r * GH + 4}
            x2={p.c * GW + 20} y2={p.r * GH + 18}
            stroke="rgba(255,255,255,0.12)" strokeWidth="4" strokeLinecap="round"
          />
        ))}

        {/* ── Crystal clean flash — stays fixed in glass wall ── */}
        <rect x="120" y="0" width="38" height="100" rx="2"
          fill="rgba(255,255,255,0.12)"
          style={{ animation: 'glassFlash 1.5s ease-in-out infinite' }}
        />
        <line x1="122" y1="8" x2="148" y2="70"
          stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round"
          style={{ animation: 'shineFlash 1.5s ease-in-out infinite' }}
        />

        {/* ── Ropes — centred on new character position ── */}
        <line x1="158" y1="0" x2="158" y2="400"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.55"
          style={{ animation: 'ropeMove 1s linear infinite' }}
        />
        <line x1="182" y1="0" x2="182" y2="400"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.55"
          style={{ animation: 'ropeMove 1s linear infinite' }}
        />

        {/* ══ GONDOLA — animates up/down ══ */}
        <g style={{ animation: 'gondola 6s ease-in-out infinite alternate' }}>

          {/* Platform */}
          <rect x="140" y="180" width="70" height="14" rx="3"
            fill="#0d2a4a" stroke="#0096FF" strokeWidth="1.5" />
          {/* Railing posts */}
          <line x1="148" y1="180" x2="148" y2="162" stroke="#0096FF" strokeWidth="1.5" />
          <line x1="202" y1="180" x2="202" y2="162" stroke="#0096FF" strokeWidth="1.5" />
          {/* Railing top */}
          <line x1="148" y1="162" x2="202" y2="162"
            stroke="#0096FF" strokeWidth="1" strokeDasharray="5 3" />
          {/* Pulley connectors to ropes */}
          <circle cx="158" cy="180" r="4" fill="#0096FF" opacity="0.9" />
          <circle cx="182" cy="180" r="4" fill="#0096FF" opacity="0.9" />

          {/* ── WORKER ── */}

          {/* Legs */}
          <rect x="163" y="148" width="9" height="32" rx="3" fill="#0d1f3c" />
          <rect x="178" y="148" width="9" height="32" rx="3" fill="#0d1f3c" />

          {/* Body — breathing */}
          <g style={{ transformOrigin: '170px 140px', transformBox: 'fill-box', animation: 'bodyBreathe 2.5s ease-in-out infinite' }}>
            <rect x="155" y="108" width="30" height="40" rx="5"
              fill="#0d1f3c" stroke="#0096FF" strokeWidth="1.5" />
            {/* Arnés orange X */}
            <path d="M 157 110 L 183 144 M 183 110 L 157 144"
              stroke="#f4a261" strokeWidth="3" strokeLinecap="round" />
            {/* Belt */}
            <rect x="155" y="128" width="30" height="6" rx="2" fill="#f4a261" />
          </g>

          {/* ── Left arm — holds rope, sways ── */}
          <g style={{ transformOrigin: '155px 115px', transformBox: 'fill-box', animation: 'holdRopeL 3s ease-in-out infinite' }}>
            {/* Upper arm */}
            <rect x="143" y="112" width="14" height="8" rx="4" fill="#FDBCB4" />
            {/* Forearm */}
            <rect x="132" y="118" width="14" height="8" rx="4"
              fill="#FDBCB4" style={{ transform: 'rotate(20deg)', transformOrigin: '143px 120px', transformBox: 'fill-box' }} />
            {/* Hand gripping rope */}
            <circle cx="133" cy="126" r="5" fill="#FDBCB4" />
          </g>

          {/* ── Right arm — wipes glass ── */}
          <g style={{ transformOrigin: '185px 115px', transformBox: 'fill-box', animation: 'wipeWindow 1.5s ease-in-out infinite' }}>
            {/* Upper arm */}
            <rect x="185" y="110" width="8" height="18" rx="4" fill="#FDBCB4" />
            {/* Forearm */}
            <rect x="185" y="125" width="8" height="16" rx="4" fill="#FDBCB4" />
            {/* Handle */}
            <rect x="183" y="138" width="12" height="5" rx="2" fill="#888" />
            {/* Squeegee blade */}
            <rect x="178" y="142" width="22" height="7" rx="3" fill="#0096FF" />
            {/* Squeegee gloss */}
            <rect x="178" y="142" width="22" height="3" rx="2" fill="rgba(255,255,255,0.45)" />

            {/* Water drips from blade */}
            {DRIPS.map((d, i) => (
              <circle
                key={i}
                cx={185 + d.dx}
                cy={149 + d.dy}
                r="2"
                fill="rgba(0,150,255,0.85)"
                style={{ animation: `drip ${d.dur} ease-in ${d.delay} infinite` }}
              />
            ))}
          </g>

          {/* ── HEAD — nods, 3/4 view ── */}
          <g style={{ transformOrigin: '170px 88px', transformBox: 'fill-box', animation: 'nod 2s ease-in-out infinite' }}>
            {/* Face (skin ellipse) */}
            <ellipse cx="170" cy="88" rx="14" ry="16" fill="#FDBCB4" />
            {/* Left cheek blush */}
            <circle cx="160" cy="94" r="5" fill="rgba(255,150,100,0.3)" />
            {/* Right cheek blush */}
            <circle cx="178" cy="94" r="4" fill="rgba(255,150,100,0.25)" />
            {/* Left eye (front, bigger) */}
            <circle cx="163" cy="85" r="3" fill="#2d1b00" />
            <circle cx="164" cy="84" r="1" fill="white" />
            {/* Left eyebrow */}
            <path d="M 159 81 Q 163 79 167 81"
              stroke="#2d1b00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Right eye (side, smaller — 3/4 perspective) */}
            <circle cx="176" cy="85" r="2" fill="#2d1b00" />
            <circle cx="177" cy="84" r="0.7" fill="white" />
            {/* Smile */}
            <path d="M 160 96 Q 168 102 176 96"
              stroke="#2d1b00" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Helmet top */}
            <path d="M 156 88 A 14 16 0 0 1 184 88 Z" fill="#0096FF" />
            {/* Helmet brim */}
            <rect x="153" y="87" width="34" height="5" rx="2" fill="#0096FF" />
            {/* Visor strip */}
            <rect x="160" y="88" width="20" height="6" rx="2"
              fill="#0d2a4a" stroke="#0096FF" strokeWidth="0.8" />
          </g>

        </g>{/* end gondola */}
      </svg>
    </div>
  );
}

const PHONE_HREF = "tel:+34936556161";
const WA_HREF = "https://wa.me/34936556161?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20gratuito.";
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden">
      <GondolaWorker />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoDiset}
                alt="Vertirise Elevate"
                className="h-10 w-auto invert brightness-0 opacity-90"
              />
            </div>
            <p className="text-slate-400 text-sm mb-2">Carrer de Cuzco, 39-41, 08030 Barcelona</p>
            <p className="text-slate-400 text-sm mb-6">info@vertirise.com</p>
            <div className="text-slate-400 text-sm">
              <p className="font-semibold text-slate-300 mb-1">{t("footer.schedule.label")}:</p>
              <p>{t("footer.schedule")}</p>
              <p className="mt-1 font-bold text-white text-lg">935 22 43 05</p>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.company")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.work")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors flex items-center gap-2">
                  {t("footer.company.cancel")}
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.legal")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.notice")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.cookies")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Zonas de Trabajo */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">
              {t("footer.zones")}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.barcelona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.maresme")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.girona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.tarragona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.lleida")}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vertirise Elevate. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

// — Sticky Mobile CTA —
export function StickyMobileCTA() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 h-12 rounded-xl bg-electric text-white font-bold flex items-center justify-center gap-2 shadow-glow active:scale-95 transition-transform"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="font-semibold">{t("nav.call", "Llamar")}</span>
        </a>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" />
          </svg>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
