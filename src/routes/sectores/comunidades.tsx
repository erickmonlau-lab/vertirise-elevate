import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from '../../i18n/I18nContext';
import { SectorLayout } from '../../components/SectorLayout';
import { SEOHead } from '../../components/SEOHead';
import { SectorSchema } from '../../components/SchemaOrg';
import serviceCristales from '../../assets/service-cristales.webp';
import iconCristales from '../../assets/icon-cristales-pastel.webp';
import iconFachadas from '../../assets/icon-fachadas-pastel.webp';
import iconLineas from '../../assets/icon-lineas-pastel.webp';
import iconZonas from '../../assets/icon-fachadas-pastel.webp';

export const Route = createFileRoute('/sectores/comunidades')({
  component: ComunidadesPage,
});

function ComunidadesPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Limpiezas Verticales para Comunidades de Propietarios | DISET"
        description="Servicio de limpiezas verticales para comunidades de propietarios en Barcelona. Mantenimiento de fachadas, cristales y patios interiores. Presupuestos adaptados a comunidades."
        canonical="https://vertirise-elevate.vercel.app/sectores/comunidades"
        ogImage="/og-home.webp"
        keywords="limpiezas verticales comunidades barcelona, mantenimiento fachadas comunidad propietarios"
      />
      <SectorSchema
        sectorLabel="Comunidades de Propietarios"
        url="https://vertirise-elevate.vercel.app/sectores/comunidades"
      />
      <SectorLayout
        title={t('sectors.comunidades.title', 'Servicios verticales para Comunidades de Propietarios')}
        description={t('sectors.comunidades.desc', 'Mantenimiento en altura sin cortar accesos ni molestar a los vecinos. Cristales, fachadas y líneas de vida.')}
        phone="644 65 27 41"
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
            icon: <img src={iconCristales} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.fachadas.short', 'Fachadas'),
            bgColor: '#D52374',
            icon: <img src={iconFachadas} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          },
          {
            name: t('services.zonascomunes.short', 'Zonas comunes'),
            bgColor: '#22c55e',
            icon: <img src={iconZonas} alt="" aria-hidden="true" className="w-full h-full object-contain opacity-80" loading="lazy" decoding="async" />
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
