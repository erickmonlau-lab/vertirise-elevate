import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

// Glass wall grid constants
const GCOLS = 4;
const GROWS = 8;
const GW = 55;   // panel width
const GH = 52;   // panel height

function GondolaWorker({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none z-0 overflow-hidden ${className}`}>
      <style>{`
        @keyframes gondola {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(150px); }
        }
        @keyframes ropeMove {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        @keyframes scrubArm {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-15deg); }
        }
        @keyframes grip {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(2px); }
        }
        @keyframes blinkPanel {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.25; }
        }
        @keyframes wipeClean {
          0%, 35% { opacity: 0; }
          50%     { opacity: 0.85; }
          85%, 100%{ opacity: 0; }
        }
      `}</style>
      <svg
        className="w-full h-full"
        viewBox="0 0 220 370"
        preserveAspectRatio="xMidYMax meet"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,150,255,0.4))' }}
      >
        {/* EDIFICIO CENTRAL — más alto, con remate triangular en la cima */}
        <polygon points="62,25 148,10 148,370 62,370" fill="#112540"/>
        <rect x="62" y="25" width="86" height="345" rx="0" fill="#112540"/>
        {/* Triángulo remate central: punta derecha arriba */}
        <polygon points="62,25 148,10 148,25" fill="#1a3a5c"/>

        {/* Ventanas edificio central */}
        <rect x="68"  y="35"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.28)" stroke="rgba(0,150,255,0.5)" strokeWidth="0.5" style={{animation:'blinkPanel 2.3s ease-in-out infinite'}}/>
        <rect x="86"  y="35"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.10)" stroke="rgba(0,150,255,0.25)" strokeWidth="0.5"/>
        <rect x="104" y="35"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.20)" stroke="rgba(0,150,255,0.40)" strokeWidth="0.5"/>
        <rect x="122" y="35"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.08)" stroke="rgba(0,150,255,0.20)" strokeWidth="0.5"/>
        <rect x="68"  y="53"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.10)" stroke="rgba(0,150,255,0.25)" strokeWidth="0.5"/>
        <rect x="86"  y="53"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.28)" stroke="rgba(0,150,255,0.50)" strokeWidth="0.5" style={{animation:'blinkPanel 1.9s ease-in-out infinite'}}/>
        <rect x="104" y="53"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.08)" stroke="rgba(0,150,255,0.20)" strokeWidth="0.5"/>
        <rect x="122" y="53"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.22)" stroke="rgba(0,150,255,0.42)" strokeWidth="0.5"/>
        <rect x="68"  y="71"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.08)" stroke="rgba(0,150,255,0.20)" strokeWidth="0.5"/>
        <rect x="86"  y="71"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.18)" stroke="rgba(0,150,255,0.38)" strokeWidth="0.5"/>
        <rect x="104" y="71"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.28)" stroke="rgba(0,150,255,0.50)" strokeWidth="0.5" style={{animation:'blinkPanel 3s ease-in-out infinite'}}/>
        <rect x="122" y="71"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.10)" stroke="rgba(0,150,255,0.25)" strokeWidth="0.5"/>
        <rect x="68"  y="89"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.22)" stroke="rgba(0,150,255,0.42)" strokeWidth="0.5" style={{animation:'blinkPanel 2.6s ease-in-out infinite'}}/>
        <rect x="86"  y="89"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.08)" stroke="rgba(0,150,255,0.20)" strokeWidth="0.5"/>
        <rect x="104" y="89"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.15)" stroke="rgba(0,150,255,0.32)" strokeWidth="0.5"/>
        <rect x="122" y="89"  width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.28)" stroke="rgba(0,150,255,0.50)" strokeWidth="0.5" style={{animation:'blinkPanel 2s ease-in-out infinite'}}/>
        <rect x="68"  y="107" width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.08)" stroke="rgba(0,150,255,0.20)" strokeWidth="0.5"/>
        <rect x="86"  y="107" width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.25)" stroke="rgba(0,150,255,0.45)" strokeWidth="0.5"/>
        <rect x="104" y="107" width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.10)" stroke="rgba(0,150,255,0.25)" strokeWidth="0.5" style={{animation:'blinkPanel 2.7s ease-in-out infinite'}}/>
        <rect x="122" y="107" width="13" height="11" rx="1.5" fill="rgba(0,150,255,0.18)" stroke="rgba(0,150,255,0.38)" strokeWidth="0.5"/>

        {/* EDIFICIO IZQUIERDO — el más bajo, tapa las 2 primeras columnas del central */}
        <rect x="10" y="210" width="92" height="160" rx="0" fill="#0e2340"/>
        {/* Triángulo remate izquierdo: punta derecha arriba */}
        <polygon points="10,210 102,180 102,210" fill="#162d4a"/>

        {/* Ventanas edificio izquierdo */}
        {[...Array(9)].map((_, r) => 
          [...Array(4)].map((_, c) => (
            <rect key={`L-${r}-${c}`} x={22 + c * 18} y={225 + r * 16} width="13" height="11" rx="1.5" 
              fill={(r + c) % 5 === 0 ? 'rgba(91,184,232,0.22)' : (r + c) % 3 === 0 ? 'rgba(91,184,232,0.15)' : 'rgba(91,184,232,0.08)'} 
              stroke={(r + c) % 5 === 0 ? 'rgba(91,184,232,0.42)' : 'rgba(91,184,232,0.20)'} strokeWidth="0.5" 
              style={(r + c) % 5 === 0 ? { animation: `blinkPanel ${2 + (r%3)}s ease-in-out infinite` } : {}} 
            />
          ))
        )}

        {/* EDIFICIO DERECHO — altura media, remate triangular */}
        <rect x="148" y="95" width="62" height="275" rx="0" fill="#0d1f38"/>
        {/* Triángulo remate derecho: punta izquierda arriba */}
        <polygon points="148,95 148,78 210,95" fill="#142840"/>

        {/* Ventanas edificio derecho */}
        <rect x="154" y="106" width="11" height="9" rx="1" fill="rgba(42,109,181,0.22)" stroke="rgba(42,109,181,0.42)" strokeWidth="0.5" style={{animation:'blinkPanel 2.9s ease-in-out infinite'}}/>
        <rect x="169" y="106" width="11" height="9" rx="1" fill="rgba(42,109,181,0.08)" stroke="rgba(42,109,181,0.20)" strokeWidth="0.5"/>
        <rect x="184" y="106" width="11" height="9" rx="1" fill="rgba(42,109,181,0.18)" stroke="rgba(42,109,181,0.38)" strokeWidth="0.5"/>
        <rect x="154" y="122" width="11" height="9" rx="1" fill="rgba(42,109,181,0.08)" stroke="rgba(42,109,181,0.20)" strokeWidth="0.5"/>
        <rect x="169" y="122" width="11" height="9" rx="1" fill="rgba(42,109,181,0.25)" stroke="rgba(42,109,181,0.45)" strokeWidth="0.5" style={{animation:'blinkPanel 2.3s ease-in-out infinite'}}/>
        <rect x="184" y="122" width="11" height="9" rx="1" fill="rgba(42,109,181,0.08)" stroke="rgba(42,109,181,0.20)" strokeWidth="0.5"/>
        <rect x="154" y="138" width="11" height="9" rx="1" fill="rgba(42,109,181,0.20)" stroke="rgba(42,109,181,0.40)" strokeWidth="0.5"/>
        <rect x="169" y="138" width="11" height="9" rx="1" fill="rgba(42,109,181,0.08)" stroke="rgba(42,109,181,0.20)" strokeWidth="0.5"/>
        <rect x="184" y="138" width="11" height="9" rx="1" fill="rgba(42,109,181,0.28)" stroke="rgba(42,109,181,0.50)" strokeWidth="0.5" style={{animation:'blinkPanel 3.4s ease-in-out infinite'}}/>
        <rect x="154" y="154" width="11" height="9" rx="1" fill="rgba(42,109,181,0.10)" stroke="rgba(42,109,181,0.25)" strokeWidth="0.5" style={{animation:'blinkPanel 2s ease-in-out infinite'}}/>
        <rect x="169" y="154" width="11" height="9" rx="1" fill="rgba(42,109,181,0.20)" stroke="rgba(42,109,181,0.40)" strokeWidth="0.5"/>
        <rect x="184" y="154" width="11" height="9" rx="1" fill="rgba(42,109,181,0.08)" stroke="rgba(42,109,181,0.20)" strokeWidth="0.5"/>

        {/* CUERDAS — x=90 y x=110, dentro del edificio central */}
        <line x1="90" y1="25" x2="90" y2="370"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55"
          style={{ animation: 'ropeMove 1.2s linear infinite' }}
        />
        <line x1="110" y1="25" x2="110" y2="370"
          stroke="#0096FF" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55"
          style={{ animation: 'ropeMove 1.2s linear infinite' }}
        />

        {/* GONDOLA + OPERARIO */}
        <g style={{ animation: 'gondola 5s ease-in-out infinite alternate' }}>
          <rect x="66" y="175" width="88" height="12" rx="3" fill="#0d2a4a" stroke="#0096FF" strokeWidth="1.4"/>
          <line x1="76"  y1="175" x2="76"  y2="157" stroke="#0096FF" strokeWidth="1.2"/>
          <line x1="144" y1="175" x2="144" y2="157" stroke="#0096FF" strokeWidth="1.2"/>
          <line x1="76"  y1="157" x2="144" y2="157" stroke="#0096FF" strokeWidth="0.9" strokeDasharray="4 3"/>
          <circle cx="90"  cy="175" r="3.5" fill="#0096FF" opacity="0.9"/>
          <circle cx="110" cy="175" r="3.5" fill="#0096FF" opacity="0.9"/>

          <rect x="97"  y="146" width="9" height="29" rx="3" fill="#1a1a2e"/>
          <rect x="110" y="146" width="9" height="29" rx="3" fill="#1a1a2e"/>

          <rect x="93" y="110" width="34" height="36" rx="5" fill="#1a1a2e" stroke="#0096FF" strokeWidth="1.3"/>
          <line x1="96"  y1="112" x2="124" y2="143" stroke="#0096FF" strokeWidth="1.7"/>
          <line x1="124" y1="112" x2="96"  y2="143" stroke="#0096FF" strokeWidth="1.7"/>
          <line x1="93"  y1="128" x2="127" y2="128" stroke="#0096FF" strokeWidth="1.2"/>

          <g style={{ transformOrigin: '93px 122px', animation: 'scrubArm 1.5s ease-in-out infinite' }}>
            <line x1="93" y1="122" x2="76" y2="120" stroke="#f4a261" strokeWidth="4.5" strokeLinecap="round"/>
            <line x1="76" y1="120" x2="66" y2="118" stroke="#f4a261" strokeWidth="3.5" strokeLinecap="round"/>
            <line x1="66" y1="118" x2="59" y2="116" stroke="#aaaaaa" strokeWidth="2.5" strokeLinecap="round"/>
            <rect x="54" y="110" width="6" height="13" rx="1.5" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
            <rect x="54" y="110" width="6" height="13" rx="1" fill="rgba(255,255,255,0.55)"
              style={{ animation: 'wipeClean 5s ease-in-out infinite alternate' }}/>
          </g>

          <g style={{ animation: 'grip 2s ease-in-out infinite' }}>
            <line x1="127" y1="122" x2="140" y2="154" stroke="#f4a261" strokeWidth="4.5" strokeLinecap="round"/>
          </g>

          <circle cx="110" cy="98" r="15" fill="#f4a261"/>
          <path d="M 95 98 A 15 15 0 0 1 125 98 Z" fill="#0096FF"/>
          <rect x="91" y="94" width="24" height="5" rx="2" fill="#0096FF"/>
          <circle cx="103" cy="102" r="1.9" fill="#1a1a2e"/>
          <circle cx="102.6" cy="101.3" r="0.6" fill="white"/>
          <circle cx="116" cy="102" r="1.7" fill="#1a1a2e"/>
          <circle cx="115.6" cy="101.3" r="0.6" fill="white"/>
          <path d="M 102 107 Q 110 112 118 107" stroke="#1a1a2e" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
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
    <footer className="bg-[#0b1121] text-white pt-20 pb-28 md:pb-16 relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="relative overflow-hidden">
            <GondolaWorker className="md:hidden absolute right-[-8px] bottom-0 w-[100px] h-[140px] opacity-100" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoDiset}
                  alt="DISET Limpiezas Verticales"
                  className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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
      <GondolaWorker className="hidden md:block absolute right-0 bottom-0 h-[340px] w-[220px] opacity-85" />
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
