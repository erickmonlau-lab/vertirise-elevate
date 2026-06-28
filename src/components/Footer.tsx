import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

// Glass wall grid constants
const GCOLS = 4;
const GROWS = 8;
const GW = 55;   // panel width
const GH = 52;   // panel height

function GondolaWorker() {
  const panels = [];
  for (let r = 0; r < GROWS; r++) {
    for (let c = 0; c < GCOLS; c++) {
      // alternating + accent fills
      const bright = (c + r) % 3 === 0;
      const accent = (c + r) % 5 === 0;
      panels.push({ r, c, bright, accent, idx: r * GCOLS + c });
    }
  }

  // Rope x positions (centred in the 220px wide container)
  const rope1X = 80;
  const rope2X = 140;

  return (
    <div style={{
      position: 'absolute', right: 0, top: 0,
      width: '220px', height: '100%',
      overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
      opacity: 0.85,
    }}>
      <style>{`
        @keyframes gondola {
          0%   { transform: translateY(20px); }
          100% { transform: translateY(320px); }
        }
        @keyframes ropeMove {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -32; }
        }
        @keyframes wipeClean {
          0%, 35% { opacity: 0; }
          50%     { opacity: 0.8; }
          85%, 100%{ opacity: 0; }
        }
        @keyframes blinkPanel {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
        @keyframes scrub {
          0%, 100% { transform: rotate(-15deg); }
          50%      { transform: rotate(15deg); }
        }
        @keyframes grip {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(3px); }
        }
        @keyframes look {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-8deg); }
        }
      `}</style>

      <svg
        width="220"
        height="100%"
        viewBox="0 0 220 400"
        preserveAspectRatio="xMidYMin meet"
        style={{ filter: 'drop-shadow(0 0 5px rgba(0,150,255,0.35))' }}
      >
        {/* ── Glass wall background ── */}
        {panels.map((p) => (
          <rect
            key={p.idx}
            x={p.c * GW}
            y={p.r * GH}
            width={GW}
            height={GH}
            fill={
              p.accent  ? 'rgba(0,150,255,0.28)' :
              p.bright  ? 'rgba(0,150,255,0.16)' :
                          'rgba(0,150,255,0.07)'
            }
            stroke="rgba(0,150,255,0.4)"
            strokeWidth="1"
            style={p.accent ? {
              animation: `blinkPanel ${2 + (p.idx % 3) * 0.7}s ease-in-out ${-(p.idx * 0.3)}s infinite`,
            } : undefined}
          />
        ))}

        {/* Glass sheen diagonal lines */}
        {panels.filter(p => p.bright || p.accent).map((p) => (
          <line
            key={`s${p.idx}`}
            x1={p.c * GW + 6}  y1={p.r * GH + 4}
            x2={p.c * GW + 20} y2={p.r * GH + 18}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}

        {/* ── Static ropes from top ── */}
        <line x1={rope1X} y1="0" x2={rope1X} y2="400"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"
          style={{ animation: 'ropeMove 1s linear infinite' }}
        />
        <line x1={rope2X} y1="0" x2={rope2X} y2="400"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"
          style={{ animation: 'ropeMove 1s linear infinite' }}
        />

        {/* ── Animated gondola + worker ── */}
        <g style={{ animation: 'gondola 6s ease-in-out infinite alternate' }}>

          {/* Gondola platform */}
          <rect x="51" y="78" width="118" height="16" rx="3"
            fill="#0d2a4a" stroke="#0096FF" strokeWidth="1.5" />
          {/* Railing left post */}
          <line x1="60" y1="78" x2="60" y2="55" stroke="#0096FF" strokeWidth="1.5" />
          {/* Railing right post */}
          <line x1="160" y1="78" x2="160" y2="55" stroke="#0096FF" strokeWidth="1.5" />
          {/* Railing top bar */}
          <line x1="60" y1="55" x2="160" y2="55"
            stroke="#0096FF" strokeWidth="1" strokeDasharray="5 3" />
          {/* Pulley circles on ropes */}
          <circle cx={rope1X} cy="78" r="4" fill="#0096FF" opacity="0.9" />
          <circle cx={rope2X} cy="78" r="4" fill="#0096FF" opacity="0.9" />

          {/* ── Worker: legs ── */}
          <rect x="96" y="48" width="12" height="30" rx="3" fill="#1a1a2e" />
          <rect x="112" y="48" width="12" height="30" rx="3" fill="#1a1a2e" />

          {/* ── Worker: body ── */}
          <rect x="88" y="10" width="44" height="40" rx="5"
            fill="#1a1a2e" stroke="#0096FF" strokeWidth="1.5" />
          {/* Arnés X straps */}
          <line x1="91" y1="12" x2="129" y2="46" stroke="#0096FF" strokeWidth="2" />
          <line x1="129" y1="12" x2="91" y2="46" stroke="#0096FF" strokeWidth="2" />
          {/* Belt */}
          <line x1="88" y1="30" x2="132" y2="30" stroke="#0096FF" strokeWidth="1.5" />

          {/* ── Worker: left arm (scrubbing — rotates from shoulder at 88,22) ── */}
          <g style={{ transformOrigin: '88px 22px', animation: 'scrub 1.5s ease-in-out infinite', transformBox: 'fill-box' }}>
            <line x1="88" y1="22" x2="60" y2="15"
              stroke="#f4a261" strokeWidth="5" strokeLinecap="round" />
            {/* Squeegee handle */}
            <line x1="60" y1="15" x2="50" y2="13"
              stroke="#aaa" strokeWidth="3" strokeLinecap="round" />
            {/* Squeegee blade */}
            <rect x="44" y="8" width="8" height="20" rx="2"
              fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
          </g>

          {/* ── Worker: right arm (grip pulse on railing) ── */}
          <g style={{ animation: 'grip 2s ease-in-out infinite' }}>
            <line x1="132" y1="22" x2="158" y2="55"
              stroke="#f4a261" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* ── Worker: face / head (looks toward glass) ── */}
          <g style={{ transformOrigin: '110px 0px', animation: 'look 3s ease-in-out infinite', transformBox: 'fill-box' }}>
            <circle cx="110" cy="0" r="18" fill="#f4a261" />
            {/* Helmet */}
            <path d="M 92 0 A 18 16 0 0 1 128 0 Z" fill="#0096FF" />
            {/* Helmet brim */}
            <rect x="89" y="-1" width="42" height="5" rx="2" fill="#0096FF" />
            {/* Visor */}
            <rect x="97" y="2" width="26" height="8" rx="3"
              fill="#0d2a4a" stroke="#0096FF" strokeWidth="1" />
          </g>

          {/* Cleaning wipe flash on the glass */}
          <rect x="44" y="6" width="10" height="24" rx="1"
            fill="rgba(255,255,255,0.6)"
            style={{ animation: 'wipeClean 6s ease-in-out infinite alternate' }}
          />
        </g>
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
