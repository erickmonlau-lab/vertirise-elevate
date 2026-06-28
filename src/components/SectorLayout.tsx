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
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 text-navy font-bold text-xl">
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
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                  {t('hero.btnPrimary', 'Pide tu presupuesto')}
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
      <section className="py-24 bg-[#eef2f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              {t('sector.services.title', 'Tu espacio seguro y mantenido')}
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <Reveal key={idx} delay={idx * 100} className="group relative rounded-3xl overflow-hidden aspect-square p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: svc.bgColor }}>
                <div className="text-white w-20 h-20 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-2">
                    {svc.name}
                  </h3>
                  <div className="text-white/80 text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                    {t('nav.services', 'Servicios')}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CTA Final */}
      <section className="py-20" style={{ backgroundColor: bgColor }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-10 tracking-tight leading-tight">
              {t('sector.cta.title', 'Solicita tu presupuesto sin compromiso')}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:936556161"
                className="w-full sm:w-auto px-8 py-4 bg-white text-navy font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                936 556 161
              </a>
              <a 
                href="https://wa.me/34936556161"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
