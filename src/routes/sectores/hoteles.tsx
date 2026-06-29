import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import { SEOHead } from '../../components/SEOHead';
import { SectorSchema } from '../../components/SchemaOrg';
import serviceFachadas from '../../assets/service-fachadas.webp';
import iconCristales from '../../assets/icon-cristales-pastel.webp';
import iconFachadas from '../../assets/icon-fachadas-pastel.webp';
import iconSolar from '../../assets/icon-solar-pastel.webp';
import iconLineas from '../../assets/icon-lineas-pastel.webp';

export const Route = createFileRoute('/sectores/hoteles')({
  component: HotelesPage,
});

function HotelesPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.hoteles.title', 'Limpieza Fachadas Hoteles Barcelona | Servicios Verticales DISET')}
        description={t('seo.hoteles.description', 'Soluciones de limpieza vertical para el sector hotelero en Barcelona. Mínima interrupción de actividad, máxima discreción y rapidez. Certificados IRATA y PRL.')}
        canonical="https://vertirise-elevate.vercel.app/sectores/hoteles"
        ogImage="/og-home.webp"
        keywords={t('seo.hoteles.keywords', 'limpieza fachadas hoteles barcelona, mantenimiento vertical sector hotelero')}
      />
      <SectorSchema
        sectorLabel={t('sectors.hoteles.title', 'Hoteles')}
        url="https://vertirise-elevate.vercel.app/sectores/hoteles"
      />
      <SectorLayout
        title={t('sectors.hoteles.title', 'Servicios para el Sector Hotelero')}
        description={t('sectors.hoteles.desc', 'La imagen exterior es clave en hostelería. Cristales y fachadas impecables sin interrumpir la actividad.')}
        phone="644 65 27 41"
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
            icon: <img src={iconCristales} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.fachadas.short', 'Fachadas'),
            bgColor: '#D52374',
            icon: <img src={iconFachadas} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.solares.short', 'Placas solares'),
            bgColor: '#22c55e',
            icon: <img src={iconSolar} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
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
