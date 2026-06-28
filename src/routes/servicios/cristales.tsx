import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'
import imgCristales from '../../assets/service-cristales.webp'
import badgeCristales from '../../assets/icon-cristales-pastel.png'
import imgAfterCristales from '../../assets/after-cristales.webp'

export const Route = createFileRoute('/servicios/cristales')({
  component: Cristales,
})

function Cristales() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>,
      title: t('services.cristales.feat1.title', 'Inspección'),
      desc: t('services.cristales.feat1.desc', 'Evaluamos los anclajes y la superficie de cristal para planificar el descenso.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
      title: t('services.cristales.feat2.title', 'Agua Osmotizada'),
      desc: t('services.cristales.feat2.desc', 'Aplicamos agua pura mediante pértigas y sistemas de lavado avanzados.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: t('services.cristales.feat3.title', 'Revisión final'),
      desc: t('services.cristales.feat3.desc', 'Comprobamos la ausencia total de gotas o cercos antes de dar el servicio por concluido.')
    }
  ];

  const faqs = [
    {
      q: t('services.cristales.faq1.q', '¿Cada cuánto limpiar cristales de empresa?'),
      a: t('services.cristales.faq1.a', 'Depende de la ubicación y la imagen deseada. En zonas urbanas o industriales recomendamos limpiezas trimestrales o semestrales para evitar acumulación de cal y contaminación.')
    },
    {
      q: t('services.cristales.faq2.q', '¿Qué es el agua osmotizada?'),
      a: t('services.cristales.faq2.a', 'Es agua purificada y libre de minerales. Al secarse, no deja cercos, marcas ni manchas de cal, asegurando un acabado perfecto sin usar químicos agresivos.')
    },
    {
      q: t('services.cristales.faq3.q', '¿Trabajáis en edificios en uso?'),
      a: t('services.cristales.faq3.a', 'Sí, nuestro sistema de cuerdas es silencioso y poco invasivo. Podemos realizar la limpieza sin interrumpir la actividad normal de sus trabajadores o clientes.')
    },
    {
      q: t('services.cristales.faq4.q', '¿Tenéis seguro de responsabilidad civil?'),
      a: t('services.cristales.faq4.a', 'Por supuesto, contamos con un seguro de RC integral y todo nuestro personal dispone de las certificaciones IRATA correspondientes y revisiones médicas al día.')
    }
  ];

  return (
    <ServiceLayout
      title={t('services.cristales.title', 'Limpieza de Cristales en Altura')}
      description={t('services.cristales.longDesc', 'Especialistas en limpieza de cristales en altura mediante técnicas de acceso por cuerdas y agua osmotizada. Sin andamios, sin marcas, sin interrupciones.')}
      benefits={[
        t('services.cristales.benefit1', 'Sin andamios ni plataformas elevadoras'),
        t('services.cristales.benefit2', 'Agua osmotizada sin marcas ni residuos'),
        t('services.cristales.benefit3', 'Técnicos certificados IRATA'),
        t('services.cristales.benefit4', 'Presupuesto gratuito en 24h')
      ]}
      accentColor="#5BC8E8"
      imageSrc={imgCristales}
      badgeSrc={badgeCristales}
      heroBtnColor="text-green-700"
      iconFilter="hue-rotate(270deg) saturate(2.5)"
      features={features}
      faqs={faqs}
    />
  )
}
