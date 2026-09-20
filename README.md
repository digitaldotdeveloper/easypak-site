# EasyPak Trading Co. — website renovation

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
assets/logo.png   the EasyPak wordmark
```

All copy and both languages live in the `STR` object at the top of `app.js`; the catalogue
lives in `PRODUCTS` and the wallpapers in `WALLS`. Nothing else needs touching to add a
product or change a sentence.

## Deploying

The repository is static, so GitHub Pages serves it as-is from the default branch.
To put it on the real domain instead, drop the folder into the web root — or add a `CNAME`
file containing `easypaksa.com` and point the DNS at GitHub Pages.

## Credit

Photography, logo and company details belong to EasyPak Trading Co.
