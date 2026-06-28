from PIL import Image, ImageDraw
import sys
import glob
import os

def remove_outer_white(image_path):
    img = Image.open(image_path).convert("RGBA")
    
    # We will use flood fill to find all outer white pixels.
    # To avoid modifying the original image during traversal, we'll create a mask.
    width, height = img.size
    
    # Create a mask image (L mode), initially all black
    # 1 pixel larger on all sides to allow flood fill to flow around the image
    mask = Image.new('L', (width + 2, height + 2), 0)
    
    # We need to find the exact background color. Usually it's white (255, 255, 255, 255)
    # We will consider anything very close to white as background
    
    # Custom flood fill algorithm to find contiguous white pixels from the edges
    pixels = img.load()
    mask_pixels = mask.load()
    
    # Stack for flood fill
    # Start at all border pixels of the mask
    stack = [(0, 0)]
    
    def is_white(x, y):
        if x < 0 or y < 0 or x >= width or y >= height:
            return True # virtual border is white
        r, g, b, a = pixels[x, y]
        # Allow some tolerance for compression artifacts
        return r > 240 and g > 240 and b > 240 and a > 240

    while stack:
        mx, my = stack.pop()
        
        if mx < 0 or my < 0 or mx >= width + 2 or my >= height + 2:
            continue
            
        if mask_pixels[mx, my] == 255:
            continue # already visited
            
        # Check if the corresponding image pixel is white
        ix, iy = mx - 1, my - 1
        if not is_white(ix, iy):
            continue
            
        # It is white, mark in mask
        mask_pixels[mx, my] = 255
        
        # Add neighbors
        stack.extend([
            (mx + 1, my),
            (mx - 1, my),
            (mx, my + 1),
            (mx, my - 1)
        ])
        
    # Now, any pixel in the original image where mask is 255 should be made transparent
    for y in range(height):
        for x in range(width):
            if mask_pixels[x + 1, y + 1] == 255:
                # Make it transparent
                pixels[x, y] = (255, 255, 255, 0)
                
    # Overwrite the image
    img.save(image_path)
    print(f"Processed {image_path}")

def main():
    assets_dir = "src/assets"
    icons = glob.glob(os.path.join(assets_dir, "icon-*-pastel.png"))
    for icon in icons:
        remove_outer_white(icon)

if __name__ == "__main__":
    main()
