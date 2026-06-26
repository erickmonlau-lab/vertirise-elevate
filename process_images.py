import numpy as np
from PIL import Image, ImageDraw
import glob
import os

files = glob.glob('src/assets/raw_icons/icon*.png')

# Target colors (RGB)
target_colors = [
    [255, 175, 204], # Pastel Pink
    [162, 210, 255], # Pastel Blue
    [253, 240, 213], # Soft Yellow
    [142, 202, 230], # Soft Turquoise
]

for idx, file in enumerate(files):
    img = Image.open(file).convert('RGBA')
    arr = np.array(img)
    
    r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
    
    # Mask for lime green. Green is usually higher than red and blue.
    mask = (g > 100) & (g > r + 15) & (g > b + 40)
    
    intensity = g[mask] / 200.0  # Normalize slightly higher to keep it bright
    
    target = target_colors[idx % len(target_colors)]
    
    arr[mask, 0] = np.clip(target[0] * intensity, 0, 255)
    arr[mask, 1] = np.clip(target[1] * intensity, 0, 255)
    arr[mask, 2] = np.clip(target[2] * intensity, 0, 255)
    
    out_img = Image.fromarray(arr)
    
    # Paint over Gemini watermark (bottom right corner)
    draw = ImageDraw.Draw(out_img)
    w, h = out_img.size
    
    # Cover the bottom right 10% of the corner, usually safe and hides the watermark
    box_size = int(w * 0.12)
    draw.rectangle([w-box_size, h-box_size, w, h], fill=(255, 255, 255, 255))
    
    out_name = file.replace('.png', '-pastel.png')
    out_img.save(out_name)
    print(f"Processed {file} -> {out_name}")
