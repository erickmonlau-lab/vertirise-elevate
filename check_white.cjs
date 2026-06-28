const { Jimp } = require('jimp');
const path = require('path');

async function checkWhite(imagePath) {
  try {
    const img = await Jimp.read(imagePath);
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    
    let whitePixels = 0;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const color = img.getPixelColor(x, y);
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        const a = color & 255;
        if (r > 240 && g > 240 && b > 240 && a > 240) {
          whitePixels++;
        }
      }
    }
    console.log(`${path.basename(imagePath)}: ${whitePixels} white pixels remain.`);
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  const files = [
    'icon-cristales-pastel.png',
    'icon-fachadas-pastel.png',
    'icon-solar-pastel.png',
    'icon-lineas-pastel.png'
  ];
  for (const file of files) {
    await checkWhite(path.join(__dirname, 'src', 'assets', file));
  }
}
main();
