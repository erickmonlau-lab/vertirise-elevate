const fs = require('fs');
let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const esExtra = `
    'services.cristales.titleHighlight': 'en Altura',
    'services.fachadas.titleHighlight': 'de Fachadas',
    'services.placas.titleHighlight': 'Placas Solares',
    'services.lineas.titleHighlight': 'Líneas de Vida',
`;

const caExtra = `
    'services.cristales.titleHighlight': 'en Alçada',
    'services.fachadas.titleHighlight': 'de Façanes',
    'services.placas.titleHighlight': 'Plaques Solars',
    'services.lineas.titleHighlight': 'Línies de Vida',
`;

const enExtra = `
    'services.cristales.titleHighlight': 'Window Cleaning',
    'services.fachadas.titleHighlight': 'Facade',
    'services.placas.titleHighlight': 'Solar Panel',
    'services.lineas.titleHighlight': 'Lifeline',
`;

// Just inject right after the language key definitions
content = content.replace(/es: \{/, "es: {" + esExtra);
content = content.replace(/ca: \{/, "ca: {" + caExtra);
content = content.replace(/en: \{/, "en: {" + enExtra);

fs.writeFileSync('src/i18n/translations.ts', content, 'utf8');
console.log('Extra highlights updated successfully.');
