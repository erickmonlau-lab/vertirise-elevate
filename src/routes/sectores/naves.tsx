import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import serviceSolar from '../../assets/service-solar.webp';
import iconCristales from '../../assets/icon-cristales-pastel.png';
import iconFachadas from '../../assets/icon-fachadas-pastel.png';
import iconSolar from '../../assets/icon-solar-pastel.png';
import iconLineas from '../../assets/icon-lineas-pastel.png';

export const Route = createFileRoute('/sectores/naves')({
  component: NavesPage,
});

function NavesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.naves.title', 'Servicios verticales para Naves e Industria')}
      description={t('sectors.naves.desc', 'Limpieza de cubiertas, lucernarios y placas fotovoltaicas industriales con técnicas avanzadas.')}
      phone="936 556 161"
      bgColor="#86efac"
      imageSrc={serviceSolar}
      benefitsTitle={t('sectors.naves.benefitsTitle', '¿Por qué elegirnos para tu nave?')}
      benefits={[
        t('sectors.naves.benefit1', 'Limpieza de placas solares +25% rendimiento'),
        t('sectors.naves.benefit2', 'Acceso a cubiertas sin interrupción'),
        t('sectors.naves.benefit3', 'Técnicas industriales especializadas'),
        t('sectors.naves.benefit4', 'Presupuesto adaptado a grandes superficies')
      ]}
      services={[
        {
          name: t('services.cubiertas.short', 'Cubiertas'),
          bgColor: '#22c55e',
          icon: <img src={iconFachadas} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        },
        {
          name: t('services.solares.short', 'Placas solares'),
          bgColor: '#22c55e',
          icon: <img src={iconSolar} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        },
        {
          name: t('services.lucernarios.short', 'Lucernarios'),
          bgColor: '#0096FF',
          icon: <img src={iconCristales} alt="" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
        },
        {
          name: t('services.lineas.short', 'Líneas de vida'),
          bgColor: '#f59e0b',
          icon: <img src={iconLineas} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        }
      ]}
    />
  );
}
