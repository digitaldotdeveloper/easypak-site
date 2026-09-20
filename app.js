/* ============================================================
   EasyPak Trading Co. — single-screen site
   No framework, no build step. Everything renders into one card.
   ============================================================ */

const PHONE_INTL = '+966508428883';
const PHONE_WA   = '966508428883';
const EMAIL      = 'info@easypaksa.com';

/* ── wallpapers ─────────────────────────────────────────── */

const WALLS = [
  { src:'assets/wall/w1.jpg', srcP:'assets/wall/w1-p.jpg', en:'Polypropylene strapping, palletised and ready to move.',      ar:'شرائط بولي بروبيلين معبّأة على منصات وجاهزة للشحن.' },
  { src:'assets/wall/w4.jpg', srcP:'assets/wall/w4-p.jpg', en:'Steel-strapped pipe bundles, loaded for export.',             ar:'حزم أنابيب مربوطة بشرائط حديدية وجاهزة للتصدير.' },
  { src:'assets/wall/w2.jpg', srcP:'assets/wall/w2-p.jpg', en:'PET coils staged for a Riyadh dispatch run.',                 ar:'لفات PET جاهزة لرحلة توزيع في الرياض.' },
  { src:'assets/wall/w5.jpg', srcP:'assets/wall/w5-p.jpg', en:'Bundled pipe — the load that strapping is judged on.',        ar:'أنابيب مجمّعة — الحمولة التي تُختبر عليها جودة الشريط.' },
  { src:'assets/wall/w3.jpg', srcP:'assets/wall/w3-p.jpg', en:'Machine-grade PP coils on a stretch-wrapped pallet.',         ar:'لفات PP لماكينات الربط على منصة ملفوفة بالستريتش.' },
  { src:'assets/wall/w6.jpg', srcP:'assets/wall/w6-p.jpg', en:'Green PET strapping, racked at the Dammam branch.',           ar:'شرائط PET خضراء على رفوف فرع الدمام.' }
];

/* ── catalogue ──────────────────────────────────────────── */

const PRODUCTS = [
  { id:'pp',        img:'pp',        en:['PP Strapping','Polypropylene · 5–19 mm'],        ar:['شرائط بولي بروبيلين','PP · 5–19 مم'] },
  { id:'pet',       img:'pet',       en:['PET Strapping','Polyester · 9–32 mm'],           ar:['شرائط بوليستر PET','PET · 9–32 مم'] },
  { id:'steel',     img:'steel',     en:['Steel Strapping','Regular & high tensile'],      ar:['شرائط حديدية','عادية وعالية الشد'] },
  { id:'cord',      img:'cord',      en:['Cord Strapping','Woven & composite'],            ar:['شرائط كورد','منسوجة ومركّبة'] },
  { id:'film',      img:'film',      en:['Stretch Film','Hand & machine · 12–23 µ'],       ar:['ستريتش فيلم','يدوي وآلي · 12–23 ميكرون'] },
  { id:'tape',      img:'tape',      en:['Adhesive Tapes','BOPP, printed & masking'],      ar:['شرائط لاصقة','BOPP ومطبوعة ولاصق ورقي'] },
  { id:'bubble',    img:'bubble',    en:['Bubble Wrap','10 mm & 20 mm bubbles'],           ar:['بابل راب','فقاعات 10 و20 مم'] },
  { id:'foam',      img:'foam',      en:['Foam Wrap (EPE)','Sheets & rolls, 1–5 mm'],      ar:['فوم EPE','ألواح ولفات 1–5 مم'] },
  { id:'carton',    img:'carton',    en:['Corrugated Board','Rolls, sheets & boxes'],      ar:['كرتون مموج','لفات وألواح وصناديق'] },
  { id:'seals',     img:'seals',     en:['Seals & Buckles','Metal seals, wire buckles'],   ar:['أقفال وإبزيم','أقفال معدنية وإبزيم سلكي'] },
  { id:'tools',     img:'tools',     en:['Strapping Tools','Manual, pneumatic, battery'],  ar:['عدّات الربط','يدوية وهوائية وبالبطارية'] },
  { id:'dispenser', img:'dispenser', en:['Dispensers & Trolleys','Mobile line-side units'],ar:['حاملات وعربات','وحدات متنقلة بجانب الخط'] }
];

