import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import afterCristales from '../../assets/after-cristales.webp';

export const Route = createFileRoute('/sectores/comunidades')({
  component: ComunidadesPage,
});

function ComunidadesPage() {
  const { t } = useTranslation();

  return (
    <SectorLayout
      title={t('sectors.comunidades.title', 'Comunidades de propietarios')}
      description={t('sectors.comunidades.desc', 'Mantenimiento y limpiezas en altura sin cortar accesos ni molestar a los vecinos. Soluciones integrales para su comunidad.')}
      phone="936 556 161"
      bgColor="#5BC8E8"
      imageSrc={afterCristales}
      benefitsTitle={t('sectors.comunidades.benefitsTitle', '¿Por qué elegirnos para su comunidad?')}
      benefits={[
        t('sectors.comunidades.benefit1', 'Sin andamios: acceso rápido mediante trabajos verticales.'),
        t('sectors.comunidades.benefit2', 'Mínimas molestias para los vecinos y accesos libres.'),
        t('sectors.comunidades.benefit3', 'Presupuestos detallados y transparentes sin compromiso.'),
        t('sectors.comunidades.benefit4', 'Técnicos certificados con máxima seguridad garantizada.')
      ]}
      iconSvg={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white/30">
          <path d="M4 21h16 M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14 M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4 M9 9h2 M13 9h2 M9 13h2 M13 13h2" />
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
          name: t('services.zonascomunes.short', 'Zonas comunes'),
          bgColor: '#F4A261',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
