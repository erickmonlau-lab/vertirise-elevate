import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import serviceCristales from '../../assets/service-cristales.webp';
import iconCristales from '../../assets/icon-cristales-pastel.png';
import iconFachadas from '../../assets/icon-fachadas-pastel.png';
import iconLineas from '../../assets/icon-lineas-pastel.png';
import iconZonas from '../../assets/icon-fachadas-pastel.png'; // Fallback for zones if needed, or maybe just use fachadas icon as it's a building

export const Route = createFileRoute('/sectores/comunidades')({
  component: ComunidadesPage,
});

function ComunidadesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.comunidades.title', 'Servicios verticales para Comunidades de Propietarios')}
      description={t('sectors.comunidades.desc', 'Mantenimiento en altura sin cortar accesos ni molestar a los vecinos. Cristales, fachadas y líneas de vida.')}
      phone="936 556 161"
      bgColor="#5BC8E8"
      imageSrc={serviceCristales}
      benefitsTitle={t('sectors.comunidades.benefitsTitle', '¿Por qué elegirnos para tu comunidad?')}
      benefits={[
        t('sectors.comunidades.benefit1', 'Sin andamios ni interrupciones al tráfico'),
        t('sectors.comunidades.benefit2', 'Presupuesto gratuito en 24 horas'),
        t('sectors.comunidades.benefit3', 'Técnicos certificados IRATA'),
        t('sectors.comunidades.benefit4', 'Seguro de responsabilidad civil incluido')
      ]}
      services={[
        {
          name: t('services.cristales.short', 'Cristales'),
          bgColor: '#0096FF',
          icon: <img src={iconCristales} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        },
        {
          name: t('services.fachadas.short', 'Fachadas'),
          bgColor: '#D52374',
          icon: <img src={iconFachadas} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        },
        {
          name: t('services.zonascomunes.short', 'Zonas comunes'),
          bgColor: '#f59e0b',
          icon: <img src={iconZonas} alt="" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
        },
        {
          name: t('services.lineas.short', 'Líneas de vida'),
          bgColor: '#22c55e',
          icon: <img src={iconLineas} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        }
      ]}
    />
  );
}
