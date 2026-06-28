import { useState } from "react";
import { useTranslation } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";

interface SectorLayoutProps {
  title: string;
  description: string;
  phone: string;
  bgColor: string; // solid color for the hero, e.g. #5BC8E8
  
  benefitsTitle: string;
  benefits: string[];
  imageSrc: string;

  services: {
    name: string;
    icon: React.ReactNode;
    bgColor: string;
  }[];
}

export function SectorLayout({
  title,
  description,
  phone,
  bgColor,
  benefitsTitle,
  benefits,
  imageSrc,
  services,
}: SectorLayoutProps) {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white pt-[104px]">
      {/* SECTION 1: Hero with Form */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Col: Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.05] tracking-tight mb-6">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-navy/80 mb-8 font-medium">
                  {description}
                </p>
                <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-full px-6 py-3 text-navy font-bold text-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  {phone}
                </div>
              </Reveal>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {t('form.title', 'Solicita más información')}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    {t('form.subtitle', 'Rellena el formulario y nos pondremos en contacto contigo lo antes posible.')}
                  </p>
                  
                  {sent ? (
                    <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center border border-green-200">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p className="font-bold text-lg mb-1">{t('form.success', '¡Mensaje enviado!')}</p>
                      <p className="text-sm opacity-90">{t('form.successDesc', 'Te responderemos en breve.')}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input 
                        type="text" 
                        required 
                        placeholder={t('form.name', 'Nombre y Apellidos*')}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-navy placeholder:text-slate-400"
                      />
                      <input 
                        type="email" 
                        required 
                        placeholder={t('form.email', 'Correo electrónico*')}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-navy placeholder:text-slate-400"
                      />
                      <input 
                        type="tel" 
                        required 
                        placeholder={t('form.phone', 'Teléfono de contacto*')}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-navy placeholder:text-slate-400"
                      />
                      <textarea 
                        rows={3} 
                        placeholder={t('form.message', 'Mensaje')}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-navy placeholder:text-slate-400 resize-none"
                      ></textarea>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="privacy" required className="mt-1.5 accent-electric" />
                        <label htmlFor="privacy" className="text-xs text-slate-500 leading-tight">
                          {t('form.privacy', 'He leído y acepto el procesamiento, el tratamiento y la transferencia de mis datos personales conforme a lo dispuesto en la Política de Privacidad.')}
                        </label>
                      </div>
                      <button 
                        type="submit"
                        className="w-full py-4 rounded-xl font-bold text-lg text-white bg-navy hover:bg-electric transition-colors shadow-lg shadow-navy/20"
                      >
                        {t('nav.call', 'Contactar')}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Descripción y Casos de Éxito */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 leading-tight tracking-tight">
                  {benefitsTitle}
                </h2>
                <ul className="space-y-6 mb-10">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: bgColor }}>
                        <svg className="w-3.5 h-3.5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg text-slate-600 leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white transition-all shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: bgColor, color: '#0a1628' }}>
                  {t('hero.btn.quote')}
                </a>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={100} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Grid de Servicios Específicos */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy">
              {t('sector.services.title', 'Servicios incluidos')}
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <Reveal key={idx} delay={idx * 100} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 hover:shadow-lg hover:border-electric/30 hover:-translate-y-1 transition-all cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-4">
                  {/* Remove mix-blend-multiply from inner image via string replace in Sector components, but here we just render the icon */}
                  {svc.icon}
                </div>
                <h3 className="text-navy font-bold text-xl text-center mt-2">
                  {svc.name}
                </h3>
                <div className="text-electric text-sm font-semibold text-center mt-3 flex items-center justify-center gap-1">
                  {t('sector.services.view', 'Ver servicio')} &rarr;
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CTA Final Rediseñado */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div 
              className="relative rounded-3xl p-10 shadow-xl"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-black text-white mb-2">
                    {t('sector.cta.title', 'Solicita tu presupuesto sin compromiso')}
                  </h2>
                  <p className="text-white/90 text-base font-medium mb-0">
                    {t('sector.cta.desc', 'Respondemos en menos de 24 horas. Sin compromiso.')}
                  </p>
                </div>
                
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <a
                    href="tel:+34644652741"
                    className="px-8 py-4 bg-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
                    style={{ color: bgColor }}
                  >
                    {t('sector.cta.btn', 'Contactar ahora')}
                  </a>
                  <span className="text-white font-bold text-xs tracking-widest uppercase mt-2">
                    {t('nav.atencion', 'ATENCIÓN INMEDIATA')}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
