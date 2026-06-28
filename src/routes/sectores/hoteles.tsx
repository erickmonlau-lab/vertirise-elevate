import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import serviceCristales from '../../assets/service-cristales.webp';

export const Route = createFileRoute('/sectores/hoteles')({
  component: HotelesPage,
});

function HotelesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.hoteles.title', 'Hoteles y Hostales')}
      description={t('sectors.hoteles.desc', 'La imagen exterior es vital en hostelería. Cristales, fachadas y cubiertas siempre impecables sin interrumpir la actividad.')}
      phone="936 556 161"
      bgColor="#F4A261"
      imageSrc={serviceCristales}
      benefitsTitle={t('sectors.hoteles.benefitsTitle', '¿Por qué elegirnos para su hotel?')}
      benefits={[
        t('sectors.hoteles.benefit1', 'Intervenciones discretas sin ruidos molestos para los huéspedes.'),
        t('sectors.hoteles.benefit2', 'Limpieza profunda de cristales y fachadas para una imagen impecable.'),
        t('sectors.hoteles.benefit3', 'Mantenimiento preventivo programado adaptado a su temporada.'),
        t('sectors.hoteles.benefit4', 'Rapidez y eficiencia técnica en mantenimientos de difícil acceso.')
      ]}
      iconSvg={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white/30">
          <path d="M4 21h16 M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16 M12 7l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z M9 17h6 M9 14h6" />
        </svg>
      }
      services={[
        {
          name: t('services.cristales.short', 'Cristales'),
          bgColor: '#0096FF',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          )
        },
        {
          name: t('services.fachadas.short', 'Fachadas'),
          bgColor: '#D52374',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M3 21h18" />
              <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
              <path d="M9 7h6" />
              <path d="M9 11h6" />
              <path d="M9 15h6" />
            </svg>
          )
        },
        {
          name: t('services.solares.short', 'Placas solares'),
          bgColor: '#F4A261',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41" />
              <circle cx="12" cy="12" r="5" />
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
