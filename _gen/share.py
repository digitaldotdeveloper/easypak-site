"""Draw the 1200x630 card that WhatsApp, LinkedIn and Facebook show for the link.

A link preview is not the website in miniature - it is read at about a third of
this size in a chat list, so it carries three things only: the mark, one line
that says what the company sells, and where it delivers.  The photograph is the
container shot because it survives being shrunk: one strong diagonal and a block
of colour, rather than detail that turns to mush.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SITE = Path(__file__).resolve().parent.parent
W, H = 1200, 630
FONT = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SB = "C:/Windows/Fonts/seguisb.ttf"
LIME = (180, 218, 60)


def fit(img, w, h):
    """Cover-crop, the way CSS background-size:cover would."""
    s = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * s), round(img.height * s)), Image.LANCZOS)
    return img.crop(((img.width - w) // 2, (img.height - h) // 2,
                     (img.width - w) // 2 + w, (img.height - h) // 2 + h))


card = fit(Image.open(SITE / "assets" / "wall" / "w4.jpg").convert("RGB"), W, H)

# a scrim heavy enough on the left that white type is legible over any of it
scrim = Image.new("L", (W, H), 0)
px = scrim.load()
for x in range(W):
    a = 238 - int(206 * min(max((x - 60) / 880.0, 0.0), 1.0))
    for y in range(H):
        px[x, y] = a
card = Image.composite(Image.new("RGB", (W, H), (14, 21, 30)), card, scrim)

logo = Image.open(SITE / "assets" / "logo.png").convert("RGBA")
logo = logo.resize((430, round(430 * logo.height / logo.width)), Image.LANCZOS)
card.paste(logo, (72, 96), logo)

d = ImageDraw.Draw(card)
d.text((72, 268), "Packaging materials,", font=ImageFont.truetype(FONT, 62), fill=(255, 255, 255))
d.text((72, 340), "priced in one message.", font=ImageFont.truetype(FONT, 62), fill=(255, 255, 255))
d.text((72, 446), "RIYADH  ·  DAMMAM  ·  JEDDAH", font=ImageFont.truetype(FONT_SB, 27), fill=LIME)
d.text((72, 496), "Strapping · Stretch film · Tapes · Protective packaging",
       font=ImageFont.truetype(FONT_SB, 26), fill=(196, 208, 222))
d.rectangle([72, 250, 148, 254], fill=LIME)

dest = SITE / "assets" / "share.jpg"
card.save(dest, "JPEG", quality=88, optimize=True, progressive=True)
print(f"share.jpg  {W}x{H}  {dest.stat().st_size // 1024} KB")
