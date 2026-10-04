from PIL import Image
import numpy as np

def trim_and_transparent(input_path, output_path, bg_mode="light"):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    if bg_mode == "light":
        whiteness = (r + g + b) / 3.0
        # Whiteness > 240 => transparent
        # Whiteness < 200 => opaque
        alpha = np.clip((240.0 - whiteness) / (240.0 - 200.0) * 255.0, 0, 255)
    else:
        luminance = (r * 0.299 + g * 0.587 + b * 0.114)
        # Dark navy bg: luminance < 25 => transparent
        # luminance > 50 => opaque
        alpha = np.clip((luminance - 25.0) / (50.0 - 25.0) * 255.0, 0, 255)
        
    data[:,:,3] = alpha
    result_img = Image.fromarray(data.astype(np.uint8))
    
    # Trim empty transparent padding bounding box
    bbox = result_img.getbbox()
    if bbox:
        # Add 5px padding around bounding box
        left = max(0, bbox[0] - 5)
        top = max(0, bbox[1] - 5)
        right = min(result_img.width, bbox[2] + 5)
        bottom = min(result_img.height, bbox[3] + 5)
        cropped_img = result_img.crop((left, top, right, bottom))
        cropped_img.save(output_path, "PNG")
        print(f"Trimmed & saved {output_path} with bbox {bbox}")
    else:
        result_img.save(output_path, "PNG")

if __name__ == "__main__":
    trim_and_transparent("public/logo-vm.png", "public/logo-vm.png", "light")
    trim_and_transparent("public/logo-vm-dark.png", "public/logo-vm-dark.png", "dark")
