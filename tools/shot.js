// Screenshot the EasyPak page through CDP at true device sizes.
//   node tools/shot.js <outPrefix> <W> <H> <view> <wallIndex>
//   LIVE_URL=https://... node tools/shot.js ...   shoots the deployed page instead
// Its own Chrome profile + port, so Gemini Studio's Chrome is untouched.
const { spawn } = require('child_process'), fs = require('fs'), path = require('path'), os = require('os');
const [out = '_shots/s', W = '1440', H = '810', VIEW = 'quote', WALL = '0'] = process.argv.slice(2);
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
                'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'].find(fs.existsSync);
const RUN = Date.now().toString(36);                   // fresh port + profile per run: a stale
const PORT = 9500 + (process.pid % 400);               // browser answers /json with dead targets
const PROFILE = path.join(os.tmpdir(), 'easypak-cdp-' + RUN);
const root = path.resolve(__dirname, '..');
const LIVE = process.env.LIVE_URL;
const base = LIVE || 'file:///' + path.join(root, 'index.html').split(String.fromCharCode(92)).join('/');
const url = base + '?cb=' + Date.now();                // deployed URLs are cached, always bust it
const sleep = ms => new Promise(r => setTimeout(r, ms));
setTimeout(() => { console.error('watchdog: giving up'); process.exit(1); }, 120e3).unref();

(async () => {
  const ch = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE}`, '--hide-scrollbars', '--allow-file-access-from-files',
    '--force-device-scale-factor=1', 'about:blank'], { stdio: 'ignore' });
  let targets;
  for (let i = 0; i < 60 && !targets; i++) {
    await sleep(250);
    try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json(); } catch {}
  }
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let n = 0; const pending = {};
  ws.onmessage = e => { const m = JSON.parse(e.data); if (pending[m.id]) { pending[m.id](m.result || m.error); delete pending[m.id]; } };
  const send = (method, params = {}) => new Promise(r => { pending[++n] = r; ws.send(JSON.stringify({ id: n, method, params })); });
  const evaluate = expression => send('Runtime.evaluate', { expression, awaitPromise: true });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride',
    { width: +W, height: +H, deviceScaleFactor: +W < 700 ? 2 : 1, mobile: +W < 700 });
  await send('Page.navigate', { url });
  await sleep(3000);                                   // fonts, the wallpaper, the first render

  if (process.env.LANG_AR) {                          // the card mirrors to the right in Arabic
    await evaluate(`document.getElementById('langBtn').click()`);
    await sleep(900);
  }
  if (+WALL > 0) { await evaluate(`showWall(${+WALL})`); await sleep(1900); }
  if (VIEW !== 'quote') { await evaluate(`go('${VIEW}')`); await sleep(900); }
  await evaluate(`document.querySelectorAll('.wall figure.on').forEach(f=>f.style.animation='none')`);
  await sleep(300);

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const f = path.join(root, `${out}-${VIEW}-${W}.png`);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, Buffer.from(shot.data, 'base64'));
  console.log('saved', path.relative(root, f));

  ws.close(); ch.kill();            // Browser.close never answers, so do not await it
  try { fs.rmSync(PROFILE, { recursive: true, force: true }); } catch {}
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
