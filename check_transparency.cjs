const { Jimp } = require('jimp');
const path = require('path');

async function checkTransparent(imagePath) {
  const img = await Jimp.read(imagePath);
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
  let hasTransparent = false;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const color = img.getPixelColor(x, y);
      const a = color & 255;
      if (a < 255) {
        hasTransparent = true;
        break;
      }
    }
    if (hasTransparent) break;
  }
  console.log(`${path.basename(imagePath)}: hasTransparent=${hasTransparent}`);
}

async function main() {
  const files = [
    'icon1-pastel.png',
    'icon2-pastel.png',
    'icon3-pastel.png',
    'icon4-pastel.png'
  ];
  for (const file of files) {
    await checkTransparent(path.join(__dirname, 'src', 'assets', 'raw_icons', file));
  }
}
main();
