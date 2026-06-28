const { Jimp } = require('jimp');
const path = require('path');

async function analyzeWhiteRegions(imagePath) {
  const img = await Jimp.read(imagePath);
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
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
        let minX = x, maxX = x, minY = y, maxY = y;
        const stack = [[x, y]];
        visited[x][y] = true;
        
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          area++;
          if (cx < minX) minX = cx;
          if (cx > maxX) maxX = cx;
          if (cy < minY) minY = cy;
          if (cy > maxY) maxY = cy;
          
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
        
        regions.push({ x, y, area, minX, maxX, minY, maxY });
      }
    }
  }
  
  regions.sort((a, b) => b.area - a.area);
  console.log(`\nFound ${regions.length} white regions in ${path.basename(imagePath)}:`);
  for (let i = 0; i < Math.min(10, regions.length); i++) {
    const r = regions[i];
    console.log(`Region ${i+1}: area=${r.area}, bbox=[${r.minX},${r.minY} to ${r.maxX},${r.maxY}]`);
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
    await analyzeWhiteRegions(path.join(__dirname, 'src', 'assets', file));
  }
}
main();
