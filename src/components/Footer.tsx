import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

function IsometricFacade() {
  // Isometric projection helpers
  // iso coords → svg coords: x' = (ix - iy) * tileW/2, y' = (ix + iy) * tileH/2
  const tileW = 44;
  const tileH = 22;
  const cols = 4;
  const rows = 7;
  // origin offset so the grid sits nicely
  const ox = 110;
  const oy = 30;

  function isoPoint(ix: number, iy: number) {
    return {
      x: ox + (ix - iy) * (tileW / 2),
      y: oy + (ix + iy) * (tileH / 2),
    };
  }

  function panelPoints(col: number, row: number) {
    const tl = isoPoint(col,     row);
    const tr = isoPoint(col + 1, row);
    const br = isoPoint(col + 1, row + 1);
    const bl = isoPoint(col,     row + 1);
    return `${tl.x},${tl.y} ${tr.x},${tr.y} ${br.x},${br.y} ${bl.x},${bl.y}`;
  }

  const panels = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (c + r) % 2 === 0;
      panels.push({ col: c, row: r, lit, idx: r * cols + c });
    }
  }

  // Gondola anchor point — hangs off top-right of grid
  const gondolaX = ox + (cols - 1) * (tileW / 2) + tileW / 2 + 10;
  const gondolaY = oy + (cols - 1) * (tileH / 2) - 10;
  // Rope top attachment
  const ropeTopX = gondolaX + 8;
  const ropeTopY = 0;

  return (
    <div style={{
      position: 'absolute', right: 0, top: 0,
      width: '220px', height: '100%',
      overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
      opacity: 0.85,
    }}>
      <style>{`
        @keyframes gondola {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-30px); }
        }
        @keyframes wipeClean {
          0%, 40%  { opacity: 0; }
          50%      { opacity: 0.7; }
          90%, 100%{ opacity: 0; }
        }
        @keyframes blinkPanel {
          0%, 100% { opacity: 0.9; }
          50%      { opacity: 0.3; }
        }
      `}</style>

      <svg
        width="220"
        height="100%"
        viewBox="0 0 220 420"
        preserveAspectRatio="xMidYMin meet"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,150,255,0.4))' }}
      >
        {/* ── Glass facade panels ── */}
        {panels.map((p) => (
          <polygon
            key={p.idx}
            points={panelPoints(p.col, p.row)}
            fill={p.lit ? 'rgba(0,150,255,0.18)' : 'rgba(0,150,255,0.07)'}
            stroke="#1a3a5c"
            strokeWidth="0.8"
            style={p.lit && p.idx % 5 === 0 ? {
              animation: `blinkPanel ${2.5 + (p.idx % 4) * 0.5}s ease-in-out ${-(p.idx * 0.4)}s infinite`,
            } : undefined}
          />
        ))}

        {/* Highlight lines on panels (glass sheen) */}
        {panels.filter(p => p.lit).map((p) => {
          const tl = isoPoint(p.col,     p.row);
          const tr = isoPoint(p.col + 1, p.row);
          const mid = isoPoint(p.col + 0.5, p.row + 0.5);
          return (
            <line
              key={`shine-${p.idx}`}
              x1={tl.x + 2} y1={tl.y + 1}
              x2={mid.x}    y2={mid.y - 2}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* ── Rope from top ── */}
        <line
          x1={ropeTopX} y1={ropeTopY}
          x2={ropeTopX} y2="420"
          stroke="#0096FF" strokeWidth="1.5"
          strokeDasharray="3 3" opacity="0.5"
        />

        {/* ── Animated gondola + worker ── */}
        <g style={{ animation: 'gondola 4s ease-in-out infinite', transformOrigin: `${ropeTopX}px 0px` }}>

          {/* Rope attachment / pulley */}
          <circle cx={ropeTopX} cy={gondolaY - 12} r="3" fill="#0096FF" opacity="0.8" />

          {/* Gondola platform */}
          <rect
            x={gondolaX - 18} y={gondolaY + 30}
            width="36" height="6" rx="2"
            fill="#0d1f3c" stroke="#0096FF" strokeWidth="1"
          />
          {/* Railing left */}
          <line x1={gondolaX - 16} y1={gondolaY + 30} x2={gondolaX - 16} y2={gondolaY + 14}
            stroke="#0096FF" strokeWidth="1" />
          {/* Railing top */}
          <line x1={gondolaX - 16} y1={gondolaY + 14} x2={gondolaX + 16} y2={gondolaY + 14}
            stroke="#0096FF" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Railing right */}
          <line x1={gondolaX + 16} y1={gondolaY + 30} x2={gondolaX + 16} y2={gondolaY + 14}
            stroke="#0096FF" strokeWidth="1" />

          {/* Worker — legs */}
          <line x1={gondolaX - 4} y1={gondolaY + 30} x2={gondolaX - 4} y2={gondolaY + 22}
            stroke="#0d1f3c" strokeWidth="4" strokeLinecap="round" />
          <line x1={gondolaX + 4} y1={gondolaY + 30} x2={gondolaX + 4} y2={gondolaY + 22}
            stroke="#0d1f3c" strokeWidth="4" strokeLinecap="round" />

          {/* Worker — body */}
          <rect
            x={gondolaX - 8} y={gondolaY + 6}
            width="16" height="16" rx="3"
            fill="#0d1f3c" stroke="#0096FF" strokeWidth="1"
          />
          {/* Arnés straps */}
          <line x1={gondolaX - 6} y1={gondolaY + 7} x2={gondolaX + 6} y2={gondolaY + 18}
            stroke="#0096FF" strokeWidth="0.8" />
          <line x1={gondolaX + 6} y1={gondolaY + 7} x2={gondolaX - 6} y2={gondolaY + 18}
            stroke="#0096FF" strokeWidth="0.8" />

          {/* Worker — right arm extended toward facade */}
          <line x1={gondolaX - 8} y1={gondolaY + 12} x2={gondolaX - 22} y2={gondolaY + 8}
            stroke="#f4a261" strokeWidth="3" strokeLinecap="round" />
          {/* Squeegee / cleaning tool */}
          <rect x={gondolaX - 28} y={gondolaY + 5} width="7" height="12" rx="1"
            fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />

          {/* Worker — left arm (holding rail) */}
          <line x1={gondolaX + 8} y1={gondolaY + 12} x2={gondolaX + 16} y2={gondolaY + 14}
            stroke="#f4a261" strokeWidth="3" strokeLinecap="round" />

          {/* Worker — head / skin */}
          <circle cx={gondolaX} cy={gondolaY + 2} r="6" fill="#f4a261" />

          {/* Helmet */}
          <path
            d={`M ${gondolaX - 7} ${gondolaY + 2} A 7 6 0 0 1 ${gondolaX + 7} ${gondolaY + 2} Z`}
            fill="#0096FF"
          />
          {/* Helmet visor line */}
          <line x1={gondolaX - 6} y1={gondolaY + 2} x2={gondolaX + 6} y2={gondolaY + 2}
            stroke="#0d1f3c" strokeWidth="1" />

          {/* Cleaning wipe effect on facade */}
          <rect
            x={gondolaX - 35} y={gondolaY + 3}
            width="8" height="18" rx="1"
            fill="rgba(255,255,255,0.45)"
            style={{ animation: 'wipeClean 4s ease-in-out infinite' }}
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
      <IsometricFacade />
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
