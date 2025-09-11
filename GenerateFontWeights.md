---
title: Generating more font weights
public: true
---

# Generating more font weights

Some fonts only come with a Regular (400) weight, but we can use FontForge to generate more weights.

```python
import fontforge

# Generate bold weight
font = fontforge.open('fonts/ttf/FragmentMono-Regular.ttf')
font.selection.all()
font.fontname = 'FragmentMono-Bold'
font.fullname = 'Fragment Mono Bold'
font.weight = 'Bold'
font.changeWeight(32, "LCG", 0, 0, "squish")
font.generate('fonts/ttf/FragmentMono-Bold.ttf')
print(font)
font.close()
```

To run the script:

```sh
fontforge -lang=py -script generate_font_weights.py
```
