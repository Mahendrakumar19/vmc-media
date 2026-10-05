import base64

with open('public/logo-vm-dark-allwhite.png', 'rb') as f:
    png_bytes = f.read()

b64 = base64.b64encode(png_bytes).decode('utf-8')
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 746 348" width="100%" height="100%"><image href="data:image/png;base64,{b64}" width="746" height="348"/></svg>'

with open('public/logo-footer.svg', 'w', encoding='utf-8') as f:
    f.write(svg)

print("Created public/logo-footer.svg successfully!")
