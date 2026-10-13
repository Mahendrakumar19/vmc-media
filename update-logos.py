import base64
from PIL import Image

# 1. Update logo-vm.png and logo-vm-clean.png
final_light = Image.open('public/test-catalyse-light.png')
final_light.save('public/logo-vm.png')
final_light.save('public/logo-vm-clean.png')

# 2. Update logo-vm.svg
w, h = final_light.size
with open('public/test-catalyse-light.png', 'rb') as f:
    b64_light = base64.b64encode(f.read()).decode('utf-8')

svg_light = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%">
  <image href="data:image/png;base64,{b64_light}" width="{w}" height="{h}"/>
</svg>"""

with open('public/logo-vm.svg', 'w', encoding='utf-8') as f:
    f.write(svg_light)

# 3. Update logo-vm-dark.png, logo-vm-dark.svg, and logo-footer.svg
final_dark = Image.open('public/test-catalyse-dark.png')
final_dark.save('public/logo-vm-dark.png')
final_dark.save('public/logo-vm-dark-allwhite.png')
final_dark.save('public/logo-vm-dark-clean.png')

w_d, h_d = final_dark.size
with open('public/test-catalyse-dark.png', 'rb') as f:
    b64_dark = base64.b64encode(f.read()).decode('utf-8')

svg_dark = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w_d} {h_d}" width="100%" height="100%">
  <image href="data:image/png;base64,{b64_dark}" width="{w_d}" height="{h_d}"/>
</svg>"""

with open('public/logo-vm-dark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_dark)

with open('public/logo-footer.svg', 'w', encoding='utf-8') as f:
    f.write(svg_dark)

print('All logo assets successfully updated with CATALYSE and distinct V / M colors!')
