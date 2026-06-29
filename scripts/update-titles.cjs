const fs = require('fs');

const file = 'src/i18n/translations.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  es: {
    'services.fachadas.title': 'Limpieza y Restauración de Fachadas',
    'services.cristales.title': 'Limpieza de Cristales en Altura',
    'services.placas.title': 'Limpieza de Placas Solares',
    'services.lineas.title': 'Instalación de Líneas de Vida',
    'sectors.comunidades.title': 'Servicios para Comunidades de Propietarios',
    'sectors.hoteles.title': 'Servicios para el Sector Hotelero',
    'sectors.naves.title': 'Servicios para Naves Industriales'
  },
  ca: {
    'services.fachadas.title': 'Neteja i Restauració de Façanes',
    'services.cristales.title': 'Neteja de Vidres en Alçada',
    'services.placas.title': 'Neteja de Plaques Solars',
    'services.lineas.title': 'Instal·lació de Línies de Vida',
    'sectors.comunidades.title': 'Serveis per a Comunitats de Propietaris',
    'sectors.hoteles.title': 'Serveis per al Sector Hoteler',
    'sectors.naves.title': 'Serveis per a Naus Industrials'
  },
  en: {
    'services.fachadas.title': 'Facade Cleaning and Restoration',
    'services.cristales.title': 'High-Rise Glass Cleaning',
    'services.placas.title': 'Solar Panel Cleaning',
    'services.lineas.title': 'Life Line Installation',
    'sectors.comunidades.title': 'Services for Residential Communities',
    'sectors.hoteles.title': 'Services for the Hotel Sector',
    'sectors.naves.title': 'Services for Industrial Buildings'
  }
};

for (const [lang, keys] of Object.entries(updates)) {
  // Find the block for the language
  const regex = new RegExp(`(${lang}: \\{[\\s\\S]*?\\n  \\},)`);
  const match = content.match(regex) || (lang === 'en' ? content.match(/(en: \{[\s\S]*?\n  \})/) : null);
  
  if (match) {
    let block = match[1];
    
    for (const [key, val] of Object.entries(keys)) {
      // Replace existing key
      const keyRegex = new RegExp(`'${key}':\\s*'.*?'`);
      if (block.match(keyRegex)) {
        block = block.replace(keyRegex, `'${key}': '${val}'`);
      } else {
        // If missing, append before the end of block
        // Actually sectors might be missing from translations, let's inject them if missing
        console.log(`Key ${key} missing in ${lang}, injecting...`);
        block = block.replace(/(\n  \},?)/, `\n    '${key}': '${val}',$1`);
      }
    }
    
    content = content.replace(match[1], block);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('Titles updated successfully.');
