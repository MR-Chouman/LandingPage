let mode = 'day';


const content = {
  sunmoon: {
    day:   { eyebrow:'— Midday Command',  title:'My blazing throne',   body:'I stare at the sun without blinking. We have an understanding — it burns so I don\'t have to. I ride its rays down to the sand each morning and dare the horizon to stop me.' },
    night: { eyebrow:'— Night Devotion',  title:'My golden queen',     body:'The desert moon is mine. She does not rise for the poets or the sailors — she rises because I asked her to. I wear her glow like armour and dare the darkness to encroach.' },
  },
  dunes: {
    day:   { eyebrow:'— Morning Command', title:'My shifting kingdom',  body:'Every morning I reshape my dunes. I push the sand with open palms and carve new ridges sharp as blades. My kingdom never looks the same twice — I made sure of that.' },
    night: { eyebrow:'— Night Silence',   title:'My silver ridges',    body:'At night my dunes turn silver. I walk their crests barefoot and feel the warmth the sun left behind — stored in the sand like a secret. The desert remembers everything.' },
  },
  storm: {
    day:   { eyebrow:'— My Fury',         title:'My war cry',           body:'When I spread my wings and spin, the storm obeys. I call it when the desert needs to remind the world of its power. Nothing stands against the sand when I command it.' },
    night: { eyebrow:'— Night Fury',      title:'My dark spiral',      body:'Nightstorms are rarer and more brutal. I save them for when the silence feels too loud. I spin until the stars blur and the desert shakes — then I am calm again.' },
  },
  cacti: {
    day:   { eyebrow:'— My Sentinels',    title:'My thorned guards',    body:'They answer to no one but me. I planted each one with my own hands, pressed them into the earth and told them — grow fierce, grow sharp. They never disappoint.' },
    night: { eyebrow:'— Night Watch',     title:'My silent soldiers',  body:'At night I drape the cacti in embers and let them glow. They stand like sentinels across my dunes, armed and luminous. Nothing enters my desert without passing them.' },
  },
  stars: {
    day:   { eyebrow:'— My Canopy',       title:'My hidden ceiling',   body:'By day the stars retreat, but I know exactly where each one sleeps. I guard their positions fiercely — no cloud crosses my sky without my permission.' },
    night: { eyebrow:'— Night Vigil',     title:'My ancient map',      body:'I named every star. I drew the constellations with my own wings, cutting trails of light across the black sky. The desert at night is mine alone — and the stars know better than to dim when I am watching.' },
  },
  oasis: {
    day:   { eyebrow:'— My Secret',       title:'My hidden mercy',     body:'I do not share this with anyone. The oasis is my one softness — hidden between dunes, cool and trembling. I come here alone to remember that power without tenderness is just destruction.' },
    night: { eyebrow:'— Night Refuge',    title:'My moonlit mirror',   body:'By night the oasis holds the whole sky. I sit at its edge and watch my reflection — fierce and still. The palms lean over me like they are keeping a secret. They are.' },
  },
};


document.getElementById('timeToggle').addEventListener('click', toggleMode);

function toggleMode() {
  mode = mode === 'day' ? 'night' : 'day';
  const isDay = mode === 'day';

  if (isDay) {
    applyDay();
  } else {
    applyNight();
  }

  speak(isDay ? '🏜️ She commands. The sun obeys.' : '🌙 She rules the dark. The stars bow.');
}

