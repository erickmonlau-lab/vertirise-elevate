import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from '../../i18n/I18nContext'
import { ServiceLayout } from '../../components/ServiceLayout'
import { useEffect } from 'react'

export const Route = createFileRoute('/servicios/fachadas')({
  component: Fachadas,
})

function Fachadas() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title={t('services.fachadas.title', 'Rehabilitación y Limpieza de Fachadas')}
      description={t('services.fachadas.longDesc', 'Realizamos trabajos de mantenimiento, pintura, reparación de grietas y limpieza profunda en fachadas. Nuestro método de trabajos verticales garantiza una intervención rápida, segura y mucho más económica que la instalación de andamiaje tradicional.')}
      benefits={[
        t('services.fachadas.benefit1', 'Reparación de grietas y desconchones'),
        t('services.fachadas.benefit2', 'Pintura y revestimientos protectores'),
        t('services.fachadas.benefit3', 'Intervención rápida sin cortar calles'),
        t('services.fachadas.benefit4', 'Presupuesto cerrado sin sorpresas')
      ]}
    />
  )
}
