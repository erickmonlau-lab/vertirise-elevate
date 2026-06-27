import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'

export const Route = createFileRoute('/servicios/placas-solares')({
  component: PlacasSolares,
})

function PlacasSolares() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
      title: t('services.placas.feat1.title', 'Acceso seguro'),
      desc: t('services.placas.feat1.desc', 'Establecemos puntos de anclaje antes de acceder a la cubierta inclinada.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      title: t('services.placas.feat2.title', 'Lavado suave'),
      desc: t('services.placas.feat2.desc', 'Fricción con cepillos especiales que no arañan el cristal protector.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
      title: t('services.placas.feat3.title', 'Aclarado sin cal'),
      desc: t('services.placas.feat3.desc', 'El agua pura se evapora rápidamente dejando el cristal 100% traslúcido.')
    }
  ];

  const faqs = [
    {
      q: t('services.placas.faq1.q', '¿Cada cuánto limpiar placas solares?'),
      a: t('services.placas.faq1.a', 'Generalmente una o dos veces al año. En zonas industriales o agrícolas (polvo, polen), puede ser necesaria una frecuencia mayor para no perder rendimiento.')
    },
    {
      q: t('services.placas.faq2.q', '¿Qué productos usan?'),
      a: t('services.placas.faq2.a', 'Utilizamos agua osmotizada y cepillos ultrasuaves específicos para fotovoltaica. Evitamos jabones que dejen películas que reduzcan la absorción solar.')
    },
    {
      q: t('services.placas.faq3.q', '¿Baja el rendimiento con suciedad?'),
      a: t('services.placas.faq3.a', 'Sí, la acumulación de polvo, arena o excrementos de ave puede reducir la eficiencia de los paneles hasta un 30% en casos extremos.')
    },
    {
      q: t('services.placas.faq4.q', '¿Trabajáis en cubiertas industriales?'),
      a: t('services.placas.faq4.a', 'Especialmente. Nuestros operarios verticales instalan líneas de vida temporales si es necesario para asegurar la limpieza de naves completas sin riesgos.')
    }
  ];

  return (
    <ServiceLayout
      title={t('services.placas.title', 'Limpieza de Placas Solares Fotovoltaicas')}
      description={t('services.placas.longDesc', 'Maximizamos el rendimiento de su instalación fotovoltaica con limpiezas especializadas. Eliminamos polvo y suciedad que reducen la eficiencia energética.')}
      benefits={[
        t('services.placas.benefit1', '+25% de rendimiento energético'),
        t('services.placas.benefit2', 'Agua pura sin detergentes químicos'),
        t('services.placas.benefit3', 'Garantía de no dañar los paneles'),
        t('services.placas.benefit4', 'Mantenimiento e informe de eficiencia')
      ]}
      accentColor="#f59e0b"
      features={features}
      faqs={faqs}
    />
  )
}
