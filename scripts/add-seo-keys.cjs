const fs = require('fs');
const file = 'src/i18n/translations.ts';
let content = fs.readFileSync(file, 'utf8');

const newKeys = {
  es: {
    'seo.index.title': 'Limpiezas Verticales Barcelona | DISET – Trabajos en Altura',
    'seo.index.description': 'Empresa especializada en limpiezas verticales en Barcelona y Cataluña. Limpieza de cristales, fachadas, placas solares y líneas de vida. Más de 25 años de experiencia. Presupuesto gratuito.',
    'seo.index.keywords': 'limpiezas verticales barcelona, limpieza fachadas altura, limpieza cristales edificios, trabajos verticales cataluña, IRATA barcelona, rappel limpieza',
    'seo.comunidades.title': 'Limpiezas Verticales para Comunidades de Propietarios | DISET',
    'seo.comunidades.description': 'Servicio de limpiezas verticales para comunidades de propietarios en Barcelona. Mantenimiento de fachadas, cristales y patios interiores. Presupuestos adaptados a comunidades.',
    'seo.comunidades.keywords': 'limpiezas verticales comunidades barcelona, mantenimiento fachadas comunidad propietarios',
    'seo.hoteles.title': 'Limpieza Fachadas Hoteles Barcelona | Servicios Verticales DISET',
    'seo.hoteles.description': 'Soluciones de limpieza vertical para el sector hotelero en Barcelona. Mínima interrupción de actividad, máxima discreción y rapidez. Certificados IRATA y PRL.',
    'seo.hoteles.keywords': 'limpieza fachadas hoteles barcelona, mantenimiento vertical sector hotelero',
    'seo.naves.title': 'Limpieza Industrial en Altura Naves Barcelona | DISET Verticales',
    'seo.naves.description': 'Limpieza de cubiertas, lucernarios y fachadas de naves industriales en Barcelona y área metropolitana. Equipos especializados para grandes superficies.',
    'seo.naves.keywords': 'limpieza industrial altura barcelona, limpieza naves industriales, mantenimiento cubiertas industriales',
    'seo.cristales.title': 'Limpieza de Cristales en Altura Barcelona | DISET Verticales',
    'seo.cristales.description': 'Servicio profesional de limpieza de cristales en altura para comunidades, hoteles y naves industriales en Barcelona. Técnicos certificados IRATA. Solicita presupuesto sin compromiso.',
    'seo.cristales.keywords': 'limpieza cristales altura barcelona, limpieza ventanas edificios, cristalería industrial barcelona',
    'seo.cristales.schema.desc': 'Servicio profesional de limpieza de cristales en altura para comunidades, hoteles y naves industriales en Barcelona. Técnicos certificados IRATA.',
    'seo.fachadas.title': 'Limpieza de Fachadas Barcelona | Trabajos Verticales DISET',
    'seo.fachadas.description': 'Limpieza y restauración de fachadas en Barcelona mediante técnicas verticales. Eliminación de grafitis, suciedad y manchas. Certificados IRATA. Más de 4.500 fachadas limpias.',
    'seo.fachadas.keywords': 'limpieza fachadas barcelona, restauración fachadas altura, eliminación grafitis barcelona',
    'seo.fachadas.schema.desc': 'Limpieza y restauración de fachadas en Barcelona mediante técnicas verticales. Eliminación de grafitis, suciedad y manchas. Certificados IRATA.',
    'seo.lineas.title': 'Instalación Líneas de Vida Barcelona | Sistemas Anticaída DISET',
    'seo.lineas.description': 'Instalación y certificación de líneas de vida y sistemas anticaída en Barcelona. Cumplimiento normativa EN 795. Inspección y mantenimiento de equipos de protección colectiva.',
    'seo.lineas.keywords': 'líneas de vida barcelona, sistemas anticaída barcelona, EN 795 barcelona, instalación anclajes altura',
    'seo.lineas.schema.desc': 'Instalación y certificación de líneas de vida y sistemas anticaída en Barcelona. Cumplimiento normativa EN 795.',
    'seo.placas.title': 'Limpieza Placas Solares Barcelona | Mantenimiento Fotovoltaico',
    'seo.placas.description': 'Aumenta el rendimiento de tu instalación solar hasta un 30% con la limpieza profesional de placas fotovoltaicas. Servicio en altura certificado para toda Cataluña.',
    'seo.placas.keywords': 'limpieza placas solares barcelona, mantenimiento fotovoltaico cataluña, limpieza paneles solares altura',
    'seo.placas.schema.desc': 'Limpieza profesional de placas fotovoltaicas en altura. Aumenta el rendimiento de tu instalación solar hasta un 30%. Servicio certificado para toda Cataluña.'
  },
  ca: {
    'seo.index.title': 'Neteges Verticals Barcelona | DISET – Treballs en Alçada',
    'seo.index.description': 'Empresa especialitzada en neteges verticals a Barcelona i Catalunya. Neteja de vidres, façanes, plaques solars i línies de vida. Més de 25 anys d\’experiència. Pressupost gratuït.',
    'seo.index.keywords': 'neteges verticals barcelona, neteja façanes alçada, neteja vidres edificis, treballs verticals catalunya, IRATA barcelona, ràpel neteja',
    'seo.comunidades.title': 'Neteges Verticals per a Comunitats de Propietaris | DISET',
    'seo.comunidades.description': 'Servei de neteges verticals per a comunitats de propietaris a Barcelona. Manteniment de façanes, vidres i celoberts. Pressupostos adaptats a comunitats.',
    'seo.comunidades.keywords': 'neteges verticals comunitats barcelona, manteniment façanes comunitat propietaris',
    'seo.hoteles.title': 'Neteja Façanes Hotels Barcelona | Serveis Verticals DISET',
    'seo.hoteles.description': 'Solucions de neteja vertical per al sector hoteler a Barcelona. Mínima interrupció d\’activitat, màxima discreció i rapidesa. Certificats IRATA i PRL.',
    'seo.hoteles.keywords': 'neteja façanes hotels barcelona, manteniment vertical sector hoteler',
    'seo.naves.title': 'Neteja Industrial en Alçada Naus Barcelona | DISET Verticals',
    'seo.naves.description': 'Neteja de cobertes, llumeneres i façanes de naus industrials a Barcelona i àrea metropolitana. Equips especialitzats per a grans superfícies.',
    'seo.naves.keywords': 'neteja industrial alçada barcelona, neteja naus industrials, manteniment cobertes industrials',
    'seo.cristales.title': 'Neteja de Vidres en Alçada Barcelona | DISET Verticals',
    'seo.cristales.description': 'Servei professional de neteja de vidres en alçada per a comunitats, hotels i naus industrials a Barcelona. Tècnics certificats IRATA. Sol·licita pressupost sense compromís.',
    'seo.cristales.keywords': 'neteja vidres alçada barcelona, neteja finestres edificis, cristalleria industrial barcelona',
    'seo.cristales.schema.desc': 'Servei professional de neteja de vidres en alçada per a comunitats, hotels i naus industrials a Barcelona. Tècnics certificats IRATA.',
    'seo.fachadas.title': 'Neteja de Façanes Barcelona | Treballs Verticals DISET',
    'seo.fachadas.description': 'Neteja i restauració de façanes a Barcelona mitjançant tècniques verticals. Eliminació de grafits, brutícia i taques. Certificats IRATA. Més de 4.500 façanes netes.',
    'seo.fachadas.keywords': 'neteja façanes barcelona, restauració façanes alçada, eliminació grafits barcelona',
    'seo.fachadas.schema.desc': 'Neteja i restauració de façanes a Barcelona mitjançant tècniques verticals. Eliminació de grafits, brutícia i taques. Certificats IRATA.',
    'seo.lineas.title': 'Instal·lació Línies de Vida Barcelona | Sistemes Anticaiguda DISET',
    'seo.lineas.description': 'Instal·lació i certificació de línies de vida i sistemes anticaiguda a Barcelona. Compliment normativa EN 795. Inspecció i manteniment d\’equips de protecció col·lectiva.',
    'seo.lineas.keywords': 'línies de vida barcelona, sistemes anticaiguda barcelona, EN 795 barcelona, instal·lació ancoratges alçada',
    'seo.lineas.schema.desc': 'Instal·lació i certificació de línies de vida i sistemes anticaiguda a Barcelona. Compliment normativa EN 795.',
    'seo.placas.title': 'Neteja Plaques Solars Barcelona | Manteniment Fotovoltaic',
    'seo.placas.description': 'Augmenta el rendiment de la teva instal·lació solar fins a un 30% amb la neteja professional de plaques fotovoltaiques. Servei en alçada certificat per a tota Catalunya.',
    'seo.placas.keywords': 'neteja plaques solars barcelona, manteniment fotovoltaic catalunya, neteja panells solars alçada',
    'seo.placas.schema.desc': 'Neteja professional de plaques fotovoltaicas en alçada. Augmenta el rendiment de la teva instal·lació solar fins a un 30%. Servei certificat per a tota Catalunya.'
  },
  en: {
    'seo.index.title': 'Rope Access Cleaning Barcelona | DISET – High-Altitude Work',
    'seo.index.description': 'Specialized rope access cleaning company in Barcelona and Catalonia. Window cleaning, facades, solar panels, and lifelines. Over 25 years of experience. Free quote.',
    'seo.index.keywords': 'rope access cleaning barcelona, high altitude facade cleaning, building window cleaning, IRATA barcelona, abseiling cleaning',
    'seo.comunidades.title': 'Rope Access Cleaning for Residential Communities | DISET',
    'seo.comunidades.description': 'Rope access cleaning services for residential communities in Barcelona. Facade maintenance, window cleaning, and courtyards. Quotes tailored for communities.',
    'seo.comunidades.keywords': 'rope access cleaning communities barcelona, facade maintenance residential community',
    'seo.hoteles.title': 'Hotel Facade Cleaning Barcelona | DISET Vertical Services',
    'seo.hoteles.description': 'Rope access cleaning solutions for the hotel sector in Barcelona. Minimal disruption, maximum discretion, and speed. IRATA and PRL certified.',
    'seo.hoteles.keywords': 'hotel facade cleaning barcelona, vertical maintenance hotel sector',
    'seo.naves.title': 'Industrial High-Altitude Cleaning Warehouses Barcelona | DISET Verticals',
    'seo.naves.description': 'Cleaning of roofs, skylights, and facades of industrial buildings in Barcelona and metropolitan area. Specialized equipment for large surfaces.',
    'seo.naves.keywords': 'industrial high altitude cleaning barcelona, industrial warehouse cleaning, industrial roof maintenance',
    'seo.cristales.title': 'High-Rise Glass Cleaning Barcelona | DISET Verticals',
    'seo.cristales.description': 'Professional high-rise window cleaning service for communities, hotels, and industrial buildings in Barcelona. IRATA certified technicians. Request a free quote.',
    'seo.cristales.keywords': 'high rise window cleaning barcelona, building window cleaning, industrial glazing barcelona',
    'seo.cristales.schema.desc': 'Professional high-rise window cleaning service for communities, hotels, and industrial buildings in Barcelona. IRATA certified technicians.',
    'seo.fachadas.title': 'Facade Cleaning Barcelona | DISET High-Altitude Work',
    'seo.fachadas.description': 'Facade cleaning and restoration in Barcelona using rope access techniques. Graffiti, dirt, and stain removal. IRATA certified. Over 4,500 clean facades.',
    'seo.fachadas.keywords': 'facade cleaning barcelona, high altitude facade restoration, graffiti removal barcelona',
    'seo.fachadas.schema.desc': 'Facade cleaning and restoration in Barcelona using rope access techniques. Graffiti, dirt, and stain removal. IRATA certified.',
    'seo.lineas.title': 'Lifeline Installation Barcelona | DISET Fall Arrest Systems',
    'seo.lineas.description': 'Installation and certification of lifelines and fall arrest systems in Barcelona. EN 795 standard compliance. Inspection and maintenance of collective protection equipment.',
    'seo.lineas.keywords': 'lifelines barcelona, fall arrest systems barcelona, EN 795 barcelona, high altitude anchor installation',
    'seo.lineas.schema.desc': 'Installation and certification of lifelines and fall arrest systems in Barcelona. EN 795 standard compliance.',
    'seo.placas.title': 'Solar Panel Cleaning Barcelona | Photovoltaic Maintenance',
    'seo.placas.description': 'Increase the performance of your solar installation by up to 30% with professional photovoltaic panel cleaning. Certified high-altitude service for all of Catalonia.',
    'seo.placas.keywords': 'solar panel cleaning barcelona, photovoltaic maintenance catalonia, high altitude solar panel cleaning',
    'seo.placas.schema.desc': 'Professional high-altitude photovoltaic panel cleaning. Increase the performance of your solar installation by up to 30%. Certified service for all of Catalonia.'
  }
};

for (const lang of ['es', 'ca', 'en']) {
  let blockRegex = new RegExp(`(${lang}: \\{[\\s\\S]*?\\n  \\},?)`);
  let match = content.match(blockRegex);
  if (!match && lang === 'en') match = content.match(/(en: \\{[\\s\\S]*?\\n  \\})/);
  
  if (match) {
    let block = match[1];
    const keys = newKeys[lang];
    for (const [k, v] of Object.entries(keys)) {
      if (!block.includes(`'${k}'`)) {
        block = block.replace(/(\\n  \\},?)/, `\\n    '${k}': '${v.replace(/'/g, "\’")}',\$1`);
      }
    }
    content = content.replace(match[1], block);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('SEO keys added successfully.');
