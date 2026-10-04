from PIL import Image
import numpy as np

def remove_light_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate luminance/whiteness
    whiteness = (r + g + b) / 3.0
    
    # Create smooth alpha transparency channel for white background
    # Whiteness > 248 => completely transparent
    # Whiteness < 210 => completely opaque
    # Between 210 and 248 => smooth linear alpha ramp
    alpha = np.clip((248.0 - whiteness) / (248.0 - 210.0) * 255.0, 0, 255)
    
    data[:,:,3] = alpha
    out = Image.fromarray(data.astype(np.uint8))
    out.save(output_path, "PNG")
    print(f"Saved {output_path}")

def remove_dark_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Dark navy background values in the image: r~2..10, g~6..20, b~20..45
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)
    
    # Threshold for dark background
    # Luminance < 18 => transparent
    # Luminance > 45 => opaque
    alpha = np.clip((luminance - 18.0) / (45.0 - 18.0) * 255.0, 0, 255)
    
    data[:,:,3] = alpha
    out = Image.fromarray(data.astype(np.uint8))
    out.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == "__main__":
    remove_light_bg("public/logo-vm.png", "public/logo-vm-clean.png")
    remove_dark_bg("public/logo-vm-dark.png", "public/logo-vm-dark-clean.png")
