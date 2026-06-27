import { useState } from "react";
import { useTranslation } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";

interface ServiceLayoutProps {
  title: string;
  description: string;
  benefits: string[];
}

export function ServiceLayout({ title, description, benefits }: ServiceLayoutProps) {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const telefono = data.get("telefono") as string;
    const email = data.get("email") as string;
    const mensaje = data.get("mensaje") as string;

    const body = `Nombre: ${nombre}%0ATel%C3%A9fono: ${telefono}%0AEmail: ${email}%0AServicio: ${title}%0AMensaje: ${mensaje}`;
    window.location.href = `mailto:info@disetlimpiezasverticales.com?subject=Solicitud%20de%20Presupuesto%20-%20${title}&body=${body}`;
    setSent(true);
  };

  const lbl = "block text-navy text-sm font-bold mb-1.5";
  const inp =
    "w-full h-12 px-4 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all";
  const ta =
    "w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all resize-none";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a1628] pt-32 pb-20 px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm font-medium mb-6 flex items-center justify-center gap-2">
            <a href="/" className="hover:text-white transition-colors">{t("nav.home", "Inicio")}</a>
            <span>&gt;</span>
            <a href="/#servicios" className="hover:text-white transition-colors">{t("nav.services", "Servicios")}</a>
            <span>&gt;</span>
            <span className="text-white">{title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f8fafc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight mb-8">
              {title}
            </h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 mb-10">
              <p className="leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy mb-6">{t("service.benefits.title", "Beneficios del servicio")}</h3>
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-electric" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-slate-600 font-medium">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column (Form) */}
          <Reveal delay={100} className="w-full">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-extrabold text-navy mb-2">
                {t("cta.title", "Solicita tu presupuesto")}
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                {t("cta.desc", "Respondemos en menos de 24 horas. Sin compromiso.")}
              </p>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-electric/15 grid place-items-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-extrabold text-navy mb-2">
                    {t("contact.success", "¡Mensaje enviado!")}
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className={lbl}>
                      {t("contact.name", "Nombre")} *
                    </label>
                    <input id="nombre" name="nombre" required type="text" className={inp} />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className={lbl}>
                        {t("contact.phone", "Teléfono")} *
                      </label>
                      <input id="telefono" name="telefono" required type="tel" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="email" className={lbl}>
                        {t("contact.email", "Email")}
                      </label>
                      <input id="email" name="email" type="email" className={inp} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className={lbl}>
                      {t("contact.message", "Mensaje")}
                    </label>
                    <textarea id="mensaje" name="mensaje" rows={4} className={ta} />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 mt-2 rounded-xl bg-electric text-white font-black text-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-electric/30 transition-all"
                  >
                    {t("contact.submit", "Solicitar Presupuesto")}
                  </button>
                  
                  <p className="text-slate-400 text-xs text-center font-medium mt-4">
                    {t("contact.privacy", "Sus datos están protegidos.")}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
    </>
  );
}
