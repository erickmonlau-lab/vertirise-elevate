const fs = require('fs');
let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const caExtra = `
    'nav.home': 'Inici',
    'service.benefits.title': 'Beneficis del servei',
    'service.features.title': 'El Nostre Mètode',
    'service.faq.title': 'Preguntes Freqüents',
`;

// Insert the caExtra right after `// Nav` inside the `ca` block.
content = content.replace(/(ca: \{[\s\S]*?)(\n    \/\/ Nav)/, `$1\n    // Nav\n${caExtra}`);

fs.writeFileSync('src/i18n/translations.ts', content, 'utf8');
console.log('Extra translations updated successfully.');
