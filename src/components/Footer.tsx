import { useState, useEffect } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

const PHONE_HREF = "tel:+34936556161";
const WA_HREF = "https://wa.me/34936556161?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20gratuito.";
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden">
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