/* ── strings ────────────────────────────────────────────── */

const STR = {
  en:{
    langBtn:'العربية',
    tabQuote:'Get a quote', tabCat:'Catalogue',
    navProducts:'Products', navAbout:'About', navContact:'Contact', navFaq:'FAQ',
    back:'Back',

    qEyebrow:'Riyadh · Dammam · Jeddah',
    qTitle:'Packaging materials, priced in one message.',
    qLead:'Tell us what you need to secure. We come back with a price — and in most cases it ships the same day.',
    fProduct:'What do you need', fProductAny:'Not sure yet — advise me',
    fQty:'Quantity', fQtyPh:'e.g. 40 rolls / 2 tons',
    fCity:'City', fName:'Name or company', fNamePh:'e.g. Al-Faisal Steel',
    fPhone:'Phone', fPhonePh:'05X XXX XXXX',
    send:'Send on WhatsApp',
    orEmail:'or email us at',
    cities:['Riyadh','Dammam','Jeddah','Other city in KSA'],
    statA:['800+','Clients served'], statB:['80','Warehouses supplied'], statC:['Same day','Delivery in-city'],

    catTitle:'What we supply',
    catLead:'Twelve lines, held in stock across three cities. Tap any item to price it.',
    page:'Page', of:'of',

    aboutTitle:'The people behind the strap.',
    aboutP:'EasyPak Trading Co. supplies high-quality packaging materials to businesses across Saudi Arabia. From branches in Riyadh, Dammam and Jeddah we serve manufacturing, logistics, retail and e-commerce — with stock held locally so an urgent line does not wait on an import.',
    visionH:'Our vision',
    visionP:'To be the most trusted partner for packaging materials in Saudi Arabia — delivering quality, value and unparalleled customer service.',
    valsH:'What we hold ourselves to',
    vals:[
      ['Quality','materials that hold the load, every load.'],
      ['Customer focus','the right spec for your line, not the easiest sale.'],
      ['Innovation','newer, lighter, more sustainable options as they arrive.'],
      ['Integrity','transparent pricing and relationships built on trust.']
    ],

    contactTitle:'Talk to us.',
    contactLead:'Sunday to Thursday, 8:00 – 18:00 AST.',
    cWhats:['WhatsApp','Fastest reply — send a photo of your load'],
    cCall:['Call us','Sales & orders'],
    cMail:['Email',EMAIL],
    cBranch:['Branches','Riyadh · Dammam · Jeddah'],
    followH:'Follow EasyPak',

    faqTitle:'Questions we get every week.',
    faq:[
      ['How fast can you deliver?','Stock lines ordered before noon are delivered the same day inside Riyadh, Dammam and Jeddah. Other cities in the Kingdom are typically next-day.'],
      ['Is there a minimum order?','No minimum on standard stock items. For custom widths, colours or printed tape we work to a production minimum and will tell you upfront.'],
      ['Can I get samples first?','Yes. We will send a sample of the strap or film so you can run it on your own machine before committing to a pallet.'],
      ['Which strap suits my load?','Send us a photo and the weight. Steel for heavy metal and pipe, PET where you want steel-like tension without the sharp edges, PP for cartons and light bundles, cord for sharp or marine loads.'],
      ['Do you issue tax invoices?','Every order ships with a compliant Saudi VAT invoice, and we can supply it in Arabic and English.']
    ],

    waIntro:'Hello EasyPak, I would like a quote.',
    waProduct:'Product', waQty:'Quantity', waCity:'City', waName:'Name', waPhone:'Phone',
    errName:'Please add a name we can address.',
    errPhone:'Please add a phone number.'
  },

  ar:{
    langBtn:'English',
    tabQuote:'اطلب عرض سعر', tabCat:'المنتجات',
    navProducts:'المنتجات', navAbout:'من نحن', navContact:'تواصل معنا', navFaq:'أسئلة شائعة',
    back:'رجوع',

    qEyebrow:'الرياض · الدمام · جدة',
    qTitle:'مواد تغليف، وسعرها في رسالة واحدة.',
    qLead:'أخبرنا بما تريد تأمينه، ونرسل لك السعر — وفي أغلب الحالات يُشحن في نفس اليوم.',
    fProduct:'ما الذي تحتاجه', fProductAny:'لست متأكداً — أريد استشارة',
    fQty:'الكمية', fQtyPh:'مثال: 40 لفة / طنان',
    fCity:'المدينة', fName:'الاسم أو الشركة', fNamePh:'مثال: الفيصل للحديد',
    fPhone:'رقم الجوال', fPhonePh:'05X XXX XXXX',
    send:'أرسل عبر واتساب',
    orEmail:'أو راسلنا على',
    cities:['الرياض','الدمام','جدة','مدينة أخرى في المملكة'],
    statA:['+800','عميل نخدمه'], statB:['80','مستودعاً نزوّده'], statC:['نفس اليوم','توصيل داخل المدينة'],

    catTitle:'ما الذي نوفّره',
    catLead:'اثنا عشر صنفاً متوفرة في المخزون في ثلاث مدن. اضغط أي صنف لطلب سعره.',
    page:'صفحة', of:'من',

    aboutTitle:'من يقف خلف كل شريط.',
    aboutP:'شركة إيزي باك التجارية تورّد مواد تغليف عالية الجودة للشركات في أنحاء المملكة العربية السعودية. من فروعنا في الرياض والدمام وجدة نخدم قطاعات التصنيع والخدمات اللوجستية والتجزئة والتجارة الإلكترونية — بمخزون محلي حتى لا ينتظر خط الإنتاج وصول شحنة مستوردة.',
    visionH:'رؤيتنا',
    visionP:'أن نكون الشريك الأكثر ثقة لمواد التغليف في المملكة — بجودة وقيمة وخدمة عملاء لا تُضاهى.',
    valsH:'ما نلتزم به',
    vals:[
      ['الجودة','مواد تتحمّل الحمولة، في كل مرة.'],
      ['العميل أولاً','المواصفة الصحيحة لخطك، لا أسهل عملية بيع.'],
      ['الابتكار','خيارات أحدث وأخف وأكثر استدامة فور توفرها.'],
      ['النزاهة','أسعار واضحة وعلاقات مبنية على الثقة.']
    ],

    contactTitle:'تواصل معنا.',
    contactLead:'من الأحد إلى الخميس، 8:00 – 18:00 بتوقيت السعودية.',
    cWhats:['واتساب','أسرع رد — أرسل صورة للحمولة'],
    cCall:['اتصل بنا','المبيعات والطلبات'],
    cMail:['البريد الإلكتروني',EMAIL],
    cBranch:['الفروع','الرياض · الدمام · جدة'],
    followH:'تابع إيزي باك',

    faqTitle:'أسئلة تصلنا كل أسبوع.',
    faq:[
      ['كم تستغرق مدة التوصيل؟','الأصناف المتوفرة في المخزون والمطلوبة قبل الظهر تُسلَّم في نفس اليوم داخل الرياض والدمام وجدة. أما بقية مدن المملكة فعادةً في اليوم التالي.'],
      ['هل هناك حد أدنى للطلب؟','لا يوجد حد أدنى للأصناف القياسية. أما العروض والألوان الخاصة أو الشريط اللاصق المطبوع فلها حد أدنى للإنتاج نوضحه لك مسبقاً.'],
      ['هل يمكنني الحصول على عينات؟','نعم. نرسل لك عينة من الشريط أو الفيلم لتجربتها على ماكينتك قبل طلب كمية كاملة.'],
      ['أي نوع شريط يناسب حمولتي؟','أرسل لنا صورة والوزن. الحديد للمعادن والأنابيب الثقيلة، وPET حين تريد شدّاً قريباً من الحديد دون حوافه الحادة، وPP للكراتين والحزم الخفيفة، والكورد للحمولات الحادة أو البحرية.'],
      ['هل تصدرون فواتير ضريبية؟','كل طلب يُشحن بفاتورة ضريبية سعودية مطابقة، ويمكننا إصدارها بالعربية والإنجليزية.']
    ],

    waIntro:'مرحباً إيزي باك، أرغب في عرض سعر.',
    waProduct:'المنتج', waQty:'الكمية', waCity:'المدينة', waName:'الاسم', waPhone:'الجوال',
    errName:'رجاءً اكتب اسماً نخاطبك به.',
    errPhone:'رجاءً اكتب رقم جوال.'
  }
};

