# EasyPak Trading Co. — website renovation

**Live preview: <https://digitaldotdeveloper.github.io/easypak-site/>**

A one-screen redesign of [easypaksa.com](https://easypaksa.com), built the way
[wetransfer.com](https://wetransfer.com) works: a full-bleed photograph behind a single
floating card that carries the whole site. **The page never scrolls.**

Open `index.html` — there is no build step, no framework and no dependency to install.

## The idea

WeTransfer gives the visitor one job (send a file) and puts everything else out of the way.
EasyPak's equivalent job is *get a price*, so that is what the card does by default. Everything
else — catalogue, about, contact, FAQ — swaps into the same card instead of adding a page.

- **Full-screen photography.** Six of EasyPak's own product and warehouse shots, slow
  crossfade with a gentle ken-burns drift, captioned bottom-right. Arrow keys or the dots
  change the image.
- **One card, five views.** `Get a quote` and `Catalogue` sit on tabs; `Products`, `About`,
  `Contact` and `FAQ` open from the dock bottom-left. The card widens for the catalogue and
  narrows again on the way back.
- **The quote form goes to WhatsApp.** Product, quantity, city, name and phone are composed
  into a prefilled message to +966 50 842 8883 — the channel Saudi buyers actually reply on,
  and no backend to host. Email is offered underneath as the fallback.
- **Bilingual EN / AR** with a full RTL mirror, including the wallpaper's light direction.
  The choice is remembered in `localStorage`.
- **Mobile.** The card becomes a bottom sheet over the photograph; the page still does not scroll.

## Files

```
index.html        markup, meta, JSON-LD, the crawler-visible copy
styles.css        the whole design system (colours sampled from the EasyPak logo)
app.js            content, both languages, view rendering, wallpaper engine
assets/wall/      six wallpapers
assets/products/  twelve catalogue images
assets/logo.png   the wordmark, white knockout on transparent (for photography)
assets/logo-dark.png  the same mark in brand colours, for light backgrounds
_gen/             the image recipe (prompts + the script that renders them)
tools/shot.js     CDP screenshots at true device sizes
```

All copy and both languages live in the `STR` object at the top of `app.js`; the catalogue
lives in `PRODUCTS` and the wallpapers in `WALLS`. Nothing else needs touching to add a
product or change a sentence.

## The images

Every photograph on the page is rendered in the in-house Gemini Studio, from the eighteen
prompts in `_gen/jobs.json`. They sit behind three shared style spines — one studio spine the
twelve catalogue shots share so the set reads as one shoot, and two location spines for the
wallpapers — which is the whole reason the catalogue grid looks even.

```
GS_TOKEN=… node _gen/gen.mjs         render anything missing from _gen/out/
python _gen/ship.py [name,name]      crop, resize and write assets/
python _gen/logo.py                  cut the wordmark off its white background
```

`gen.mjs` skips whatever is already in `_gen/out/`, so it doubles as the retry pass: delete
the one frame you dislike, re-run, re-ship.

**Gemini caps the long edge at 1024 px.** Asking for 2K or 4K in the prompt changes nothing
— it was measured both ways — so the only lever on quality is to stop wasting those pixels.
Products therefore ship at their native size and are never resampled up: the catalogue tile
is about 190 px on desktop and 165 px on a phone, so 1024 is already several times what any
screen asks for. Only the wallpapers are enlarged, because they run full-bleed, and they get
Lanczos plus a two-radius unsharp — a tight pass for edge detail and a wide gentle one for
the local contrast that makes an enlargement read as sharp rather than merely hard.

The same arithmetic is why the phone layout changed. The card is a 620 px sheet pinned to
the bottom, so only the top 224 px of the wallpaper is ever visible — and that window is
landscape. Covering the full 390 × 844 element cropped the 16:9 frame to a quarter of its
width and enlarged it almost threefold, which is how a photograph of a pallet became a
photograph of roof beams. On a phone the frame is now laid into that band whole.

## Deploying

The repository is static, so GitHub Pages serves it as-is from `main` — that is what
<https://digitaldotdeveloper.github.io/easypak-site/> is. To put it on the real domain
instead, drop the folder into the web root — or add a `CNAME` file containing
`easypaksa.com` and point the DNS at GitHub Pages.

## Credit

Photography, logo and company details belong to EasyPak Trading Co.
