import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const rawDir = 'src/assets/raw_icons';
const targetColors = [
    { r: 255, g: 175, b: 204 }, // Pink
    { r: 162, g: 210, b: 255 }, // Blue
    { r: 253, g: 240, b: 213 }, // Yellow
    { r: 142, g: 202, b: 230 }, // Turquoise
];

const files = fs.readdirSync(rawDir).filter(f => f.endsWith('.png') && !f.includes('-pastel'));

async function processImages() {
    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(rawDir, files[i]);
        console.log(`Processing ${filePath}...`);
        try {
            const image = await Jimp.read(filePath);
            
            const target = targetColors[i % targetColors.length];
            const w = image.bitmap.width;
            const h = image.bitmap.height;
            const boxSize = Math.floor(w * 0.12);

            image.scan(0, 0, w, h, function(x, y, idx) {
                // Paint watermark corner white
                if (x >= w - boxSize && y >= h - boxSize) {
                    this.bitmap.data[idx + 0] = 255;
                    this.bitmap.data[idx + 1] = 255;
                    this.bitmap.data[idx + 2] = 255;
                    this.bitmap.data[idx + 3] = 255;
                    return;
                }

                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                
                // Mask for lime green: g > 100, g > r + 15, g > b + 40
                if (g > 100 && g > r + 15 && g > b + 40) {
                    const intensity = Math.min(g / 200.0, 1.2);
                    this.bitmap.data[idx + 0] = Math.min(255, Math.floor(target.r * intensity));
                    this.bitmap.data[idx + 1] = Math.min(255, Math.floor(target.g * intensity));
                    this.bitmap.data[idx + 2] = Math.min(255, Math.floor(target.b * intensity));
                }
            });
            
            const outName = filePath.replace('.png', '-pastel.png');
            await image.write(outName);
            console.log(`Saved ${outName}`);
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
        }
    }
}

processImages();
