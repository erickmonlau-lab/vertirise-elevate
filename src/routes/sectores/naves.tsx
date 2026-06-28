import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import afterSolares from '../../assets/after-solares.webp';

export const Route = createFileRoute('/sectores/naves')({
  component: NavesPage,
});

function NavesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.naves.title', 'Naves y centros logísticos')}
      description={t('sectors.naves.desc', 'Limpieza especializada de cubiertas, lucernarios y placas fotovoltaicas industriales con técnicas de seguridad avanzadas.')}
      phone="936 556 161"
      bgColor="#86efac"
      imageSrc={afterSolares}
      benefitsTitle={t('sectors.naves.benefitsTitle', '¿Por qué elegirnos para su nave?')}
      benefits={[
        t('sectors.naves.benefit1', 'Máxima seguridad en cubiertas frágiles e inclinadas.'),
        t('sectors.naves.benefit2', 'Optimización del rendimiento de placas solares mediante limpieza profunda.'),
        t('sectors.naves.benefit3', 'Trabajos coordinados sin paralizar la actividad logística o industrial.'),
        t('sectors.naves.benefit4', 'Revisión y mantenimiento preventivo de lucernarios para evitar filtraciones.')
      ]}
      iconSvg={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white/30">
          <path d="M2 21h20 M4 21V9l4-3 4 3v-2l4-3 4 3v12 M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5 M18 9V4h2v5" />
        </svg>
      }
      services={[
        {
          name: t('services.cubiertas.short', 'Cubiertas'),
          bgColor: '#0096FF',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M2 22h20" />
              <path d="M12 2l10 10v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6L12 2z" />
            </svg>
          )
        },
        {
          name: t('services.solares.short', 'Placas solares'),
          bgColor: '#D52374',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          )
        },
        {
          name: t('services.lucernarios.short', 'Lucernarios'),
          bgColor: '#F4A261',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="12" y1="3" x2="12" y2="21" />
              <line x1="3" y1="12" x2="21" y2="12" />
            </svg>
          )
        },
        {
          name: t('services.lineas.short', 'Líneas de vida'),
          bgColor: '#22c55e',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          )
        }
      ]}
    />
  );
}