function applyDay() {
  document.getElementById('thumb').style.cssText    = 'left:3px;background:#fb923c;box-shadow:0 0 12px rgba(255,150,0,0.9)';
  document.getElementById('modeLabel').textContent  = 'Midday';
  document.getElementById('body').style.background  = '#92400e';

  set('sky','background','linear-gradient(180deg,#7c2d12 0%,#c2410c 20%,#ea580c 45%,#fb923c 65%,#fcd34d 85%,#fef3c7 100%)');
  setOp('starsLayer','0');
  setOp('embers','0');
  setOp('zzz','0');
  setOp('sandParticles','1');
  setOp('heatLayer','1');
  setOp('meteors','0');
  set('fairyGlow','background','rgba(255,150,50,0.55)');

  // celestial — sun
  const c = document.getElementById('celestial');
  c.style.cssText = 'position:absolute;top:12%;right:16%;width:112px;height:112px;border-radius:50%;transition:all 1.2s;background:radial-gradient(circle,#fff7ed,#fb923c 40%,#ea580c);box-shadow:0 0 80px rgba(255,160,0,0.9),0 0 160px rgba(255,120,0,0.5)';

  // hero dunes
  set('duneFar','background','#92400e');
  set('duneMid','background','#7c2d12');
  set('duneRight','background','#7c2d12');
  set('duneGround','background','linear-gradient(to top,#451a03,#92400e)');
  set('heatLayer','background','linear-gradient(to top,rgba(255,200,100,0.15),transparent)');

  // sections
  set('sunmoonBg','background','linear-gradient(160deg,#7c2d12 0%,#c2410c 45%,#fed7aa 100%)');
  set('dunesBg','background','linear-gradient(160deg,#451a03 0%,#78350f 40%,#d97706 100%)');
  set('stormBg','background','linear-gradient(160deg,#292524 0%,#57534e 40%,#a8a29e 100%)');
  set('cactiBg','background','linear-gradient(160deg,#14532d 0%,#1a5c1a 40%,#4ade80 100%)');
  set('starsBg','background','linear-gradient(160deg,#020818 0%,#0c1445 50%,#1e1b4b 100%)');
  set('oasisBg','background','linear-gradient(160deg,#064e3b 0%,#065f46 40%,#6ee7b7 100%)');
  set('closingNature','background','linear-gradient(135deg,#064e3b,#14532d)');

  // sun/moon
  setOp('sunEl','1'); setOp('moonEl','0');
  setOp('sunmoonStars','0');

  // dunes — day colours
  set('dune3','background','linear-gradient(160deg,#d97706,#92400e)');
  set('dune2','background','linear-gradient(160deg,#f59e0b,#b45309)');
  set('dune1','background','linear-gradient(160deg,#fbbf24,#d97706)');
  setOp('windLines','1');
  setOp('duneNightGlow','0');

  // storm rings — day look
  set('stormRing1','borderColor','rgba(168,162,158,0.4)');
  set('stormRing2','borderColor','rgba(180,83,9,0.5)');
  set('stormRing3','borderColor','rgba(234,88,12,0.6)');
  set('stormRing4','borderColor','rgba(185,28,28,0.7)');
  setOp('stormParticles','0.6');

  // cacti
  setOp('cactiEmbers','0');

  // stars section — dim constellation by day
  setOp('starsFieldLayer','0.3');
  setOp('meteors','0');

  // oasis day
  set('oasisPool','background','linear-gradient(180deg,rgba(52,211,153,0.9),rgba(16,185,129,0.75))');
  setOp('oasisMoonReflection','0');

  set('footer','background','#111');
  updateTexts('day');
}