/* ── icons ──────────────────────────────────────────────── */

const ICON = {
  check:'<svg viewBox="0 0 24 24" width="12" height="12"><path fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7"/></svg>',
  wa:'<svg viewBox="0 0 24 24" width="19" height="19"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.6 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.3-5-4.5-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.3.3c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.9-1c.2-.2.3-.2.6-.1l2 .9c.2.1.4.2.4.3.1.1.1.7-.1 1.4l.3-.3Z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm8 7 8-5H4l8 5Zm0 2.3L4 8.3V18h16V8.3l-8 5Z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
  fb:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 3.8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Zm7.6-10.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"/></svg>',
  li:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6.9 8.4H3.6V21h3.3V8.4ZM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM21 14.2c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.4H9.9c0 .9 0 12.6 0 12.6h3.3v-7c0-.3 0-.6.1-.8.3-.6.8-1.3 1.8-1.3 1.3 0 1.8 1 1.8 2.4V21H21v-6.8Z"/></svg>',
  x:'<svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6 18 18M18 6 6 18"/></svg>'
};

/* ── state ──────────────────────────────────────────────── */

let lang = (localStorage.getItem('ep_lang') || (navigator.language || '').slice(0,2)) === 'ar' ? 'ar' : 'en';
let view = 'quote';
let catPage = 0;
let wallIx = 0;
let wallTimer = null;
const form = { product:'', qty:'', city:0, name:'', phone:'' };

