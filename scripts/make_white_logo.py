from PIL import Image
import numpy as np

def make_all_white_dark_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Non-transparent pixels (a > 20) should all be set to clean solid white (255, 255, 255)
    mask = a > 20
    
    data[:,:,0][mask] = 255
    data[:,:,1][mask] = 255
    data[:,:,2][mask] = 255
    
    result_img = Image.fromarray(data.astype(np.uint8))
    
    # Trim empty padding
    bbox = result_img.getbbox()
    if bbox:
        left = max(0, bbox[0] - 5)
        top = max(0, bbox[1] - 5)
        right = min(result_img.width, bbox[2] + 5)
        bottom = min(result_img.height, bbox[3] + 5)
        result_img = result_img.crop((left, top, right, bottom))
        
    result_img.save(output_path, "PNG")
    print(f"Generated all-white dark logo at {output_path}")

if __name__ == "__main__":
    make_all_white_dark_logo("public/logo-vm-dark.png", "public/logo-vm-dark-allwhite.png")
