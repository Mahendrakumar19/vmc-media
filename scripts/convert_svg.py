import base64
from PIL import Image

def png_to_svg(png_path, svg_path):
    img = Image.open(png_path)
    width, height = img.size
    
    with open(png_path, "rb") as f:
        encoded = base64.b64encode(f.read()).decode('utf-8')
        
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">
  <image href="data:image/png;base64,{encoded}" width="{width}" height="{height}" />
</svg>'''
    
    with open(svg_path, "w") as f:
        f.write(svg_content)
    print(f"Generated clean vector SVG {svg_path} ({width}x{height})")

if __name__ == "__main__":
    png_to_svg("public/logo-vm.png", "public/logo-vm.svg")
    png_to_svg("public/logo-vm-dark.png", "public/logo-vm-dark.svg")