const $  = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const T  = () => STR[lang];

/* GitHub Pages serves everything with max-age=600 and the filenames never
   change, so a browser that has seen the site keeps the old stylesheet and the
   old photographs for ten minutes or more - long enough to look like a deploy
   that did not work. Bump V on every deploy; index.html carries the same token
   on styles.css, app.js and the logo. */
const V = '7';
const v = url => `${url}?v=${V}`;

/* ── wallpaper engine ───────────────────────────────────── */

function buildWall(){
  const wall = $('#wall');
  wall.innerHTML = WALLS.map(() => '<figure></figure>').join('');
  $('#wallDots').innerHTML = WALLS.map(() => '<i></i>').join('');
  showWall(0);
}

// Attached one slide ahead rather than all six up front: six full-bleed
// photographs is a slow first screen on a phone, and five of them are not on it
// yet. The figure takes its image from --w so the stylesheet can lay the same
// frame out differently on a phone without app.js knowing about it.
function paintWall(i){
  const fig = $('#wall').children[i];
  if (!fig || fig.dataset.painted) return;
  fig.dataset.painted = '1';
  fig.style.setProperty('--w',   `url('${v(WALLS[i].src)}')`);
  fig.style.setProperty('--w-p', `url('${v(WALLS[i].srcP)}')`);
}

function showWall(i){
  wallIx = (i + WALLS.length) % WALLS.length;
  paintWall(wallIx);
  paintWall((wallIx + 1) % WALLS.length);
  const figs = $('#wall').children;
  for (let k = 0; k < figs.length; k++) figs[k].classList.toggle('on', k === wallIx);
  const dots = $('#wallDots').children;
  for (let k = 0; k < dots.length; k++) dots[k].classList.toggle('on', k === wallIx);
  $('#wallCap').textContent = WALLS[wallIx][lang];
  clearTimeout(wallTimer);
  wallTimer = setTimeout(() => showWall(wallIx + 1), 9000);
}

/* ── chrome (header, dock) ──────────────────────────────── */

