const { Jimp } = require('jimp');
const path = require('path');

async function checkColors(imagePath) {
  const img = await Jimp.read(imagePath);
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
  const colors = {};
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      const color = img.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      const a = color & 255;
      if (a > 0) {
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        colors[hex] = (colors[hex] || 0) + 1;
      }
    }
  }
  
  const sortedColors = Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 5);
  console.log(`${path.basename(imagePath)} top colors:`);
  console.log(sortedColors);
}

async function main() {
  const files = [
    'icon-lineas-pastel.png',
    'service-lineas-pastel.png'
  ];
  for (const file of files) {
    await checkColors(path.join(__dirname, 'src', 'assets', file));
  }
}
main();
