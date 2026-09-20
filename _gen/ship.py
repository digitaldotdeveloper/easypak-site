"""Turn the raw Gemini PNGs in _gen/out into the JPEGs the site actually loads.

Products keep their native 1024 px long edge (the catalogue tile is ~250 px, so
that is already four times what the screen asks for) and are cropped to the
3:2 the tile crops to anyway.  Wallpapers are full-bleed behind a heavy veil,
so they are cropped to 16:9 and taken up to 1920 px with Lanczos plus a mild
unsharp - the native 1024 would visibly soften under the ken-burns zoom.
"""
import sys
from pathlib import Path
from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent
OUT, SITE = HERE / "out", HERE.parent

PRODUCTS = "pp pet steel cord film tape bubble foam carton seals tools dispenser".split()
WALLS = "w1 w2 w3 w4 w5 w6".split()


def crop_to(im, ratio):
    w, h = im.size
    if w / h > ratio:
        new = int(round(h * ratio))
        box = ((w - new) // 2, 0, (w - new) // 2 + new, h)
    else:
        new = int(round(w / ratio))
        box = (0, (h - new) // 2, w, (h - new) // 2 + new)
    return im.crop(box)


def ship(name, kind):
    src = OUT / f"{name}.png"
    if not src.exists():
        print(f"  MISSING {name}")
        return False
    im = Image.open(src).convert("RGB")
    if kind == "product":
        im = crop_to(im, 3 / 2).resize((1200, 800), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.0, percent=45, threshold=3))
        dest, q = SITE / "assets" / "products" / f"{name}.jpg", 88
    else:
        im = crop_to(im, 16 / 9).resize((1920, 1080), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.4, percent=65, threshold=3))
        dest, q = SITE / "assets" / "wall" / f"{name}.jpg", 84
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"  {name:10s} {im.size[0]}x{im.size[1]}  {dest.stat().st_size // 1024} KB")
    return True


only = sys.argv[1].split(",") if len(sys.argv) > 1 else None
print("products")
for n in PRODUCTS:
    if not only or n in only:
        ship(n, "product")
print("wallpapers")
for n in WALLS:
    if not only or n in only:
        ship(n, "wall")
