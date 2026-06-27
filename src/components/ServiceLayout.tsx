import { useState } from "react";
import { useTranslation } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";

interface ServiceLayoutProps {
  title: string;
  description: string;
  benefits: string[];
  accentColor: string;
  features: { icon: React.ReactNode; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

function FAQItem({ question, answer, accentColor }: { question: string, answer: string, accentColor: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-navy pr-4">{question}</span>
        <div 
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300" 
          style={{ backgroundColor: `${accentColor}15`, color: accentColor, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div 
        className={`px-6 transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function ServiceLayout({ title, description, benefits, accentColor, features, faqs }: ServiceLayoutProps) {
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
  const inp = "w-full h-12 px-4 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all";
  const ta = "w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a1628] pt-32 pb-20 px-6 lg:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)` }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-white/50 text-sm font-medium mb-6 flex items-center justify-center gap-2">
            <a href="/" className="hover:text-white transition-colors">{t("nav.home", "Inicio")}</a>
            <span>&gt;</span>
            <a href="/#servicios" className="hover:text-white transition-colors">{t("nav.services", "Servicios")}</a>
            <span>&gt;</span>
            <span className="text-white">{title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
            {title}
          </h1>
        </div>
      </section>

      {/* Intro + Form Content */}
      <div className="bg-[#f8fafc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight tracking-tight mb-8">
              {title}
            </h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 mb-10">
              <p className="leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy mb-6">{t("service.benefits.title", "Beneficios del servicio")}</h3>
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-slate-700 font-medium text-lg">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column (Form) */}
          <Reveal delay={100} className="w-full">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sticky top-24">
              <h3 className="text-2xl font-extrabold text-navy mb-2">
                {t("cta.title", "Solicita tu presupuesto")}
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                {t("cta.desc", "Respondemos en menos de 24 horas. Sin compromiso.")}
              </p>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full grid place-items-center mx-auto mb-4" style={{ backgroundColor: `${accentColor}15` }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    <input id="nombre" name="nombre" required type="text" className={inp} style={{ borderColor: 'var(--tw-border-opacity)', outlineColor: accentColor }} />
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
                    className="w-full h-14 mt-2 rounded-xl text-white font-black text-lg hover:-translate-y-1 transition-all"
                    style={{ backgroundColor: accentColor, boxShadow: `0 10px 20px -5px ${accentColor}60` }}
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

      {/* Features Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
                {t("service.features.title", "Nuestro Método")}
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{feat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f8fafc] py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
                {t("service.faq.title", "Preguntas Frecuentes")}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} accentColor={accentColor} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: accentColor }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t("cta.title", "Solicita tu presupuesto")}
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            {t("cta.desc", "Respondemos en menos de 24 horas. Sin compromiso.")}
          </p>
          <a
            href="tel:+34936556161"
            className="inline-flex items-center justify-center gap-3 px-10 h-16 rounded-full bg-white text-navy text-lg font-bold hover:-translate-y-1 hover:shadow-xl transition-all"
            style={{ color: accentColor }}
          >
            Llamar ahora
          </a>
        </div>
      </section>
    </>
  );
}
