const { Jimp } = require('jimp');
const path = require('path');

const config = {
  'icon1-pastel.png': {
    out: 'icon-lineas-pastel.png',
    keepRegions: 1 // Carabiner
  },
  'icon2-pastel.png': {
    out: 'icon-cristales-pastel.png',
    keepRegions: 6 // Window panes
  },
  'icon3-pastel.png': {
    out: 'icon-solar-pastel.png',
    keepRegions: 8 // Solar panels/clouds
  },
  'icon4-pastel.png': {
    out: 'icon-fachadas-pastel.png',
    keepRegions: 9 // Building windows and magnifying glass
  }
};

async function processIcon(inFile, conf) {
  const imgPath = path.join(__dirname, 'src', 'assets', 'raw_icons', inFile);
  const outPath = path.join(__dirname, 'src', 'assets', conf.out);
  console.log(`Processing ${inFile} -> ${conf.out}...`);
  
  const img = await Jimp.read(imgPath);
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
  // 1. Erase text at the bottom (y > 830)
  for (let x = 0; x < width; x++) {
    for (let y = 830; y < height; y++) {
      img.setPixelColor(0x00000000, x, y);
    }
  }
  
  // 2. Find white regions
  const visited = Array(width).fill(0).map(() => Array(height).fill(false));
  
  function isWhite(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) return false;
    const color = img.getPixelColor(x, y);
    const r = (color >> 24) & 255;
    const g = (color >> 16) & 255;
    const b = (color >> 8) & 255;
    const a = color & 255;
    return r > 240 && g > 240 && b > 240 && a > 240;
  }
  
  const regions = [];
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (!visited[x][y] && isWhite(x, y)) {
        let area = 0;
        const pixels = [];
        const stack = [[x, y]];
        visited[x][y] = true;
        
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          area++;
          pixels.push([cx, cy]);
          
          const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
              if (!visited[nx][ny] && isWhite(nx, ny)) {
                visited[nx][ny] = true;
                stack.push([nx, ny]);
              }
            }
          }
        }
        
        regions.push({ area, pixels });
      }
    }
  }
  
  // Sort regions by area descending
  regions.sort((a, b) => b.area - a.area);
  console.log(`Found ${regions.length} white regions. Largest: ${regions[0].area}`);
  
  // The first region (index 0) is the outer background. Always make it transparent.
  console.log(`Removing outer background (area ${regions[0].area})...`);
  for (const [px, py] of regions[0].pixels) {
    img.setPixelColor(0x00000000, px, py);
  }
  
  // The next `conf.keepRegions` regions are kept white.
  // The rest are gaps and must be made transparent.
  const startRemoveIndex = 1 + conf.keepRegions;
  console.log(`Keeping ${conf.keepRegions} regions white. Removing ${regions.length - startRemoveIndex} gaps...`);
  
  for (let i = startRemoveIndex; i < regions.length; i++) {
    for (const [px, py] of regions[i].pixels) {
      img.setPixelColor(0x00000000, px, py);
    }
  }
  
  // Save the image
  await img.write(outPath);
  console.log(`Saved ${outPath}`);
}

async function main() {
  for (const [inFile, conf] of Object.entries(config)) {
    await processIcon(inFile, conf);
  }
}

main().catch(console.error);
