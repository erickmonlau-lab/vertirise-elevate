import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { SEOHead } from '../../components/SEOHead'
import { ServiceSchema } from '../../components/SchemaOrg'
import { useEffect } from 'react'
import imgFachadas from '../../assets/service-fachadas.webp'
import badgeFachadas from '../../assets/icon-fachadas-pastel.webp'

export const Route = createFileRoute('/servicios/fachadas')({
  component: Fachadas,
})

function Fachadas() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>,
      title: t('services.fachadas.feat1.title', 'Limpieza a presión'),
      desc: t('services.fachadas.feat1.desc', 'Desincrustación de contaminación y humos con agua a presión controlada.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14.7 13.5-3.4-3.4"/><path d="M18.8 6.4 15.6 3.2a1 1 0 0 0-1.4 0L3.2 14.2a1 1 0 0 0 0 1.4l3.2 3.2a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0 0-1.4Z"/></svg>,
      title: t('services.fachadas.feat2.title', 'Reparación de grietas'),
      desc: t('services.fachadas.feat2.desc', 'Sellado de fisuras y reparación de desconchones para evitar filtraciones.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: t('services.fachadas.feat3.title', 'Protección hidrófuga'),
      desc: t('services.fachadas.feat3.desc', 'Aplicación de productos repelentes al agua para prolongar el efecto de limpieza.')
    }
  ];

  const faqs = [
    {
      q: t('services.fachadas.faq1.q', '¿Qué tipos de fachada limpiáis?'),
      a: t('services.fachadas.faq1.a', 'Trabajamos sobre fachadas acristaladas, de piedra natural, ladrillo caravista, hormigón y paneles metálicos (Alucobond). Adaptamos la técnica al material.')
    },
    {
      q: t('services.fachadas.faq2.q', '¿Eliminan grafitis?'),
      a: t('services.fachadas.faq2.a', 'Sí, disponemos de productos y maquinaria especializada para disolver la pintura del grafiti de forma segura y sin dañar la superficie porosa original.')
    },
    {
      q: t('services.fachadas.faq3.q', '¿Afecta a los vecinos?'),
      a: t('services.fachadas.faq3.a', 'Nuestros métodos verticales minimizan las molestias. No ocupamos la acera con andamios y las zonas de paso quedan delimitadas por seguridad durante la jornada.')
    },
    {
      q: t('services.fachadas.faq4.q', '¿Cuánto dura el tratamiento?'),
      a: t('services.fachadas.faq4.a', 'Dependiendo del tratamiento protector (como antigrafitis o hidrófugos), la fachada puede repeler agua y suciedad entre 3 y 5 años.')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('seo.fachadas.title', 'Limpieza de Fachadas Barcelona | Trabajos Verticales DISET')}
        description={t('seo.fachadas.description', 'Limpieza y restauración de fachadas en Barcelona mediante técnicas verticales. Eliminación de grafitis, suciedad y manchas. Certificados IRATA. Más de 4.500 fachadas limpias.')}
        canonical="https://vertirise-elevate.vercel.app/servicios/fachadas"
        ogImage="/og-home.webp"
        keywords={t('seo.fachadas.keywords', 'limpieza fachadas barcelona, restauración fachadas altura, eliminación grafitis barcelona')}
      />
      <ServiceSchema
        name={t('services.fachadas.title', 'Limpieza de Fachadas')}
        description={t('seo.fachadas.schema.desc', 'Limpieza y restauración de fachadas en Barcelona mediante técnicas verticales. Eliminación de grafitis, suciedad y manchas. Certificados IRATA.')}
        url="https://vertirise-elevate.vercel.app/servicios/fachadas"
        breadcrumbLabel={t('services.fachadas.short', 'Limpieza de Fachadas')}
        faqs={faqs}
      />
      <ServiceLayout
        title={t('services.fachadas.title', 'Limpieza y Restauración de Fachadas')}
        titleHighlight={t('services.fachadas.titleHighlight', 'de Fachadas')}
        description={t('services.fachadas.longDesc', 'Mantenimiento integral de fachadas. Limpiamos, pintamos y reparamos desperfectos en lugares de difícil acceso sin necesidad de andamios.')}
        benefits={[
          t('services.fachadas.benefit1', 'Piedra, cristal, ladrillo y metal'),
          t('services.fachadas.benefit2', 'Sin andamios ni permisos de vía pública'),
          t('services.fachadas.benefit3', 'Eliminación y tratamiento antigraffiti'),
          t('services.fachadas.benefit4', 'Técnicos especialistas certificados')
        ]}
        accentColor="#f0cba2"
        heroBg="bg-[#FFF0E5]"
        imageSrc={imgFachadas}
        badgeSrc={badgeFachadas}
        heroBtnColor="text-pink-700"
        iconFilter="hue-rotate(80deg) saturate(2.5)"
        features={features}
        faqs={faqs}
      />
    </>
  )
}
