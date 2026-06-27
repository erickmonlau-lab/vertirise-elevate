const fs = require('fs');
let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const keysEs = `
    // Nuevas paginas de servicios
    'nav.home': 'Inicio',
    'services.cristales.title': 'Limpieza de Cristales en Altura',
    'services.cristales.longDesc': 'Especialistas en limpieza de cristales en altura mediante técnicas de acceso por cuerdas y agua osmotizada. Sin andamios, sin marcas, sin interrupciones.',
    'service.benefits.title': 'Ventajas de nuestro servicio',
    'services.cristales.benefit1': 'Sin andamios ni plataformas elevadoras',
    'services.cristales.benefit2': 'Agua osmotizada sin marcas ni residuos',
    'services.cristales.benefit3': 'Técnicos certificados IRATA',
    'services.cristales.benefit4': 'Presupuesto gratuito en 24h',

    'services.fachadas.title': 'Mantenimiento de Fachadas',
    'services.fachadas.longDesc': 'Rehabilitación y mantenimiento de fachadas mediante trabajos verticales. Reparación de grietas, pintura y limpieza profunda sin necesidad de estructuras voluminosas.',
    'services.fachadas.benefit1': 'Intervención rápida y sin molestias',
    'services.fachadas.benefit2': 'Reparación de grietas y desconchones',
    'services.fachadas.benefit3': 'Pintura y revestimientos de alta calidad',
    'services.fachadas.benefit4': 'Menor coste frente al andamiaje tradicional',

    'services.placas.title': 'Limpieza de Placas Solares',
    'services.placas.longDesc': 'Maximizamos el rendimiento de su instalación fotovoltaica con limpiezas especializadas. Eliminamos polvo y suciedad que reducen la eficiencia energética.',
    'services.placas.benefit1': 'Aumento de eficiencia energética hasta 30%',
    'services.placas.benefit2': 'Agua pura sin químicos dañinos',
    'services.placas.benefit3': 'Seguridad en cubiertas inclinadas',
    'services.placas.benefit4': 'Mantenimiento preventivo',

    'services.lineas.title': 'Instalación de Líneas de Vida',
    'services.lineas.longDesc': 'Diseño, montaje y certificación de sistemas anticaídas y líneas de vida homologadas. Garantizamos la máxima seguridad para trabajos en altura.',
    'services.lineas.benefit1': 'Sistemas homologados (EN 795)',
    'services.lineas.benefit2': 'Estudio técnico personalizado',
    'services.lineas.benefit3': 'Materiales de máxima resistencia',
    'services.lineas.benefit4': 'Revisiones periódicas y certificación',
`;

const keysCa = `
    // Noves pagines de serveis
    'nav.home': 'Inici',
    'services.cristales.title': 'Neteja de Vidres en Alçada',
    'services.cristales.longDesc': "Especialistes en neteja de vidres en alçada mitjançant tècniques d'accés per cordes i aigua osmotitzada. Sense bastides, sense marques, sense interrupcions.",
    'service.benefits.title': 'Avantatges del nostre servei',
    'services.cristales.benefit1': 'Sense bastides ni plataformes elevadores',
    'services.cristales.benefit2': 'Aigua osmotitzada sense marques ni residus',
    'services.cristales.benefit3': 'Tècnics certificats IRATA',
    'services.cristales.benefit4': 'Pressupost gratuït en 24h',

    'services.fachadas.title': 'Manteniment de Façanes',
    'services.fachadas.longDesc': "Rehabilitació i manteniment de façanes mitjançant treballs verticals. Reparació d'esquerdes, pintura i neteja profunda sense necessitat d'estructures voluminoses.",
    'services.fachadas.benefit1': 'Intervenció ràpida i sense molèsties',
    'services.fachadas.benefit2': "Reparació d'esquerdes i descorxaments",
    'services.fachadas.benefit3': "Pintura i revestiments d'alta qualitat",
    'services.fachadas.benefit4': 'Menor cost enfront de les bastides tradicionals',

    'services.placas.title': 'Neteja de Plaques Solars',
    'services.placas.longDesc': "Maximitzem el rendiment de la seva instal·lació fotovoltaica amb neteges especialitzades. Eliminem pols i brutícia que redueixen l'eficiència energètica.",
    'services.placas.benefit1': "Augment de l'eficiència energètica fins al 30%",
    'services.placas.benefit2': 'Aigua pura sense químics perjudicials',
    'services.placas.benefit3': 'Seguretat en cobertes inclinades',
    'services.placas.benefit4': 'Manteniment preventiu',

    'services.lineas.title': 'Instal·lació de Línies de Vida',
    'services.lineas.longDesc': 'Disseny, muntatge i certificació de sistemes anticaigudes i línies de vida homologades. Garantim la màxima seguretat per a treballs en alçada.',
    'services.lineas.benefit1': 'Sistemes homologats (EN 795)',
    'services.lineas.benefit2': 'Estudi tècnic personalitzat',
    'services.lineas.benefit3': 'Materials de màxima resistència',
    'services.lineas.benefit4': 'Revisions periòdiques i certificació',
`;

const keysEn = `
    // New service pages
    'nav.home': 'Home',
    'services.cristales.title': 'High-Rise Window Cleaning',
    'services.cristales.longDesc': 'Specialists in high-rise window cleaning using rope access techniques and pure water. No scaffolding, no streaks, no interruptions.',
    'service.benefits.title': 'Benefits of our service',
    'services.cristales.benefit1': 'No scaffolding or boom lifts needed',
    'services.cristales.benefit2': 'Pure water system leaves no streaks',
    'services.cristales.benefit3': 'IRATA certified technicians',
    'services.cristales.benefit4': 'Free quote within 24h',

    'services.fachadas.title': 'Facade Maintenance',
    'services.fachadas.longDesc': 'Facade rehabilitation and maintenance through vertical work. Crack repair, painting, and deep cleaning without the need for bulky structures.',
    'services.fachadas.benefit1': 'Fast and disruption-free intervention',
    'services.fachadas.benefit2': 'Repair of cracks and spalling',
    'services.fachadas.benefit3': 'High-quality painting and coatings',
    'services.fachadas.benefit4': 'Lower cost compared to traditional scaffolding',

    'services.placas.title': 'Solar Panel Cleaning',
    'services.placas.longDesc': "Maximize your photovoltaic installation's performance with specialized cleaning. We remove dust and dirt that reduce energy efficiency.",
    'services.placas.benefit1': 'Up to 30% increase in energy efficiency',
    'services.placas.benefit2': 'Pure water without harmful chemicals',
    'services.placas.benefit3': 'Safety on pitched roofs',
    'services.placas.benefit4': 'Preventive maintenance',

    'services.lineas.title': 'Lifeline Installation',
    'services.lineas.longDesc': 'Design, assembly, and certification of fall arrest systems and certified lifelines. We guarantee maximum safety for work at heights.',
    'services.lineas.benefit1': 'Certified systems (EN 795)',
    'services.lineas.benefit2': 'Customized technical study',
    'services.lineas.benefit3': 'Materials of maximum strength',
    'services.lineas.benefit4': 'Periodic inspections and certification',
`;

content = content.replace(/  \},\n  ca: \{/, keysEs + '  },\n  ca: {');
content = content.replace(/  \},\n  en: \{/, keysCa + '  },\n  en: {');
content = content.replace(/  \},\n\} as const;/, keysEn + '  },\n} as const;');

fs.writeFileSync('src/i18n/translations.ts', content);
