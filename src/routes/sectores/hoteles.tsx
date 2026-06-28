import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import serviceFachadas from '../../assets/service-fachadas.webp';
import iconCristales from '../../assets/icon-cristales-pastel.png';
import iconFachadas from '../../assets/icon-fachadas-pastel.png';
import iconSolar from '../../assets/icon-solar-pastel.png';
import iconLineas from '../../assets/icon-lineas-pastel.png';

export const Route = createFileRoute('/sectores/hoteles')({
  component: HotelesPage,
});

function HotelesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.hoteles.title', 'Servicios verticales para Hoteles y Establecimientos')}
      description={t('sectors.hoteles.desc', 'La imagen exterior es clave en hostelería. Cristales y fachadas impecables sin interrumpir la actividad.')}
      phone="936 556 161"
      bgColor="#F4A261"
      imageSrc={serviceFachadas}
      benefitsTitle={t('sectors.hoteles.benefitsTitle', '¿Por qué elegirnos para tu hotel?')}
      benefits={[
        t('sectors.hoteles.benefit1', 'Trabajo nocturno disponible'),
        t('sectors.hoteles.benefit2', 'Sin afectar a huéspedes ni operativa'),
        t('sectors.hoteles.benefit3', 'Cristales sin marcas ni residuos'),
        t('sectors.hoteles.benefit4', 'Certificación de seguridad incluida')
      ]}
      services={[
        {
          name: t('services.cristales.short', 'Cristales'),
          bgColor: '#0096FF',
          icon: <img src={iconCristales} alt="" className="w-full h-full object-contain " />
        },
        {
          name: t('services.fachadas.short', 'Fachadas'),
          bgColor: '#D52374',
          icon: <img src={iconFachadas} alt="" className="w-full h-full object-contain " />
        },
        {
          name: t('services.solares.short', 'Placas solares'),
          bgColor: '#22c55e',
          icon: <img src={iconSolar} alt="" className="w-full h-full object-contain " />
        },
        {
          name: t('services.lineas.short', 'Líneas de vida'),
          bgColor: '#f59e0b',
          icon: <img src={iconLineas} alt="" className="w-full h-full object-contain " />
        }
      ]}
    />
  );
}
