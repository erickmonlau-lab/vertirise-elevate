const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

async function removeOuterWhite(imagePath) {
  try {
    const img = await Jimp.read(imagePath);
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    
    // Create a 2D boolean array for visited pixels
    const visited = Array(width).fill(0).map(() => Array(height).fill(false));
    
    const stack = [];
    
    // Initialize stack with border pixels
    for (let x = 0; x < width; x++) {
      stack.push([x, 0]);
      stack.push([x, height - 1]);
    }
    for (let y = 0; y < height; y++) {
      stack.push([0, y]);
      stack.push([width - 1, y]);
    }
    
    function isWhite(x, y) {
      if (x < 0 || y < 0 || x >= width || y >= height) return false;
      const color = img.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      const a = color & 255;
      return r > 240 && g > 240 && b > 240 && a > 240;
    }
    
    let processedPixels = 0;
    // Flood fill
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      
      if (x < 0 || y < 0 || x >= width || y >= height) continue;
      if (visited[x][y]) continue;
      
      if (isWhite(x, y)) {
        visited[x][y] = true;
        // Make this pixel transparent immediately
        img.setPixelColor(0x00000000, x, y);
        processedPixels++;
        
        // Push neighbors
        stack.push([x + 1, y]);
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x, y - 1]);
      }
    }
    
    await img.write(imagePath);
    console.log(`Processed ${imagePath}: Removed ${processedPixels} outer white pixels`);
  } catch (err) {
    console.error(`Error processing ${imagePath}:`, err);
  }
}

async function main() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  const files = fs.readdirSync(assetsDir);
  
  for (const file of files) {
    if (file.startsWith('icon-') && file.endsWith('-pastel.png')) {
      await removeOuterWhite(path.join(assetsDir, file));
    }
  }
}

main();