function applyNight() {
  document.getElementById('thumb').style.cssText    = 'left:29px;background:#fde68a;box-shadow:0 0 12px rgba(245,210,100,0.9)';
  document.getElementById('modeLabel').textContent  = 'Night';
  document.getElementById('body').style.background  = '#020818';

  set('sky','background','linear-gradient(180deg,#020818 0%,#050e28 25%,#0c1445 60%,#1e1b4b 100%)');
  setOp('starsLayer','1');
  setOp('embers','1');
  setOp('zzz','1');
  setOp('sandParticles','0.3');
  setOp('heatLayer','0');
  setOp('meteors','1');
  set('fairyGlow','background','rgba(245,210,100,0.45)');

  // celestial — moon
  const c = document.getElementById('celestial');
  c.style.cssText = 'position:absolute;top:10%;right:20%;width:80px;height:80px;border-radius:50%;transition:all 1.2s;background:radial-gradient(circle at 35% 35%,#fefce8,#fde68a 50%,#d97706);box-shadow:0 0 50px rgba(245,210,100,0.7),0 0 120px rgba(217,119,6,0.3)';

  // hero dunes — night
  set('duneFar','background','#1c0a03');
  set('duneMid','background','#0f0601');
  set('duneRight','background','#100601');
  set('duneGround','background','linear-gradient(to top,#0a0200,#1c0a03)');
  set('heatLayer','background','linear-gradient(to top,rgba(0,0,0,0.4),transparent)');

  // sections
  set('sunmoonBg','background','linear-gradient(160deg,#020818 0%,#050e28 50%,#0c1445 100%)');
  set('dunesBg','background','linear-gradient(160deg,#0a0200 0%,#1c0a03 40%,#3b1500 100%)');
  set('stormBg','background','linear-gradient(160deg,#0c0a09 0%,#1c1917 40%,#292524 100%)');
  set('cactiBg','background','linear-gradient(160deg,#011404 0%,#021f07 40%,#0a2e0d 100%)');
  set('starsBg','background','linear-gradient(160deg,#020818 0%,#050e28 50%,#0c1445 100%)');
  set('oasisBg','background','linear-gradient(160deg,#011f14 0%,#012e1d 40%,#024d30 100%)');
  set('closingNature','background','linear-gradient(135deg,#020a05,#011403)');

  // sun/moon
  setOp('sunEl','0'); setOp('moonEl','1');
  setOp('sunmoonStars','1');

  // dunes — night colours
  set('dune3','background','linear-gradient(160deg,#3b1500,#1c0a03)');
  set('dune2','background','linear-gradient(160deg,#4a1b00,#2a0e02)');
  set('dune1','background','linear-gradient(160deg,#5c2200,#3b1500)');
  setOp('windLines','0.3');
  setOp('duneNightGlow','0.6');

  // storm rings — night look (more dramatic)
  set('stormRing1','borderColor','rgba(100,100,120,0.5)');
  set('stormRing2','borderColor','rgba(120,50,0,0.6)');
  set('stormRing3','borderColor','rgba(200,80,0,0.7)');
  set('stormRing4','borderColor','rgba(220,30,0,0.8)');
  setOp('stormParticles','1');

  // cacti
  setOp('cactiEmbers','1');

  // stars section
  setOp('starsFieldLayer','1');
  setOp('meteors','1');

  // oasis night
  set('oasisPool','background','linear-gradient(180deg,rgba(6,78,59,0.9),rgba(4,47,46,0.85))');
  setOp('oasisMoonReflection','1');

  set('footer','background','#000');
  updateTexts('night');
}

function set(id, prop, val) {
  const el = document.getElementById(id);
  if (el) el.style[prop] = val;
}
function setOp(id, val) {
  const el = document.getElementById(id);
  if (el) el.style.opacity = val;
}

function updateTexts(m) {
  const pairs = [
    ['smEyebrow','smTitle','smBody','sunmoon'],
    ['dEyebrow','dTitle','dBody','dunes'],
    ['stEyebrow','stTitle','stBody','storm'],
    ['cEyebrow','cTitle','cBody','cacti'],
    ['skEyebrow','skTitle','skBody','stars'],
    ['oEyebrow','oTitle','oBody','oasis'],
  ];
  pairs.forEach(([e,t,b,key]) => {
    const d  = content[key][m];
    const eEl = document.getElementById(e);
    const tEl = document.getElementById(t);
    const bEl = document.getElementById(b);
    if (eEl) eEl.textContent = d.eyebrow;
    if (tEl) tEl.textContent = d.title;
    if (bEl) bEl.textContent = d.body;
  });
}


