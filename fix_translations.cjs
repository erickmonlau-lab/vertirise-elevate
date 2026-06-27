const fs = require('fs');
const path = require('path');

const tsFile = path.join(__dirname, 'src/i18n/translations.ts');
let tsCode = fs.readFileSync(tsFile, 'utf8');

const keysToAdd = {
  es: `    'meta.title': 'DISET - Limpiezas Verticales y Trabajos en Altura en Barcelona',
    'meta.desc': 'Especialistas en trabajos verticales en Barcelona: limpieza de cristales, fachadas, placas solares e instalación de líneas de vida. +25 años de experiencia, +4500 proyectos. Llame al 936 556 161.',
    'cases.1.duration': '5 días',
    'cases.1.result': '3.200 m² recuperados',
    'cases.2.duration': '2 días',
    'cases.2.result': '280 m² de cristal',
    'cases.3.duration': '1 día',
    'cases.3.result': '+28% eficiencia',
    'cases.4.duration': '3 días',
    'cases.4.result': 'Certificación EN 795',
    'trustbar.projects': '+4.500 proyectos',
    'trustbar.completed': 'completados con éxito',
    'benefits.stat1.label': 'Años de experiencia',
    'benefits.stat2.label': 'Proyectos completados',
    'benefits.stat3.label': 'Técnicos certificados',
    'benefits.stat4.label': 'Respuesta garantizada',
    'testimonials.basedon': 'A base de',
    'testimonials.reviews': 'reseñas',
    'testimonials.ago.1': 'hace 1 semana',
    'testimonials.ago.2': 'hace 2 semanas',
    'testimonials.ago.3': 'hace 3 semanas',
    'testimonials.readmore': 'Leer más',
    'testimonials.1.text': 'DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel.',
    'testimonials.2.text': 'Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles.',
    'testimonials.3.text': 'Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%.',`,
  
  ca: `    'meta.title': 'DISET - Neteges Verticals i Treballs en Alçada a Barcelona',
    'meta.desc': 'Especialistes en treballs verticals a Barcelona: neteja de vidres, façanes, plaques solars i instal·lació de línies de vida. +25 anys d\\'experiència, +4500 projectes. Truqui al 936 556 161.',
    'cases.1.duration': '5 dies',
    'cases.1.result': '3.200 m² recuperats',
    'cases.2.duration': '2 dies',
    'cases.2.result': '280 m² de vidre',
    'cases.3.duration': '1 dia',
    'cases.3.result': '+28% eficiència',
    'cases.4.duration': '3 dies',
    'cases.4.result': 'Certificació EN 795',
    'trustbar.projects': '+4.500 projectes',
    'trustbar.completed': 'completats amb èxit',
    'benefits.stat1.label': 'Anys d\\'experiència',
    'benefits.stat2.label': 'Projectes completats',
    'benefits.stat3.label': 'Tècnics certificats',
    'benefits.stat4.label': 'Resposta garantida',
    'testimonials.basedon': 'A base de',
    'testimonials.reviews': 'ressenyes',
    'testimonials.ago.1': 'fa 1 setmana',
    'testimonials.ago.2': 'fa 2 setmanes',
    'testimonials.ago.3': 'fa 3 setmanes',
    'testimonials.readmore': 'Llegir més',
    'testimonials.1.text': 'DISET ens va resoldre la neteja de façana de l\\'edifici en temps rècord i amb zero incidències. Professionalitat de primer nivell.',
    'testimonials.2.text': 'Portem 6 anys treballant amb ells en manteniment de cobertes i línies de vida. Imprescindibles.',
    'testimonials.3.text': 'Vidres impecables cada trimestre, personal silenciós i sense afectar l\\'operativa de l\\'hotel. Recomanats al 100%.',`,
    
  en: `    'meta.title': 'DISET - Rope Access and High-Altitude Cleaning in Barcelona',
    'meta.desc': 'Specialists in rope access works in Barcelona: window cleaning, facades, solar panels and lifeline installation. +25 years of experience, +4500 projects. Call 936 556 161.',
    'cases.1.duration': '5 days',
    'cases.1.result': '3,200 m² recovered',
    'cases.2.duration': '2 days',
    'cases.2.result': '280 m² of glass',
    'cases.3.duration': '1 day',
    'cases.3.result': '+28% efficiency',
    'cases.4.duration': '3 days',
    'cases.4.result': 'EN 795 Certification',
    'trustbar.projects': '+4,500 projects',
    'trustbar.completed': 'completed successfully',
    'benefits.stat1.label': 'Years of experience',
    'benefits.stat2.label': 'Completed projects',
    'benefits.stat3.label': 'Certified technicians',
    'benefits.stat4.label': 'Guaranteed response',
    'testimonials.basedon': 'Based on',
    'testimonials.reviews': 'reviews',
    'testimonials.ago.1': '1 week ago',
    'testimonials.ago.2': '2 weeks ago',
    'testimonials.ago.3': '3 weeks ago',
    'testimonials.readmore': 'Read more',
    'testimonials.1.text': 'DISET resolved our building facade cleaning in record time with zero incidents. Top-level professionalism.',
    'testimonials.2.text': 'We have been working with them for 6 years in roof maintenance and lifelines. Essential.',
    'testimonials.3.text': 'Impeccable windows every quarter, quiet staff not affecting hotel operations. 100% recommended.',`
};

tsCode = tsCode.replace(/'footer\.rights': 'Todos los derechos reservados\.',/, "'footer.rights': 'Todos los derechos reservados.',\n" + keysToAdd.es);
tsCode = tsCode.replace(/'footer\.rights': 'Tots els drets reservats\.',/, "'footer.rights': 'Tots els drets reservats.',\n" + keysToAdd.ca);
tsCode = tsCode.replace(/'footer\.rights': 'All rights reserved\.',/, "'footer.rights': 'All rights reserved.',\n" + keysToAdd.en);

fs.writeFileSync(tsFile, tsCode);
console.log('Translations updated.');
