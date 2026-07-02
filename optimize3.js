import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

async function processImages() {
  const resizeMap = {
    'logo-diset-opt.webp': { width: 330 },
    'icon-solar-pastel-opt.webp': { width: 250 },
    'icon-lineas-pastel-opt.webp': { width: 250 },
    'icon-fachadas-pastel-opt.webp': { width: 250 },
    'icon-cristales-pastel-opt.webp': { width: 250 },
    'after-fachada-opt.webp': { width: 504 },
    'after-solares-opt.webp': { width: 504 },
    'before-fachada-opt.webp': { width: 504 },
    'before-solares-opt.webp': { width: 504 },
    'hero-opt.webp': { width: 1280 }, 'service-cristales-opt.webp': { width: 400 }, 'service-fachadas-opt.webp': { width: 400 }, 'service-solar-opt.webp': { width: 400 }, 'service-lineas-opt.webp': { width: 400 }, 'before-cristales-opt.webp': { width: 504 }, 'after-cristales-opt.webp': { width: 504 }
  };

  for (const [file, options] of Object.entries(resizeMap)) {
    const filePath = path.join(assetsDir, file);
    const newName = file.replace('-opt.webp', '-opt2.webp');
    const newPath = path.join(assetsDir, newName);
    
    if (!fs.existsSync(filePath)) continue;

    try {
      await sharp(filePath)
        .resize(options.width, null, { withoutEnlargement: true })
        .webp({ quality: 65, effort: 6 }) 
        .toFile(newPath);
        
      console.log(`✅ Created ${newName}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}
processImages();