const DOCK = [
  { id:'catalogue', key:'navProducts' },
  { id:'about',     key:'navAbout' },
  { id:'contact',   key:'navContact' },
  { id:'faq',       key:'navFaq' }
];

function renderChrome(){
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  $('#langLabel').textContent = T().langBtn;
  $('#dock').innerHTML = DOCK.map(d =>
    `<button type="button" data-go="${d.id}" aria-current="${view === d.id}">${esc(T()[d.key])}</button>`
  ).join('');
  $('#wallCap').textContent = WALLS[wallIx][lang];
  document.title = lang === 'ar'
    ? 'شركة إيزي باك التجارية — مواد التغليف في السعودية'
    : 'EasyPak Trading Co. — Packaging Materials in Saudi Arabia';
}

/* ── views ──────────────────────────────────────────────── */

function tabsHead(){
  return `<div class="panel-head">
    <button class="tab" type="button" data-go="quote"     aria-selected="${view === 'quote'}">${esc(T().tabQuote)}</button>
    <button class="tab" type="button" data-go="catalogue" aria-selected="${view === 'catalogue'}">${esc(T().tabCat)}</button>
  </div>`;
}

function backHead(title){
  return `<div class="panel-head head-plain">
    <span class="head-title">${esc(title)}</span>
    <button class="sq" type="button" data-go="quote" aria-label="${esc(T().back)}">${ICON.x}</button>
  </div>`;
}

function viewQuote(){
  const t = T();
  const opts = [`<option value="">${esc(t.fProductAny)}</option>`]
    .concat(PRODUCTS.map(p => `<option value="${p.id}"${form.product === p.id ? ' selected' : ''}>${esc(p[lang][0])}</option>`)).join('');
  const cities = t.cities.map((c,i) => `<option value="${i}"${form.city === i ? ' selected' : ''}>${esc(c)}</option>`).join('');

  return tabsHead() + `<div class="panel-body"><div class="view">
    <p class="eyebrow">${esc(t.qEyebrow)}</p>
    <h1 class="h1">${esc(t.qTitle)}</h1>
    <p class="lead">${esc(t.qLead)}</p>

    <form id="quoteForm" novalidate>
      <div class="field">
        <label for="f-product">${esc(t.fProduct)}</label>
        <select id="f-product" name="product">${opts}</select>
      </div>
      <div class="row2">
        <div class="field">
          <label for="f-qty">${esc(t.fQty)}</label>
          <input id="f-qty" name="qty" type="text" placeholder="${esc(t.fQtyPh)}" value="${esc(form.qty)}">
        </div>
        <div class="field">
          <label for="f-city">${esc(t.fCity)}</label>
          <select id="f-city" name="city">${cities}</select>
        </div>
      </div>
      <div class="field">
        <label for="f-name">${esc(t.fName)}</label>
        <input id="f-name" name="name" type="text" placeholder="${esc(t.fNamePh)}" value="${esc(form.name)}">
      </div>
      <div class="field">
        <label for="f-phone">${esc(t.fPhone)}</label>
        <input id="f-phone" name="phone" type="tel" dir="ltr" placeholder="${esc(t.fPhonePh)}" value="${esc(form.phone)}">
      </div>
      <button class="btn" type="submit">${ICON.wa}<span>${esc(t.send)}</span></button>
      <p class="or">${esc(t.orEmail)} <a href="mailto:${EMAIL}">${EMAIL}</a></p>
    </form>

    <div class="stats">
      <div class="stat"><b>${esc(t.statA[0])}</b><span>${esc(t.statA[1])}</span></div>
      <div class="stat"><b>${esc(t.statB[0])}</b><span>${esc(t.statB[1])}</span></div>
      <div class="stat"><b>${esc(t.statC[0])}</b><span>${esc(t.statC[1])}</span></div>
    </div>
  </div></div>`;
}

