# EasyPak — where this stands

A one-screen renovation of **easypaksa.com** for EasyPak Trading Co., built the
way wetransfer.com works: one full-bleed photograph, one card carrying the whole
site, **the page never scrolls**. Static — no build step, no framework, no
dependency. Open `index.html`.

**Live:** <https://digitaldotdeveloper.github.io/easypak-site/>
**Repo:** `github.com/digitaldotdeveloper/easypak-site` (public, Pages from `main`, root)
**Local:** `C:\Users\it\Desktop\easypak-site`

This is a *preview* link. The client's live site is still the cPanel folder
`/public_html/easypaksa.com/` on the DDD GoDaddy account — see
`Desktop\digital dot developer hosting\`. Nothing has been deployed there.

---

## Run and check it

```
node tools/shot.js <prefix> <W> <H> <view> <wallIndex>   screenshot over CDP
LANG_AR=1 node tools/shot.js ...                         the Arabic mirror
LIVE_URL=https://... node tools/shot.js ...              the deployed page
```

Use this, never `chrome --headless --screenshot`, which crops. Deployed URLs are
cache-busted by the tool; see **The one rule** below for why that matters.

---

## The one rule that will bite you

**Bump `V` in `app.js` and the three `?v=` tokens in `index.html` on every
deploy.**

GitHub Pages serves everything with `Cache-Control: max-age=600` and none of the
filenames change. Without the bump, a browser that has already seen the site
keeps the old stylesheet and the old photographs for ten minutes or more — and
it does not look like a stale cache, it looks like the deploy silently failed.
This cost a whole round of "you still haven't removed the white background": the
fix had shipped, and was being verified through a cache-busted URL while the
person looking at it kept getting the old CSS.

---

## The images

Every photograph is rendered in **Gemini Studio**
(`Desktop\Gemini Prompt Sender\dashboard`, API on `127.0.0.1:4321`, token from
its Settings). `_gen/jobs.json` holds all the prompts behind shared *style
spines* — one studio spine the twelve catalogue shots share, and location spines
for the wallpapers. The shared spine is the whole reason the catalogue grid reads
as one shoot rather than twelve stock photos.

```
GS_TOKEN=... node _gen/gen.mjs [wave] [names]   render what is missing from _gen/out/
python _gen/ship.py [names]                     crop, resize, write assets/
python _gen/logo.py                             cut the wordmark off its white background
python _gen/share.py                            redraw the link-preview card
```

`gen.mjs` skips anything already in `_gen/out/`, so it doubles as the retry pass:
delete the frame you dislike, edit its prompt, re-run, re-ship. `_gen/out/` is
gitignored — the shipped JPEGs in `assets/` are what the repo carries.

**Gemini caps the long edge at 1024 px.** Asking for "2K, 2048x1365" or "4K,
2160x3840" in the prompt returns 1024 both times — measured, twice, do not
re-derive it. Aspect ratio *is* controllable that way; resolution is not. So the
only lever on quality is not wasting those pixels:

- **Products ship at native size, never resampled up.** The catalogue tile is
  ~190 px on desktop and ~165 px on a phone; 1024 is already several times what
  any screen asks for, and enlarging first only adds a generation of loss. They
  are cropped 3:2 because the tile crops to 16/11.
- **Only wallpapers are enlarged**, because they run full-bleed. Lanczos to
  1920x1080, then a two-radius unsharp — a tight pass for edge detail and a wide
  gentle one for local contrast. That second pass is what makes an enlargement
  read as sharp rather than merely hard.
- Gemini Studio is **shared with other sessions**. Jobs queue behind whatever
  else is running; a five-minute wait for one frame is normal, not a hang. A
  failure of "Could not find the Gemini composer box" is transient — re-run it.

If you ever need genuinely higher resolution than 1024: the Magnific/Freepik key
has been 401ing since 2026-08-07, and there is no local upscaler installed (no
torch, no Real-ESRGAN). It would need a new key or real photography.

### Two wallpaper sets, and why

`w1..w6.jpg` are 16:9 for landscape viewports. `w1-p..w6-p.jpg` are a natively
vertical cut of the same six scenes for phones. `app.js` puts both on the figure
as `--w` and `--w-p`; the stylesheet picks one, and **only the variable it picks
is ever fetched**, so a phone never downloads the landscape set.

This went wrong twice before it went right:

1. The 16:9 frame covering a 390x844 phone is cropped to a quarter of its width
   and enlarged nearly threefold. A photograph of a pallet became a photograph
   of roof beams.
2. The fix at the time was to lay the whole landscape frame into the visible band
   as a banner — correct *while the card was a fixed 620px sheet*, because the
   visible window was then only the top 224 px, and landscape-shaped.
3. The card became a **draggable sheet that rests closed**, so the window is tall
   again and the portrait cut is right after all.

**Measure the visible window before choosing a crop.** Both wrong turns came from
guessing it. Note also that a phone screenshot at DPR 2 is 780x1688 — halve those
numbers before reasoning about CSS pixels.

Landscape frames are composed subject-centre-right with the left third calm,
because the card sits left; the stylesheet mirrors them in RTL, where the card
moves right. Portrait frames are composed subject a third of the way down and are
**not** mirrored — the sheet is at the bottom, so there is nothing to move out of
the way of.

---

## The logo

`_gen/logo.py` takes the 1000x1000 `Desktop\EasyPak Logo.png` (RGB, no alpha,
mark on pure white with a faint 254-grey rectangle) and emits two files:

- `assets/logo.png` — **white knockout**, what the header uses over photography
- `assets/logo-dark.png` — brand colours, for light backgrounds

easypaksa.com ships the same pair (`02-groups-logos.png` is the knockout,
`03-groups-logos.png` the slate one). The knockout's colours here are sampled off
theirs; it is rebuilt from the 1000px original because theirs is 301px wide.

Three things in that script are load-bearing:

- Alpha is **distance-to-white, normalised so both brand colours reach opaque**.
  Plain colour-to-alpha — the obvious tool — leaves the green about 75% opaque
  and the slate 66%, and the mark goes milky over anything dark.
- The colour is **un-premultiplied** afterwards. Without it every antialiased
  edge keeps the white it was blended with, and the mark haloes on a photograph.
- `PAD = 0`, cropped tight. The header aligns the mark's left edge to the card,
  so transparent padding reads as an indent. The "E" and the "P" of PACKAGING
  MATERIALS share a left edge in the source, so one crop squares both.

There is **no white plate** behind it. `.brand img` carries a drop shadow instead.
If it ever needs one again, that is a CSS `background`, not the asset.

---

## The bottom sheet (phones)

The card is `position:fixed`, translated down by everything except `--sheet-h`, so
**`--sheet-h` is the height you can see**. It rests closed and snaps to
closed / half / full by drag, by flick, or by tapping the grip; reaching for a tab
or the dock opens it. `app.js` owns the three stops and writes `--sheet-full` back
to the element — reading them out of CSS is not an option, because a custom
property holding `dvh` comes back as the token `"92dvh"`, not a pixel length,
unless it is registered with `@property`.

Four traps, all already paid for:

- **Do not use pointer capture.** It is the textbook answer for keeping a drag
  alive once the finger leaves the element, but capturing **retargets the
  following click to the capturing element**, so tapping the grip stops working.
  Capturing lazily on first move does not save it either: the first move of an
  upward drag is already above the sheet's edge, so the sheet never receives it.
  `pointermove`/`pointerup` listen on the **window**.
- **The click after a drag must not also toggle.** The suppression flag is
  one-shot *and* cleared on the next press: Chrome suppresses the click itself
  after a long drag, and a sticky flag would then eat the following genuine tap.
- **The sheet needs a `z-index`.** The dock follows it in the DOM and its chips
  carry `backdrop-filter`, which puts each chip in the same paint layer as a
  positioned element — so they render on top of the sheet without it.
- Dragging from the body only grabs the sheet when the body is **scrolled to the
  top and the finger is going down**. Otherwise a downward swipe inside a list
  closes the sheet instead of scrolling it, which is the thing that makes a sheet
  feel broken.

Every one of those was found by driving the sheet over CDP with
`Input.dispatchMouseEvent` and reading `--sheet-h` back — not by looking at it.
Worth rebuilding that harness before touching the drag logic again.

---

## The link preview

`assets/share.jpg`, 1200x630, drawn by `_gen/share.py`: the mark, one line of what
the company sells, the three cities, over the container photograph — the frame
that survives being shrunk to a chat thumbnail.

The thing that actually stopped previews appearing was **a relative `og:image`**,
which every scraper drops. It is absolute now, with `og:url`, `canonical`,
`twitter:card`, image dimensions and alt text, plus `robots.txt` and `sitemap.xml`.

**Four absolute URLs in the head of `index.html` point at the Pages address.**
They, `robots.txt` and `sitemap.xml` all need changing if this moves to
easypaksa.com — otherwise previews keep pointing at the preview.

---

## Content

All copy, both languages, lives in `STR` at the top of `app.js`; the catalogue is
`PRODUCTS`, the wallpapers and their captions are `WALLS`. Nothing else needs
touching to add a product or change a sentence. The quote form composes a
prefilled WhatsApp message to +966 50 842 8883 — no backend.

The six wallpaper captions describe what is in each frame, in both languages, so
**re-render a wallpaper and check its caption still tells the truth.**

---

## Not done

- **Not deployed to easypaksa.com.** Doing so means the cPanel folder, and the
  absolute URLs above. Note the standing rule: no DNS, subdomain or registrar
  changes on any domain the user owns — so a `CNAME` to Pages is off the table;
  it would have to be a file copy into the web root.
- **Not listed on digitaldotdeveloper.com** as client work. That is a change to
  the main site and goes through
  `digitaldotdeveloper.com/ddd-static-deploy/deploy.js` with `push <files>` —
  never bare `deploy`, which re-uploads `.htaccess` and cascades into all four
  client sites.
- The wallpaper caption and dots are hidden on phones (`.meta{display:none}`), so
  there is no way to change the photograph there. Deliberate, not forgotten.
