const { Jimp } = require('jimp');
const path = require('path');

const config = {
  'icon1-pastel.png': {
    out: 'icon-lineas-pastel.png',
    keepIndices: [1, 8] // Region 1 is the tube, Region 8 is the small metal part. Region 0 is the middle void.
  }
};

async function processIcon(inFile, conf) {
  const imgPath = path.join(__dirname, 'src', 'assets', 'raw_icons', inFile);
  const outPath = path.join(__dirname, 'src', 'assets', conf.out);
  console.log(`\nProcessing ${inFile} -> ${conf.out}...`);
  
  const img = await Jimp.read(imgPath);
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
  // 1. Erase text at the bottom (y >= 900)
  for (let x = 0; x < width; x++) {
    for (let y = 900; y < height; y++) {
      img.setPixelColor(0x00000000, x, y);
    }
  }
  
  // 2. Find all white regions
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
    for (let y = 0; y < 900; y++) {
      if (!visited[x][y] && isWhite(x, y)) {
        let area = 0;
        let isOuter = false;
        const pixels = [];
        const stack = [[x, y]];
        visited[x][y] = true;
        
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          area++;
          pixels.push([cx, cy]);
          
          if (cx === 0 || cx === width - 1 || cy === 0 || cy === 899) {
            isOuter = true;
          }
          
          const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && ny >= 0 && nx < width && ny < 900) {
              if (!visited[nx][ny] && isWhite(nx, ny)) {
                visited[nx][ny] = true;
                stack.push([nx, ny]);
              }
            }
          }
        }
        
        regions.push({ area, isOuter, pixels });
      }
    }
  }
  
  // Separate into outer and inner regions
  const outerRegions = regions.filter(r => r.isOuter);
  const innerRegions = regions.filter(r => !r.isOuter);
  
  console.log(`Found ${outerRegions.length} outer regions, and ${innerRegions.length} inner regions.`);
  
  // Make all outer regions transparent
  for (const r of outerRegions) {
    for (const [px, py] of r.pixels) {
      img.setPixelColor(0x00000000, px, py);
    }
  }
  
  // Sort inner regions by area descending
  innerRegions.sort((a, b) => b.area - a.area);
  
  // Keep the regions specified in `conf.keepIndices` or `conf.keepRegions` white
  // Make the rest transparent (they are gaps)
  let removedGaps = 0;
  for (let i = 0; i < innerRegions.length; i++) {
    let shouldKeep = false;
    if (conf.keepIndices) {
      shouldKeep = conf.keepIndices.includes(i);
    } else if (conf.keepRegions) {
      shouldKeep = i < conf.keepRegions;
    }
    
    if (!shouldKeep) {
      for (const [px, py] of innerRegions[i].pixels) {
        img.setPixelColor(0x00000000, px, py);
      }
      removedGaps++;
    }
  }
  
  console.log(`Removed ${removedGaps} inner gaps.`);
  
  await img.write(outPath);
  console.log(`Saved ${outPath}`);
}

async function main() {
  for (const [inFile, conf] of Object.entries(config)) {
    await processIcon(inFile, conf);
  }
}

main().catch(console.error);
