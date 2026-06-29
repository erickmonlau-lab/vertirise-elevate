const fs = require('fs');
const file = 'src/i18n/translations.ts';
let content = fs.readFileSync(file, 'utf8');
const dict = JSON.parse(fs.readFileSync('scripts/dict.json', 'utf8'));

let esMatch = content.match(/es: \{([\s\S]*?)\n  \},/);
let caMatch = content.match(/ca: \{([\s\S]*?)(\n  \},)/);
let enMatch = content.match(/en: \{([\s\S]*?)(\n  \})/); // Check EN as well

if (esMatch && caMatch) {
  let esKeys = {};
  esMatch[1].split('\n').forEach(line => {
    let m = line.match(/^\s*'([^']+)':\s*'(.*)'/);
    if (m) esKeys[m[1]] = m[2];
  });

  let caBlock = caMatch[1];
  let enBlock = enMatch ? enMatch[1] : '';
  let updatedCountCa = 0;
  let updatedCountEn = 0;
  
  for (const [key, esVal] of Object.entries(esKeys)) {
    let caValMatch = caBlock.match(new RegExp(`^\\s*'${key}':\\s*'(.*)'`, 'm'));
    
    // Check if missing or matching spanish
    if (!caValMatch || caValMatch[1] === esVal) {
      let idealCaVal = dict[esVal] || dict[esVal.replace(/\\'/g, "'")];
      if (idealCaVal) {
        if (!caValMatch) {
          caBlock += `\n    '${key}': '${idealCaVal.replace(/'/g, "\\'")}',`;
          updatedCountCa++;
        } else {
          caBlock = caBlock.replace(new RegExp(`(^\\s*'${key}':\\s*').*?(')`,"m"), `$1${idealCaVal.replace(/'/g, "\\'")}$2`);
          updatedCountCa++;
        }
      }
    }
    
    // Check EN for missing keys
    if (enMatch) {
      let enValMatch = enBlock.match(new RegExp(`^\\s*'${key}':\\s*'(.*)'`, 'm'));
      if (!enValMatch) {
        // Just put the ES val so it's not totally missing, or leave it blank.
        // Usually, EN should have it, but if it doesn't we'll just insert something to prevent errors.
        enBlock += `\n    '${key}': '${esVal.replace(/'/g, "\\'")}',`;
        updatedCountEn++;
      }
    }
  }
  
  content = content.replace(caMatch[1], caBlock);
  if (enMatch) content = content.replace(enMatch[1], enBlock);
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Updated CA: " + updatedCountCa + " keys.");
  console.log("Updated EN: " + updatedCountEn + " keys.");
} else {
  console.log("Failed to parse language blocks.");
}
