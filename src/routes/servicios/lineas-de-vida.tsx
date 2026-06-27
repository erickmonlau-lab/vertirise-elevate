import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'

export const Route = createFileRoute('/servicios/lineas-de-vida')({
  component: LineasDeVida,
})

function LineasDeVida() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title={t('services.lineas.title', 'Instalación de Líneas de Vida')}
      description={t('services.lineas.longDesc', 'Diseñamos, instalamos y certificamos sistemas anticaídas y líneas de vida para cubiertas, naves industriales y fachadas. Garantizamos el cumplimiento estricto de la normativa EN 795 para la máxima seguridad de los operarios.')}
      benefits={[
        t('services.lineas.benefit1', 'Estudio técnico previo y diseño a medida'),
        t('services.lineas.benefit2', 'Certificación bajo normativa EN 795'),
        t('services.lineas.benefit3', 'Materiales de máxima resistencia y durabilidad'),
        t('services.lineas.benefit4', 'Revisión y mantenimiento periódico')
      ]}
    />
  )
}
