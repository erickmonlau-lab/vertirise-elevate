import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'

export const Route = createFileRoute('/servicios/cristales')({
  component: Cristales,
})

function Cristales() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title={t('services.cristales.title', 'Limpieza de Cristales en Altura')}
      description={t('services.cristales.longDesc', 'Nuestro servicio de limpieza de cristales en altura garantiza resultados impecables en edificios de oficinas, hoteles y residenciales. Utilizamos técnicas de trabajos verticales que nos permiten acceder a cualquier ventanal sin necesidad de andamios, reduciendo costes y molestias.')}
      benefits={[
        t('services.cristales.benefit1', 'Eliminación total de manchas y cal'),
        t('services.cristales.benefit2', 'Acceso a zonas de difícil alcance'),
        t('services.cristales.benefit3', 'Sin andamios ni maquinaria pesada'),
        t('services.cristales.benefit4', 'Personal altamente cualificado y asegurado')
      ]}
    />
  )
}
