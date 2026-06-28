import { useState, useEffect } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";
const PHONE_HREF = "tel:+34936556161";
function Logo({ white }: { white: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src={logoDiset}
        alt="DISET Limpiezas Verticales"
        height={48}
        className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${white ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

// — Nav (White initially, Dark Glass on scroll) —
export function Nav() {
  const { t, setLanguage, language } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#servicios", label: t("nav.services") },
    { href: "/#proyectos", label: t("nav.projects") },
    { href: "/#proceso", label: t("nav.process") },
    { href: "/#cobertura", label: t("nav.coverage") },
    { href: "/#contacto", label: t("nav.contact") },
  ];

  return (
    <>
      <div className="fixed top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-4 pointer-events-none transition-all duration-300">
        <header
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 bg-white rounded-3xl md:rounded-full px-5 md:px-6 py-3.5 md:py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 border border-slate-100 ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] translate-y-0" : "shadow-lg md:translate-y-2"}`}
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            <a
              href="/#top"
              onClick={() => setMobileOpen(false)}
              className="scale-90 md:scale-100 origin-left"
            >
              <Logo white={false} />
            </a>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Abrir menú"
                className="flex flex-col justify-center items-center w-8 h-8 gap-[6px] transition-all"
              >
                <span
                  className={`block w-6 h-[1px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  className={`block w-6 h-[1px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-[1px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                />
              </button>

              <div className="flex items-center text-xs text-slate-500 tracking-widest gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`transition-colors ${language === "es" ? "text-navy font-black" : "font-medium hover:text-navy"}`}
                >
                  ES
                </button>
                <span className="text-slate-300 font-light text-[10px] opacity-70">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage("ca")}
                  className={`transition-colors ${language === "ca" ? "text-navy font-black" : "font-medium hover:text-navy"}`}
                >
                  CA
                </button>
                <span className="text-slate-300 font-light text-[10px] opacity-70">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`transition-colors ${language === "en" ? "text-navy font-black" : "font-medium hover:text-navy"}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-navy">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-electric transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 tracking-wider bg-slate-50 rounded-md shadow-sm border border-slate-100">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`w-10 py-2 text-center transition-colors rounded-l-md ${language === "es" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                ES
              </button>
              <span className="w-px h-3 bg-slate-300"></span>
              <button
                type="button"
                onClick={() => setLanguage("ca")}
                className={`w-10 py-2 text-center transition-colors ${language === "ca" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                CA
              </button>
              <span className="w-px h-3 bg-slate-300"></span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`w-10 py-2 text-center transition-colors rounded-r-md ${language === "en" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                EN
              </button>
            </div>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-5 h-9 rounded-full bg-electric text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(0,150,255,0.4)] hover:-translate-y-0.5 transition-all"
            >
              {t("nav.call")}
            </a>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out w-full ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="flex flex-col gap-1 border-t border-slate-100 pt-2 pb-1 mt-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 text-navy font-bold text-sm hover:text-electric transition-all rounded-md hover:bg-slate-50"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
