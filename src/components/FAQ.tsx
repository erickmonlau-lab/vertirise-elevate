import { useState } from "react";
import { useTranslation } from "../i18n/I18nContext";

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('faq.1.q') || "¿Por qué elegir trabajos verticales en lugar de andamios?",
      a: t('faq.1.a') || "Los trabajos verticales ofrecen mayor rapidez de instalación, menor coste al evitar alquiler de estructuras, y nula interrupción del tránsito peatonal o del negocio, manteniendo la estética de la fachada durante la intervención."
    },
    {
      q: t('faq.2.q') || "¿Es seguro el sistema de cuerdas para los operarios y el edificio?",
      a: t('faq.2.a') || "Absolutamente. Utilizamos sistemas de doble cuerda (trabajo y seguridad) certificados bajo la normativa IRATA y EN 795. Nuestros anclajes no dañan la estructura y garantizamos cero riesgo de caídas."
    },
    {
      q: t('faq.3.q') || "¿Cuánto tiempo tardan en iniciar un proyecto?",
      a: t('faq.3.a') || "Al no requerir montaje de andamios pesados, podemos iniciar la mayoría de las intervenciones de limpieza y mantenimiento en 24-48 horas tras la aprobación del presupuesto y la evaluación de riesgos."
    },
    {
      q: t('faq.4.q') || "¿Qué productos químicos utilizan en la limpieza de cristales y fachadas?",
      a: t('faq.4.a') || "Priorizamos sistemas de agua pura osmotizada que limpian sin dejar residuos ni marcas, siendo 100% ecológicos. Para suciedad muy incrustada o grafitis, usamos disolventes biodegradables específicos según el material."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">
            {t('faq.badge') || "Preguntas Frecuentes"}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            {t('faq.title') || "Resolvemos sus dudas"}
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md bg-slate-50' : 'bg-white hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-navy text-lg pr-8">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-electric text-white' : 'bg-slate-100 text-navy'}`}>
                    <svg 
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
