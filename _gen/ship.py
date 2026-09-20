"""Turn the raw Gemini PNGs in _gen/out into the JPEGs the site actually loads.

Gemini caps the long edge at 1024 px - asking for 2K or 4K in the prompt changes
nothing, it was measured - so the only real lever on quality is to stop wasting
those pixels on a crop.  Hence two wallpaper sets: the 16:9 one for
landscape viewports, and a natively vertical cut for phones, where the card is a
sheet that rests closed and the window onto the photograph is tall.

Products ship at their native size: the catalogue tile is ~190 px on desktop and
~165 px on a phone, so 1024 is already several times what any screen asks for and
resampling up would only add a generation of loss.  The wallpapers do have to be
enlarged - they run full-bleed under a ken-burns zoom - so they get Lanczos plus
a two-radius unsharp: a tight pass for edge detail and a wide, gentle one for the
local contrast that makes an enlargement read as sharp rather than merely hard.
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


def enlarge(im, size):
    im = im.resize(size, Image.LANCZOS)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.0, percent=70, threshold=2))
    return im.filter(ImageFilter.UnsharpMask(radius=3.0, percent=22, threshold=3))


def ship(name, kind):
    src = OUT / f"{name}.png"
    if not src.exists():
        print(f"  MISSING {name}")
        return
    im = Image.open(src).convert("RGB")
    if kind == "product":
        im, dest, q = crop_to(im, 3 / 2), SITE / "assets" / "products" / f"{name}.jpg", 92
    elif kind == "wall":
        im = enlarge(crop_to(im, 16 / 9), (1920, 1080))
        dest, q = SITE / "assets" / "wall" / f"{name}.jpg", 86
    else:
        im = enlarge(crop_to(im, 9 / 16), (1012, 1800))
        dest, q = SITE / "assets" / "wall" / f"{name}.jpg", 82
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"  {name:10s} {im.size[0]}x{im.size[1]}  {dest.stat().st_size // 1024} KB")


only = sys.argv[1].split(",") if len(sys.argv) > 1 else None
plan = ([(n, "product") for n in PRODUCTS]
        + [(n, "wall") for n in WALLS]
        + [(n + "-p", "wall_p") for n in WALLS])
for n, kind in plan:
    if not only or n in only:
        ship(n, kind)
