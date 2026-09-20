"""Cut the supplied EasyPak wordmark off its white background.

The source is a 1000x1000 JPEG-ish PNG with no alpha: the mark sits on pure
white, with a faint 254-grey rectangle around it.  Naive colour-to-alpha would
leave the solid brand colours semi-transparent, so alpha is taken from how far
a pixel is from white, normalised so the slate and the green both reach fully
opaque, and the colour is then un-premultiplied - otherwise every antialiased
edge keeps a white fringe and the mark looks haloed on a dark photograph.
"""
from pathlib import Path
import numpy as np
from PIL import Image

SRC = Path(r"C:\Users\it\Desktop\EasyPak Logo.png")
DEST = Path(__file__).resolve().parent.parent / "assets" / "logo.png"
PAD = 6          # px of breathing room kept around the mark
FLOOR = 0.02     # anything fainter than this is the 254-grey plate, not the mark

rgb = np.asarray(Image.open(SRC).convert("RGB")).astype(np.float64)
raw = (255.0 - rgb.min(axis=2)) / 255.0

# the solid brand colours are the darkest thing in the file; make them opaque
k = np.percentile(raw[raw > 0.3], 60)
a = np.clip(raw / k, 0.0, 1.0)
a[a < FLOOR] = 0.0

# un-premultiply against white: P = a*F + (1-a)*255
safe = np.where(a > 0, a, 1.0)[..., None]
fg = np.clip((rgb - 255.0 * (1.0 - a[..., None])) / safe, 0, 255)

out = np.dstack([fg, a * 255.0]).astype(np.uint8)
ys, xs = np.nonzero(a > 0.15)
box = (max(xs.min() - PAD, 0), max(ys.min() - PAD, 0),
       min(xs.max() + 1 + PAD, out.shape[1]), min(ys.max() + 1 + PAD, out.shape[0]))
im = Image.fromarray(out, "RGBA").crop(box)
DEST.parent.mkdir(parents=True, exist_ok=True)
im.save(DEST, optimize=True)
print(f"{DEST.name}  {im.size[0]}x{im.size[1]}  {DEST.stat().st_size // 1024} KB  k={k:.3f}")
