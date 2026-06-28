import { useEffect } from "react";

const BASE_URL = "https://vertirise-elevate.vercel.app";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${BASE_URL}/#business`,
  "name": "DISET Limpiezas Verticales",
  "alternateName": "Vertirise Elevate",
  "description": "Empresa especializada en limpiezas verticales, trabajos en altura, limpieza de cristales, fachadas y placas solares en Barcelona y Cataluña",
  "url": BASE_URL,
  "telephone": "+34644652741",
  "email": "info@vertirise.com",
  "foundingDate": "1999",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 15 },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrer de Cuzco, 39-41",
    "addressLocality": "Barcelona",
    "postalCode": "08030",
    "addressCountry": "ES",
    "addressRegion": "Cataluña"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.3851,
    "longitude": 2.1734
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "areaServed": [
    { "@type": "City", "name": "Barcelona" },
    { "@type": "State", "name": "Cataluña" },
    { "@type": "City", "name": "Maresme" },
    { "@type": "City", "name": "Girona" },
    { "@type": "City", "name": "Tarragona" },
    { "@type": "City", "name": "Lleida" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Limpieza Vertical",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Cristales en Altura" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Fachadas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Placas Solares" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalación de Líneas de Vida" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.google.com/maps/place/DISET+Limpiezas+Verticales"
  ]
};

const HOME_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${BASE_URL}/` }
  ]
};

const HOME_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué elegir trabajos verticales en lugar de andamios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los trabajos verticales ofrecen mayor rapidez de instalación, menor coste al evitar alquiler de estructuras, y nula interrupción del tránsito peatonal o del negocio, manteniendo la estética de la fachada durante la intervención."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el sistema de cuerdas para los operarios y el edificio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Utilizamos sistemas de doble cuerda (trabajo y seguridad) certificados bajo la normativa IRATA y EN 795. Nuestros anclajes no dañan la estructura y garantizamos cero riesgo de caídas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tardan en iniciar un proyecto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al no requerir montaje de andamios pesados, podemos iniciar la mayoría de las intervenciones de limpieza y mantenimiento en 24-48 horas tras la aprobación del presupuesto y la evaluación de riesgos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué productos químicos utilizan en la limpieza de cristales y fachadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priorizamos sistemas de agua pura osmotizada que limpian sin dejar residuos ni marcas, siendo 100% ecológicos. Para suciedad muy incrustada o grafitis, usamos disolventes biodegradables específicos según el material."
      }
    }
  ]
};

function makeBreadcrumb(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((i, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": i.name,
      "item": i.item
    }))
  };
}

function makeServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "DISET Limpiezas Verticales",
      "@id": `${BASE_URL}/#business`
    },
    "areaServed": { "@type": "City", "name": "Barcelona" },
    "url": url
  };
}

function makeFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
}

function injectSchema(id: string, data: object | object[]) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : data);
}

// ─── Home ────────────────────────────────────────────────────────────────────
export function HomeSchema() {
  useEffect(() => {
    injectSchema("schema-business", LOCAL_BUSINESS_SCHEMA);
    injectSchema("schema-breadcrumb", HOME_BREADCRUMB);
    injectSchema("schema-faq", HOME_FAQ);
    return () => {
      ["schema-business", "schema-breadcrumb", "schema-faq"].forEach(id => {
        document.getElementById(id)?.remove();
      });
    };
  }, []);
  return null;
}

// ─── Service pages ────────────────────────────────────────────────────────────
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumbLabel: string;
  faqs?: Array<{ q: string; a: string }>;
}

export function ServiceSchema({ name, description, url, breadcrumbLabel, faqs }: ServiceSchemaProps) {
  useEffect(() => {
    injectSchema("schema-service", makeServiceSchema(name, description, url));
    injectSchema("schema-breadcrumb", makeBreadcrumb([
      { name: "Inicio", item: `${BASE_URL}/` },
      { name: "Servicios", item: `${BASE_URL}/servicios/cristales` },
      { name: breadcrumbLabel, item: url }
    ]));
    if (faqs?.length) {
      injectSchema("schema-faq", makeFAQSchema(faqs));
    }
    return () => {
      ["schema-service", "schema-breadcrumb", "schema-faq"].forEach(id => {
        document.getElementById(id)?.remove();
      });
    };
  }, [name, description, url, breadcrumbLabel, faqs]);
  return null;
}

// ─── Sector pages ─────────────────────────────────────────────────────────────
interface SectorSchemaProps {
  sectorLabel: string;
  url: string;
}

export function SectorSchema({ sectorLabel, url }: SectorSchemaProps) {
  useEffect(() => {
    injectSchema("schema-breadcrumb", makeBreadcrumb([
      { name: "Inicio", item: `${BASE_URL}/` },
      { name: "Sectores", item: `${BASE_URL}/sectores/comunidades` },
      { name: sectorLabel, item: url }
    ]));
    return () => {
      document.getElementById("schema-breadcrumb")?.remove();
    };
  }, [sectorLabel, url]);
  return null;
}
