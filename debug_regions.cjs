const { Jimp } = require('jimp');
const path = require('path');

async function debug() {
  const imgPath = path.join(__dirname, 'src', 'assets', 'raw_icons', 'icon1-pastel.png');
  const img = await Jimp.read(imgPath);
  const width = img.bitmap.width;
  
  // Find white regions
  const visited = Array(width).fill(0).map(() => Array(900).fill(false));
  
  function isWhite(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= 900) return false;
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
        let minX = width, maxX = 0, minY = 900, maxY = 0;
        
        const stack = [[x, y]];
        visited[x][y] = true;
        
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          area++;
          pixels.push([cx, cy]);
          
          if (cx < minX) minX = cx;
          if (cx > maxX) maxX = cx;
          if (cy < minY) minY = cy;
          if (cy > maxY) maxY = cy;
          
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
        
        if (!isOuter) {
          regions.push({ area, minX, maxX, minY, maxY, seed: [x, y] });
        }
      }
    }
  }
  
  regions.sort((a, b) => b.area - a.area);
  
  console.log('Inner Regions:');
  regions.forEach((r, i) => {
    console.log(`Index ${i}: Area ${r.area}, BoundingBox: [${r.minX}, ${r.maxX}] x [${r.minY}, ${r.maxY}], Seed: ${r.seed[0]}, ${r.seed[1]}`);
  });
}

debug().catch(console.error);
