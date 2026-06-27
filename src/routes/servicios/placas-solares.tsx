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

  return (
    <ServiceLayout
      title={t('services.placas.title', 'Mantenimiento de Placas Solares')}
      description={t('services.placas.longDesc', 'Aumenta la eficiencia de tu instalación fotovoltaica hasta un 30% con nuestro servicio de limpieza y mantenimiento especializado. Accedemos a cubiertas inclinadas e instalaciones complejas utilizando sistemas de seguridad homologados.')}
      benefits={[
        t('services.placas.benefit1', 'Aumento inmediato de la producción de energía'),
        t('services.placas.benefit2', 'Prevención de puntos calientes (hot spots)'),
        t('services.placas.benefit3', 'Utilización de agua osmotizada sin químicos'),
        t('services.placas.benefit4', 'Inspección visual del estado de los paneles')
      ]}
    />
  )
}