function generateSandParticles() {
  const layer = document.getElementById('sandParticles');
  if (!layer) return;
  for (let i = 0; i < 35; i++) {
    const p  = document.createElement('div');
    const sz = 1.5 + Math.random() * 3;
    p.className = 'sand-particle';
    p.style.cssText = `
      width:${sz}px; height:${sz * 0.4}px;
      background:rgba(${200 + Math.random()*55},${140 + Math.random()*60},${50 + Math.random()*40},${0.3 + Math.random()*0.5});
      left:${Math.random()*100}%; top:${30 + Math.random()*60}%;
      --sx:${(Math.random()*120 + 40).toFixed(0)}px;
      --sy:${(Math.random()*40 - 60).toFixed(0)}px;
      --sr:${(Math.random()*360).toFixed(0)}deg;
      animation: sandDrift ${3 + Math.random()*4}s ease-in-out ${Math.random()*5}s infinite;
      transform:rotate(${Math.random()*30 - 15}deg);
    `;
    layer.appendChild(p);
  }
}


function generateStormParticles() {
  const layer = document.getElementById('stormParticles');
  if (!layer) return;
  for (let i = 0; i < 50; i++) {
    const p  = document.createElement('div');
    const sz = 1 + Math.random() * 3;
    const angle = Math.random() * 360;
    const dist  = 30 + Math.random() * 100;
    p.className = 'sand-particle';
    p.style.cssText = `
      width:${sz}px; height:${sz * 0.4}px;
      background:rgba(${180 + Math.random()*75},${100 + Math.random()*80},${Math.random()*60},${0.4 + Math.random()*0.5});
      left:${50 + Math.cos(angle) * dist/2}%; top:${50 + Math.sin(angle) * dist/3}%;
      --sx:${(Math.cos(angle + 0.5) * dist).toFixed(0)}px;
      --sy:${(Math.sin(angle + 0.5) * dist * 0.6).toFixed(0)}px;
      --sr:${(Math.random()*720).toFixed(0)}deg;
      animation: sandDrift ${1.5 + Math.random()*3}s ease-in-out ${Math.random()*3}s infinite;
    `;
    layer.appendChild(p);
  }
}


function generateEmbers() {
  const layer = document.getElementById('embers');
  if (!layer) return;
  for (let i = 0; i < 20; i++) {
    const e  = document.createElement('div');
    const sz = 2 + Math.random() * 3;
    e.className = 'absolute rounded-full animate-ember';
    e.style.cssText = `
      width:${sz}px; height:${sz}px;
      background:#fb923c;
      box-shadow:0 0 8px #fb923c, 0 0 16px rgba(251,146,60,0.5);
      left:${Math.random()*90}%; top:${40 + Math.random()*55}%;
      animation-duration:${3 + Math.random()*5}s;
      animation-delay:${Math.random()*6}s;
      --ex:${(Math.random()*60 - 30).toFixed(0)}px;
      --ey:-${(Math.random()*80 + 30).toFixed(0)}px;
    `;
    layer.appendChild(e);
  }
}


function generateStars(id, count = 110) {
  const layer = document.getElementById(id);
  if (!layer) return;
  for (let i = 0; i < count; i++) {
    const s  = document.createElement('div');
    const sz = 1 + Math.random() * 2.5;
    // Desert stars — warm white with slight golden tinge
    const warm = Math.random() > 0.5;
    s.className = 'absolute rounded-full animate-twinkle';
    s.style.cssText = `
      width:${sz}px; height:${sz}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      background:${warm ? 'rgba(253,230,138,0.9)' : 'rgba(255,255,255,0.85)'};
      opacity:${Math.random()*0.5+0.1};
      animation-duration:${2+Math.random()*4}s;
      animation-delay:${Math.random()*4}s;
    `;
    layer.appendChild(s);
  }
}

const parallaxEls = document.querySelectorAll('.parallax');
function runParallax() {
  const sy = window.scrollY;
  parallaxEls.forEach(el => {
    el.style.transform = `translateY(${sy * parseFloat(el.dataset.speed || 0)}px)`;
  });
}

