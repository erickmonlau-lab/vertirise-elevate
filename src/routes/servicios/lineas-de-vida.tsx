import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'
import imgLineas from '../../assets/service-lineas.webp'
import badgeLineas from '../../assets/icon-lineas-pastel.png'
import imgHero from '../../assets/hero.webp'

export const Route = createFileRoute('/servicios/lineas-de-vida')({
  component: LineasDeVida,
})

function LineasDeVida() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      title: t('services.lineas.feat1.title', 'Estudio previo'),
      desc: t('services.lineas.feat1.desc', 'Analizamos la cubierta y diseñamos el recorrido más seguro.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      title: t('services.lineas.feat2.title', 'Fijación estructural'),
      desc: t('services.lineas.feat2.desc', 'Anclamos los postes a los elementos portantes garantizando la máxima carga.')
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>,
      title: t('services.lineas.feat3.title', 'Certificación'),
      desc: t('services.lineas.feat3.desc', 'Entregamos el dossier técnico completo con la homologación EN 795.')
    }
  ];

  const faqs = [
    {
      q: t('services.lineas.faq1.q', '¿Qué es una línea de vida?'),
      a: t('services.lineas.faq1.a', 'Es un sistema anticaídas certificado formado por un cable de acero o raíl anclado a la estructura, al que los operarios se enganchan con sus EPIs para trabajar seguros.')
    },
    {
      q: t('services.lineas.faq2.q', '¿Cada cuánto revisar?'),
      a: t('services.lineas.faq2.a', 'Por normativa, todas las líneas de vida y puntos de anclaje (EN 795) deben someterse a una revisión técnica anual obligatoria.')
    },
    {
      q: t('services.lineas.faq3.q', '¿Es obligatorio por ley?'),
      a: t('services.lineas.faq3.a', 'Sí, la Ley de Prevención de Riesgos Laborales obliga a la propiedad del edificio a garantizar el acceso seguro para tareas de mantenimiento en la cubierta.')
    },
    {
      q: t('services.lineas.faq4.q', '¿Instaláis en cualquier cubierta?'),
      a: t('services.lineas.faq4.a', 'Sí, instalamos sobre chapa simple, panel sándwich, hormigón y cubiertas de teja, adaptando los postes y placas de fijación a la estructura existente.')
    }
  ];

  return (
    <ServiceLayout
      title={t('services.lineas.title', 'Instalación y Certificación de Líneas de Vida')}
      titleHighlight={t('services.lineas.titleHighlight', 'Líneas de Vida')}
      description={t('services.lineas.longDesc', 'Diseño, montaje y certificación de sistemas anticaídas y líneas de vida homologadas. Garantizamos la máxima seguridad para trabajos en altura.')}
      benefits={[
        t('services.lineas.benefit1', 'Cumplimiento de normativa EN 795'),
        t('services.lineas.benefit2', 'Puntos de anclaje certificados'),
        t('services.lineas.benefit3', 'Revisión técnica anual obligatoria'),
        t('services.lineas.benefit4', 'Cero riesgo de caída en mantenimiento')
      ]}
      accentColor="#5B7AE8"
      heroBg="bg-[#D3B8FF]"
      imageSrc={imgLineas}
      badgeSrc={badgeLineas}
      heroBtnColor="text-blue-700"
      iconFilter="hue-rotate(90deg) saturate(2.5)"
      features={features}
      faqs={faqs}
    />
  )
}
