"""Cut the EasyPak wordmark off its white background, and knock it out to white.

The source is a 1000x1000 PNG with no alpha: the mark sits on pure white, with a
faint 254-grey rectangle around it.  Naive colour-to-alpha would leave the solid
brand colours semi-transparent, so alpha is taken from how far a pixel is from
white, normalised so the slate and the green both reach fully opaque, and the
colour is then un-premultiplied - otherwise every antialiased edge keeps a white
fringe and the mark looks haloed on a dark photograph.

Two files come out.  easypaksa.com ships the same two: slate-on-light, and a
white knockout for dark backgrounds.  The knockout is the one that belongs over
a photograph, and it is rebuilt here rather than taken from the live site
because theirs is only 301 px wide.
"""
from pathlib import Path
import numpy as np
from PIL import Image

SRC = Path.home() / "Desktop" / "EasyPak Logo.png"
ASSETS = Path(__file__).resolve().parent.parent / "assets"
PAD = 6          # px of breathing room kept around the mark
FLOOR = 0.02     # anything fainter than this is the 254-grey plate, not the mark

# sampled off easypaksa.com's own 02-groups-logos.png so the knockout matches
SLATE_OUT, GREEN_OUT = (254, 254, 254), (165, 200, 67)
SLATE_IN, GREEN_IN = np.array([86.0, 103.0, 124.0]), np.array([154.0, 203.0, 78.0])

rgb = np.asarray(Image.open(SRC).convert("RGB")).astype(np.float64)
raw = (255.0 - rgb.min(axis=2)) / 255.0

# the solid brand colours are the darkest thing in the file; make them opaque
k = np.percentile(raw[raw > 0.3], 60)
a = np.clip(raw / k, 0.0, 1.0)
a[a < FLOOR] = 0.0

# un-premultiply against white: P = a*F + (1-a)*255
safe = np.where(a > 0, a, 1.0)[..., None]
fg = np.clip((rgb - 255.0 * (1.0 - a[..., None])) / safe, 0, 255)

ys, xs = np.nonzero(a > 0.15)
box = (max(xs.min() - PAD, 0), max(ys.min() - PAD, 0),
       min(xs.max() + 1 + PAD, a.shape[1]), min(ys.max() + 1 + PAD, a.shape[0]))

# The knockout repaints only the slate; "PAK" stays green. Which is which is
# decided per pixel by nearest source colour, so the antialiased edges and the
# few pixels where the green overlaps the slate all land on the right side.
is_green = np.abs(fg - GREEN_IN).sum(axis=2) < np.abs(fg - SLATE_IN).sum(axis=2)
knock = np.where(is_green[..., None], np.array(GREEN_OUT, float), np.array(SLATE_OUT, float))

ASSETS.mkdir(parents=True, exist_ok=True)
for name, colour in (("logo.png", knock), ("logo-dark.png", fg)):
    im = Image.fromarray(np.dstack([colour, a * 255.0]).astype(np.uint8), "RGBA").crop(box)
    dest = ASSETS / name
    im.save(dest, optimize=True)
    print(f"{name:14s} {im.size[0]}x{im.size[1]}  {dest.stat().st_size // 1024} KB")
print(f"k={k:.3f}")