function viewCatalogue(){
  const t = T(), per = 6, pages = Math.ceil(PRODUCTS.length / per);
  const slice = PRODUCTS.slice(catPage * per, catPage * per + per);

  return tabsHead() + `<div class="panel-body"><div class="view">
    <h1 class="h1">${esc(t.catTitle)}</h1>
    <p class="lead">${esc(t.catLead)}</p>
    <div class="grid">
      ${slice.map(p => `<button class="tile" type="button" data-pick="${p.id}">
        <span class="tile-img" style="background-image:url('${v(`assets/products/${p.img}.jpg`)}')"></span>
        <span class="tile-txt"><b>${esc(p[lang][0])}</b><span>${esc(p[lang][1])}</span></span>
      </button>`).join('')}
    </div>
    <div class="pager">
      <p class="small">${esc(t.page)} ${catPage + 1} ${esc(t.of)} ${pages}</p>
      <div class="pager-btns">
        <button class="sq" type="button" data-page="-1" ${catPage === 0 ? 'disabled' : ''} aria-label="Previous">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m15 5-7 7 7 7"/></svg></button>
        <button class="sq" type="button" data-page="1" ${catPage >= pages - 1 ? 'disabled' : ''} aria-label="Next">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/></svg></button>
      </div>
    </div>
  </div></div>`;
}

function viewAbout(){
  const t = T();
  return backHead(t.navAbout) + `<div class="panel-body"><div class="view">
    <h1 class="h1">${esc(t.aboutTitle)}</h1>
    <p class="lead">${esc(t.aboutP)}</p>
    <h2 class="h2">${esc(t.visionH)}</h2>
    <p class="lead">${esc(t.visionP)}</p>
    <h2 class="h2">${esc(t.valsH)}</h2>
    <ul class="vals">
      ${t.vals.map(v => `<li><span class="tick">${ICON.check}</span><span><b>${esc(v[0])}</b> — ${esc(v[1])}</span></li>`).join('')}
    </ul>
  </div></div>`;
}

