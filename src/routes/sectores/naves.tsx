import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import { SEOHead } from '../../components/SEOHead';
import { SectorSchema } from '../../components/SchemaOrg';
import serviceSolar from '../../assets/service-solar.webp';
import iconCristales from '../../assets/icon-cristales-pastel.webp';
import iconFachadas from '../../assets/icon-fachadas-pastel.webp';
import iconSolar from '../../assets/icon-solar-pastel.webp';
import iconLineas from '../../assets/icon-lineas-pastel.webp';

export const Route = createFileRoute('/sectores/naves')({
  component: NavesPage,
});

function NavesPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Limpieza Industrial en Altura Naves Barcelona | DISET Verticales"
        description="Limpieza de cubiertas, lucernarios y fachadas de naves industriales en Barcelona y área metropolitana. Equipos especializados para grandes superficies."
        canonical="https://vertirise-elevate.vercel.app/sectores/naves"
        ogImage="/og-home.webp"
        keywords="limpieza industrial altura barcelona, limpieza naves industriales, mantenimiento cubiertas industriales"
      />
      <SectorSchema
        sectorLabel="Naves Industriales"
        url="https://vertirise-elevate.vercel.app/sectores/naves"
      />
      <SectorLayout
        title={t('sectors.naves.title', 'Servicios para Naves Industriales')}
        description={t('sectors.naves.desc', 'Limpieza de cubiertas, lucernarios y placas fotovoltaicas industriales con técnicas avanzadas.')}
        phone="644 65 27 41"
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
            icon: <img src={iconFachadas} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.solares.short', 'Placas solares'),
            bgColor: '#22c55e',
            icon: <img src={iconSolar} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.lucernarios.short', 'Lucernarios'),
            bgColor: '#0096FF',
            icon: <img src={iconCristales} alt="" aria-hidden="true" className="w-full h-full object-contain opacity-80" loading="lazy" decoding="async" />
          },
          {
            name: t('services.lineas.short', 'Líneas de vida'),
            bgColor: '#f59e0b',
            icon: <img src={iconLineas} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          }
        ]}
      />
    </>
  );
}
