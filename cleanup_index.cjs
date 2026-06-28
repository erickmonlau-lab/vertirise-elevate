const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Remove VideoSection (defined but never used in Index)
const vsStart = content.indexOf('\nfunction VideoSection()');
const vsEnd = content.indexOf('\nfunction Process()');
if (vsStart > -1 && vsEnd > -1) {
  content = content.substring(0, vsStart) + '\n' + content.substring(vsEnd);
  console.log('VideoSection removed');
} else {
  console.log('VideoSection not found or already removed');
}

// 2. Move circleColors outside Sectors
const oldPattern = 'function Sectors() {\n  const { t } = useTranslation();\n  \n  // Custom colors requested by user\n  const circleColors = ["bg-[#e91e63]", "bg-[#03a9f4]", "bg-[#39FF14] text-navy"];';
const newPattern = 'const SECTOR_CIRCLE_COLORS = ["bg-[#e91e63]", "bg-[#03a9f4]", "bg-[#39FF14] text-navy"];\n\nfunction Sectors() {\n  const { t } = useTranslation();';

if (content.includes(oldPattern)) {
  content = content.replace(oldPattern, newPattern);
  content = content.split('circleColors[').join('SECTOR_CIRCLE_COLORS[');
  console.log('circleColors moved outside');
} else {
  console.log('circleColors pattern not matched exactly. Trying partial...');
  // Try partial
  if (content.includes('const circleColors = [')) {
    content = content.replace(
      '  // Custom colors requested by user\n  const circleColors = ["bg-[#e91e63]", "bg-[#03a9f4]", "bg-[#39FF14] text-navy"];',
      ''
    );
    // Insert before function Sectors
    content = content.replace(
      'function Sectors() {',
      'const SECTOR_CIRCLE_COLORS = ["bg-[#e91e63]", "bg-[#03a9f4]", "bg-[#39FF14] text-navy"];\n\nfunction Sectors() {'
    );
    content = content.split('circleColors[').join('SECTOR_CIRCLE_COLORS[');
    console.log('circleColors moved (partial match)');
  }
}

fs.writeFileSync('src/routes/index.tsx', content, 'utf8');
console.log('Done! Lines:', content.split('\n').length);