function fadeHero() {
  const el = document.getElementById('heroText');
  const sy = window.scrollY;
  const vh = window.innerHeight;
  el.style.opacity   = Math.max(0, 1 - sy / (vh * 0.6));
  el.style.transform = `translateY(${sy * 0.25}px)`;
}


const sections = [
  { id:'sec-sunmoon', iconId:'sunmoonIcon', textId:'sunmoonText', zoom:'in'  },
  { id:'sec-dunes',   iconId:'dunesIcon',   textId:'dunesText',   zoom:'out' },
  { id:'sec-storm',   iconId:'stormIcon',   textId:'stormText',   zoom:'in'  },
  { id:'sec-cacti',   iconId:'cactiIcon',   textId:'cactiText',   zoom:'out' },
  { id:'sec-stars',   iconId:'starsIcon',   textId:'starsText',   zoom:'in'  },
  { id:'sec-oasis',   iconId:'oasisIcon',   textId:'oasisText',   zoom:'out' },
];

function runZoom() {
  const vh = window.innerHeight;
  const cy = window.scrollY + vh / 2;

  sections.forEach(sec => {
    const el   = document.getElementById(sec.id);
    const icon = document.getElementById(sec.iconId);
    const text = document.getElementById(sec.textId);
    if (!el || !icon || !text) return;

    const top    = el.offsetTop;
    const height = el.offsetHeight;
    const mid    = top + height / 2;
    const dist   = (cy - mid) / (height * 0.6);
    const t      = Math.max(-1, Math.min(1, dist));
    const p      = 1 - Math.abs(t);

    let iconScale, textScale;
    if (sec.zoom === 'in') {
      iconScale = t < 0 ? 1 + (1 - p) * 0.55 : 1 - (1 - p) * 0.25;
      textScale = t < 0 ? 0.75 + p * 0.25     : 1;
    } else {
      iconScale = t < 0 ? 0.6 + p * 0.4       : 1 + (1-p) * 0.3;
      textScale = t < 0 ? 1 + (1-p) * 0.3     : 1;
    }

    icon.style.transform = `scale(${iconScale.toFixed(3)})`;
    text.style.transform = `scale(${textScale.toFixed(3)})`;
    text.style.opacity   = Math.max(0.4, p).toFixed(3);
  });
}


const bgStops = {
  day: [
    { id:'hero',        bg:'#92400e' },
    { id:'sec-sunmoon', bg:'#7c2d12' },
    { id:'sec-dunes',   bg:'#451a03' },
    { id:'sec-storm',   bg:'#292524' },
    { id:'sec-cacti',   bg:'#14532d' },
    { id:'sec-stars',   bg:'#020818' },
    { id:'sec-oasis',   bg:'#064e3b' },
    { id:'sec-closing', bg:'#111'    },
  ],
  night: [
    { id:'hero',        bg:'#020818' },
    { id:'sec-sunmoon', bg:'#020818' },
    { id:'sec-dunes',   bg:'#0a0200' },
    { id:'sec-storm',   bg:'#0c0a09' },
    { id:'sec-cacti',   bg:'#011404' },
    { id:'sec-stars',   bg:'#020818' },
    { id:'sec-oasis',   bg:'#011f14' },
    { id:'sec-closing', bg:'#000'    },
  ],
};

function blendBackground() {
  const sy    = window.scrollY + window.innerHeight * 0.5;
  const stops = bgStops[mode];

  let fromStop = stops[0], toStop = stops[1];
  for (let i = 0; i < stops.length - 1; i++) {
    const aEl = document.getElementById(stops[i].id);
    const bEl = document.getElementById(stops[i+1].id);
    if (!aEl || !bEl) continue;
    if (sy >= aEl.offsetTop && sy < bEl.offsetTop) {
      fromStop = stops[i]; toStop = stops[i+1]; break;
    }
    if (i === stops.length - 2) { fromStop = stops[i+1]; toStop = stops[i+1]; }
  }

  const aEl = document.getElementById(fromStop.id);
  const bEl = document.getElementById(toStop.id);
  if (!aEl || !bEl || fromStop.id === toStop.id) {
    document.getElementById('body').style.background = fromStop.bg;
    return;
  }
  const progress = (sy - aEl.offsetTop) / (bEl.offsetTop - aEl.offsetTop);
  document.getElementById('body').style.background = lerpColor(fromStop.bg, toStop.bg, Math.min(1, Math.max(0, progress)));
}