function viewContact(){
  const t = T();
  const row = (href, icon, title, sub, ltr) =>
    `<a class="crow" href="${href}" target="_blank" rel="noopener">
       <span class="ic">${icon}</span>
       <span><b${ltr ? ' dir="ltr"' : ''}>${esc(title)}</b><span>${esc(sub)}</span></span>
     </a>`;

  return backHead(t.navContact) + `<div class="panel-body"><div class="view">
    <h1 class="h1">${esc(t.contactTitle)}</h1>
    <p class="lead">${esc(t.contactLead)}</p>
    <div class="contact-rows">
      ${row(`https://wa.me/${PHONE_WA}`, ICON.wa, t.cWhats[0], t.cWhats[1])}
      ${row(`tel:${PHONE_INTL}`, ICON.phone, '+966 50 842 8883', t.cCall[1], true)}
      ${row(`mailto:${EMAIL}`, ICON.mail, EMAIL, t.cMail[0], true)}
      <div class="crow"><span class="ic">${ICON.pin}</span><span><b>${esc(t.cBranch[1])}</b><span>${esc(t.cBranch[0])}</span></span></div>
    </div>
    <h2 class="h2">${esc(t.followH)}</h2>
    <div class="socials">
      <a href="https://www.facebook.com/people/Easypak/61556594545079/" target="_blank" rel="noopener" aria-label="Facebook">${ICON.fb}</a>
      <a href="https://www.instagram.com/easypak_sa/" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
      <a href="https://www.linkedin.com/company/easypaksa/" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.li}</a>
    </div>
  </div></div>`;
}

function viewFaq(){
  const t = T();
  return backHead(t.navFaq) + `<div class="panel-body"><div class="view">
    <h1 class="h1">${esc(t.faqTitle)}</h1>
    <div class="faq">
      ${t.faq.map((f,i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join('')}
    </div>
  </div></div>`;
}

const VIEWS = { quote:viewQuote, catalogue:viewCatalogue, about:viewAbout, contact:viewContact, faq:viewFaq };

function render(){
  $('#panelInner').innerHTML = VIEWS[view]();
  $('.stage').classList.toggle('wide', view === 'catalogue');
  renderChrome();
}

function go(next){
  sheet.open();               // tapping a tab or the dock is a request to see it
  if (next === view) return;
  view = next;
  render();
}

/* ── quote → WhatsApp ───────────────────────────────────── */

function captureForm(){
  const f = $('#quoteForm');
  if (!f) return;
  form.product = f.product.value;
  form.qty     = f.qty.value.trim();
  form.city    = Number(f.city.value);
  form.name    = f.name.value.trim();
  form.phone   = f.phone.value.trim();
}

function submitQuote(e){
  e.preventDefault();
  captureForm();
  const t = T();

  if (!form.name)  { flag('#f-name',  t.errName);  return; }
  if (!form.phone) { flag('#f-phone', t.errPhone); return; }

  const product = form.product
    ? PRODUCTS.find(p => p.id === form.product)[lang][0]
    : t.fProductAny;

  const lines = [
    t.waIntro, '',
    `${t.waProduct}: ${product}`,
    form.qty ? `${t.waQty}: ${form.qty}` : null,
    `${t.waCity}: ${t.cities[form.city]}`,
    `${t.waName}: ${form.name}`,
    `${t.waPhone}: ${form.phone}`
  ].filter(Boolean);

  window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
}

function flag(sel, msg){
  const el = $(sel);
  el.focus();
  el.style.borderColor = '#e0604f';
  el.style.boxShadow = '0 0 0 4px rgba(224,96,79,.18)';
  el.setAttribute('placeholder', msg);
  el.addEventListener('input', () => { el.style.borderColor = ''; el.style.boxShadow = ''; }, { once:true });
}

/* ── wiring ─────────────────────────────────────────────── */

document.addEventListener('click', e => {
  const goBtn = e.target.closest('[data-go]');
  if (goBtn){ e.preventDefault(); if (view === 'quote') captureForm(); go(goBtn.dataset.go); return; }

  const pick = e.target.closest('[data-pick]');
  if (pick){ form.product = pick.dataset.pick; go('quote'); return; }

  const page = e.target.closest('[data-page]');
  if (page){
    const last = Math.ceil(PRODUCTS.length / 6) - 1;
    catPage = Math.max(0, Math.min(last, catPage + Number(page.dataset.page)));
    render();
    return;
  }
});

$('#panelInner').addEventListener('submit', e => { if (e.target.id === 'quoteForm') submitQuote(e); });

/* ── the bottom sheet (phones only) ─────────────────────── */
/*
   On a phone the card is a sheet you drag. It rests closed so the photograph
   has the screen, and snaps to one of three heights. The stylesheet owns the
   numbers - JS reads them back off the element rather than keeping its own
   copy, so there is one place to change them.

   Dragging starts on the grip and the tab row, and also on the body, but only
   when the body is scrolled to the top and the finger is going down: otherwise
   a downward swipe inside a scrolled list would close the sheet instead of
   scrolling it, which is the thing that makes a sheet feel broken.
*/
const sheet = (() => {
  const panel = $('#panel'), grip = $('#grip');
  const isPhone = () => matchMedia('(max-width:900px)').matches;

  // JS owns the three heights and writes --sheet-full back to the element, so
  // the stylesheet and this agree by construction. Reading them out of CSS is
  // not an option: a custom property holding dvh comes back as the token
  // "92dvh", not a pixel length, unless it is registered with @property.
  function stops(){
    const head = panel.querySelector('.panel-head');
    const peek = Math.round(grip.offsetHeight + (head ? head.offsetHeight : 52) + 36);
    const full = Math.round(Math.min(innerHeight * 0.92, 720));
    return [Math.min(peek, full), Math.round(Math.min(innerHeight * 0.54, full)), full];
  }

  let height = null, drag = null;
  // A drag that ends on the grip must not also toggle it. One-shot, and cleared
  // on the next press too: Chrome suppresses the click after a long drag, and
  // without that the flag would survive and eat the following tap.
  let moved = 0, swallowClick = false;

  function set(h, animate){
    const [peek, , full] = stops();
    height = Math.max(peek, Math.min(full, h));
    panel.classList.toggle('dragging', !animate);
    panel.style.setProperty('--sheet-full', full + 'px');
    panel.style.setProperty('--sheet-h', height + 'px');
    const open = height > peek + 4;
    grip.setAttribute('aria-expanded', String(open));
    grip.querySelector('.sr').textContent = open ? 'Collapse' : 'Expand';
  }

  function snap(velocity){
    const list = stops();
    // a flick beats proximity: past 0.45 px/ms, go the way the thumb was going
    let target = list.reduce((a, b) => Math.abs(b - height) < Math.abs(a - height) ? b : a);
    if (Math.abs(velocity) > 0.45){
      const ordered = velocity > 0 ? list : [...list].reverse();
      target = ordered.find(s => velocity > 0 ? s > height + 1 : s < height - 1) ?? target;
    }
    set(target, true);
  }

  function reset(){ if (isPhone()) set(stops()[0], false); }
  function open(){ if (isPhone()) set(stops()[2], true); }
  function toggle(){ const [peek, , full] = stops(); set(height > peek + 4 ? peek : full, true); }

  function start(e, fromBody){
    if (!isPhone()) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (height === null) reset();
    drag = { y: e.clientY, h: height, t: performance.now(), lastY: e.clientY, v: 0,
             fromBody, id: e.pointerId };
  }

  panel.addEventListener('pointerdown', e => {
    moved = 0; swallowClick = false;
    if (e.target.closest('.grip, .panel-head')) start(e, false);
    else {
      const body = e.target.closest('.panel-body');
      if (body && body.scrollTop <= 0) start(e, true);
    }
  });

  /* The move and release listeners live on the window, not on the sheet.
     Pointer capture is the usual answer, but capturing retargets the following
     click to the capturing element, which kills tapping the grip - and
     capturing lazily on first move does not work either, because the first move
     of an upward drag is already above the sheet's edge, so the sheet never
     sees it. Listening on the window sidesteps both. */
  addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dy = e.clientY - drag.y;
    // from the body only a downward pull grabs the sheet; upward keeps scrolling,
    // otherwise a swipe inside a list would close the sheet under the finger
    if (drag.fromBody && dy < 0){ drag = null; return; }
    moved = Math.max(moved, Math.abs(dy));
    const now = performance.now();
    if (now > drag.t) drag.v = (drag.lastY - e.clientY) / (now - drag.t);
    drag.t = now; drag.lastY = e.clientY;
    set(drag.h - dy, false);
  }, { passive: true });

  for (const ev of ['pointerup', 'pointercancel']){
    addEventListener(ev, e => {
      if (!drag || e.pointerId !== drag.id) return;
      const v = drag.v;
      drag = null;
      swallowClick = moved > 8;
      snap(v);
    });
  }

  grip.addEventListener('click', e => {
    e.preventDefault();
    if (swallowClick){ swallowClick = false; return; }
    toggle();
  });
  addEventListener('resize', () => { if (isPhone() && height !== null) set(height, false); });
  matchMedia('(max-width:900px)').addEventListener('change', ev => {
    if (ev.matches) reset();
    else { panel.style.removeProperty('--sheet-h'); panel.style.removeProperty('--sheet-full'); height = null; }
  });

  return { open, toggle, reset, isPhone };
})();

$('#langBtn').addEventListener('click', () => {
  if (view === 'quote') captureForm();
  lang = lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('ep_lang', lang);
  render();
});

$('#wallNext').addEventListener('click', () => showWall(wallIx + 1));
$('#wallDots').addEventListener('click', e => {
  const i = [...e.currentTarget.children].indexOf(e.target);
  if (i > -1) showWall(i);
});

document.addEventListener('keydown', e => {
  if (e.target.matches('input,select,textarea')) return;
  if (e.key === 'ArrowRight') showWall(wallIx + (lang === 'ar' ? -1 : 1));
  if (e.key === 'ArrowLeft')  showWall(wallIx + (lang === 'ar' ? 1 : -1));
  if (e.key === 'Escape' && view !== 'quote') go('quote');
});

/* No preload loop here: paintWall already attaches the next slide one ahead,
   which is the fetch. Pulling all six would also pull the landscape set on a
   phone, which never displays it - about two megabytes of nothing. */
buildWall();
render();
sheet.reset();