function lerpColor(a, b, t) {
  const ah = a.replace('#',''), bh = b.replace('#','');
  const ar = parseInt(ah.substring(0,2),16), ag = parseInt(ah.substring(2,4),16), ab = parseInt(ah.substring(4,6),16);
  const br = parseInt(bh.substring(0,2),16), bg = parseInt(bh.substring(2,4),16), bb = parseInt(bh.substring(4,6),16);
  return '#' +
    Math.round(ar+(br-ar)*t).toString(16).padStart(2,'0') +
    Math.round(ag+(bg-ag)*t).toString(16).padStart(2,'0') +
    Math.round(ab+(bb-ab)*t).toString(16).padStart(2,'0');
}


const sectionAnnounces = {
  'sec-sunmoon': { day:'☀️ She dares the sun to outshine her…',    night:'🌙 She commands the desert moon…' },
  'sec-dunes':   { day:'🏜️ She carves new ridges with her hands…',  night:'✨ The dunes turn silver at her feet…' },
  'sec-storm':   { day:'💨 She spins. The storm obeys…',            night:'🌪️ Her dark spiral awakens…' },
  'sec-cacti':   { day:'🌵 Her thorned guards stand ready…',         night:'🔥 Embers crown her sentinels…' },
  'sec-stars':   { day:'⭐ She guards where every star sleeps…',     night:'🌌 She named them all herself…' },
  'sec-oasis':   { day:'💧 Her one secret. Her hidden mercy…',       night:'🌿 She faces herself in the moonlit water…' },
};
const announced = new Set();

function checkAnnounce() {
  const vh = window.innerHeight;
  Object.entries(sectionAnnounces).forEach(([id, msgs]) => {
    const key = id + mode;
    if (announced.has(key)) return;
    const el = document.getElementById(id);
    if (!el) return;
    if (el.getBoundingClientRect().top < vh * 0.6) {
      announced.add(key);
      speak(msgs[mode]);
    }
  });
}

let announceTimer;
function speak(text) {
  const el = document.getElementById('announcer');
  if (!el) return;
  clearTimeout(announceTimer);
  el.textContent   = text;
  el.style.opacity = '1';
  el.classList.remove('hidden');
  announceTimer = setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.classList.add('hidden'), 500);
  }, 3000);
}

function initGlow() {
  const g = document.createElement('div');
  g.style.cssText = 'position:fixed;width:340px;height:340px;border-radius:50%;pointer-events:none;z-index:1;mix-blend-mode:screen;transform:translate(-50%,-50%);transition:background 1s;';
  document.body.appendChild(g);
  document.addEventListener('mousemove', e => {
    g.style.left = e.clientX+'px'; g.style.top = e.clientY+'px';
    g.style.background = mode === 'day'
      ? 'radial-gradient(circle,rgba(255,160,50,0.08) 0%,transparent 70%)'
      : 'radial-gradient(circle,rgba(245,210,100,0.05) 0%,transparent 70%)';
  });
}


let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      runParallax();
      fadeHero();
      runZoom();
      blendBackground();
      checkAnnounce();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });


document.addEventListener('DOMContentLoaded', () => {
  generateStars('starsLayer', 130);
  generateStars('sunmoonStars', 80);
  generateStars('starsFieldLayer', 100);
  generateSandParticles();
  generateStormParticles();
  generateEmbers();
  initGlow();
  applyDay();
  runZoom();
  blendBackground();
  setTimeout(() => speak('🏜️ Sarra commands. Enter at your own risk.'), 1500);
});