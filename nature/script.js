let mode = 'morning';

/* SECTION CONTENT*/
const content = {
  flowers: {
    morning: { eyebrow:'— Morning Ritual', title:'My darlings',         body:'I kiss every petal as the sun rises. I whisper "good morning" to each bloom and drop the clearest dew from my wings onto their leaves. They open for me — they always have.' },
    night:   { eyebrow:'— Night Lullaby',  title:'Sleep, my darlings',  body:'At dusk I sing softly between the petals. I kiss them one by one as they close. "Rest now," I tell them. They fold inward like tiny fists, dreaming of morning.  zzz 💤' },
  },
  pond: {
    morning: { eyebrow:'— Morning Ritual', title:'My still mirror',  body:'I fly low and drag my fingers across the surface, making ripples. I watch the sky reflect in it and remind the pond how beautiful it is. I leave lily pads as little thrones for the frogs.' },
    night:   { eyebrow:'— Night Ritual',   title:'My moon mirror',   body:'At night the pond becomes my favourite place. I sit at its edge and let the moon look at itself. I sing to the fish below — they rise to the surface just to listen.' },
  },
  trees: {
    morning: { eyebrow:'— Morning Ritual', title:'My ancient friends',     body:'I hug every trunk I can reach. I polish their leaves with my wings until they shine. I tell them stories of the faraway mountains so they never feel rooted in just one place.' },
    night:   { eyebrow:'— Night Watch',    title:'My silent guardians',    body:'At night I hang lanterns of fireflies between the branches. The trees hold them like a secret. I rest in the highest fork and let their breathing rock me to sleep.  zzz 🌙' },
  },
  grass: {
    morning: { eyebrow:'— Morning Ritual', title:'My green carpet', body:'I dance barefoot across it every morning to wake it up. Each blade I touch stands a little taller. I braid them into tiny crowns and leave them for the beetles to find.' },
    night:   { eyebrow:'— Night Rest',     title:'My silver bed',   body:'When moonlight falls on the grass it turns silver — and I turn small enough to sleep between two blades. The dew keeps me cool. The crickets sing all night.  zzz 🌿' },
  },
  sunmoon: {
    morning: { eyebrow:'— Morning Ritual',  title:'My golden king',   body:'Every dawn I fly as high as my wings allow and blow a kiss to the sun. I believe that is why it rises without fail — it is looking for me.' },
    night:   { eyebrow:'— Night Devotion',  title:'My silver queen',  body:'Every night I catch moonbeams in my palms and scatter them across the forest floor. The moon and I have an agreement — she lights the world, I make it beautiful.' },
  },
};

/* DAY / NIGHT TOGGLE*/
document.getElementById('timeToggle').addEventListener('click', () => {
  mode = mode === 'morning' ? 'night' : 'morning';
  const isMorning = mode === 'morning';

  if (isMorning) {
    applyMorning();
  } else {
    applyNight();
  }

  speak(isMorning ? '🌿 She wakes. The world follows.' : '🌙 She rests. The stars take over.');
}

function applyMorning() {
  document.getElementById('thumb').style.cssText    = 'left:3px;background:#facc15;box-shadow:0 0 12px rgba(255,215,0,0.9)';
  document.getElementById('modeLabel').textContent  = 'Morning';
  document.getElementById('body').style.background  = '#166534';

  set('sky','background','linear-gradient(180deg,#3a8fd6 0%,#87CEEB 35%,#b8e4ff 60%,#fff8d0 80%,#ffe082 100%)');
  setOp('starsLayer','0'); setOp('fireflies','0'); setOp('birds','1');
  setOp('zzz','0');
  set('fairyGlow','background','rgba(255,220,100,0.5)');

  const c = document.getElementById('celestial');
  c.style.cssText += ';background:radial-gradient(circle,#FFF9C4,#FFD700 40%,#FFB300);box-shadow:0 0 70px rgba(255,215,0,0.9),0 0 140px rgba(255,215,0,0.4);width:96px;height:96px;top:10%;right:15%';

  set('hfar','background','#4ade80');
  set('hmid','background','#16a34a');
  document.getElementById('tback').style.color  = '#3D7A30';
  document.getElementById('tfront').style.color = '#2D5A27';
  set('ground','background','linear-gradient(to top,#166534,#4ade80)');
  set('fog','background','linear-gradient(to top,rgba(255,255,240,0.45),transparent)');

  set('flowersBg','background','linear-gradient(160deg,#1a5c1a 0%,#2d8a2d 40%,#a8e6a8 100%)');
  set('pondBg','background','linear-gradient(160deg,#0f4c5c 0%,#1a7a8a 40%,#a8d8ea 100%)');
  set('treesBg','background','linear-gradient(160deg,#0a2010 0%,#1b4332 50%,#2d6a4f 100%)');
  set('grassBg','background','linear-gradient(160deg,#064e3b 0%,#166534 50%,#4ade80 100%)');
  set('sunmoonBg','background','linear-gradient(160deg,#78350f 0%,#d97706 50%,#fef3c7 100%)');
  set('closingNature','background','linear-gradient(135deg,#064e3b,#14532d)');

  // flowers open
  set('petalWrapper','transform','scale(1) rotate(0deg)');
  set('petalWrapper','opacity','1');
  setOp('flowerZzz','0');
  set('flowerGlow','background','rgba(255,180,200,0.45)');

  // pond day
  set('pondCircle','background','linear-gradient(180deg,rgba(125,211,252,0.95),rgba(56,189,248,0.8))');
  setOp('moonReflection','0');
  set('fish','background','rgba(251,146,60,0.75)');

  // trees day
  set('tree1Crown','background','radial-gradient(circle at 40% 35%,#4ade80,#16a34a 60%,#14532d)');
  set('tree2Crown','background','radial-gradient(circle at 40% 35%,#86efac,#22c55e 60%,#15803d)');
  set('tree3Crown','background','radial-gradient(circle at 40% 35%,#4ade80,#16a34a 60%,#14532d)');
  setOp('floatingLeaves','1'); setOp('treeFireflies','0');

  setOp('dewDrops','1');
  buildGrass('morning');

  // sun/moon
  setOp('sunEl','1'); setOp('moonEl','0');
  setOp('sunmoonStars','0');
  if (document.getElementById('qSunMoonText'))
    document.getElementById('qSunMoonText').innerHTML = 'What do I do<br/>for the sun?';

  set('footer','background','#111');
  updateTexts('morning');
}

function applyNight() {
  document.getElementById('thumb').style.cssText    = 'left:29px;background:#e5e7eb;box-shadow:0 0 12px rgba(232,232,208,0.9)';
  document.getElementById('modeLabel').textContent  = 'Night';
  document.getElementById('body').style.background  = '#020818';

  set('sky','background','linear-gradient(180deg,#020818 0%,#050e28 25%,#0a1628 60%,#0d1f3c 100%)');
  setOp('starsLayer','1'); setOp('fireflies','1'); setOp('birds','0');
  setOp('zzz','1');
  set('fairyGlow','background','rgba(200,220,255,0.4)');

  const c = document.getElementById('celestial');
  c.style.cssText += ';background:radial-gradient(circle at 35% 35%,#FFFFF0,#E8E8D0 50%,#C8C8B0);box-shadow:0 0 40px rgba(232,232,208,0.6),0 0 100px rgba(200,200,180,0.3);width:74px;height:74px;top:9%;right:22%';

  set('hfar','background','#0D2010');
  set('hmid','background','#081508');
  document.getElementById('tback').style.color  = '#071005';
  document.getElementById('tfront').style.color = '#030A02';
  set('ground','background','linear-gradient(to top,#050d04,#0a1a07)');
  set('fog','background','linear-gradient(to top,rgba(5,10,20,0.6),transparent)');

  set('flowersBg','background','linear-gradient(160deg,#0d0520 0%,#1a0a2a 40%,#2a1240 100%)');
  set('pondBg','background','linear-gradient(160deg,#020818 0%,#0a1628 50%,#0d2137 100%)');
  set('treesBg','background','linear-gradient(160deg,#010301 0%,#030803 50%,#040d04 100%)');
  set('grassBg','background','linear-gradient(160deg,#010401 0%,#040b03 50%,#071005 100%)');
  set('sunmoonBg','background','linear-gradient(160deg,#020818 0%,#050e28 50%,#0a1628 100%)');
  set('closingNature','background','linear-gradient(135deg,#030803,#020602)');

  // flowers close
  set('petalWrapper','transform','scale(0.12) rotate(90deg)');
  set('petalWrapper','opacity','0.4');
  setOp('flowerZzz','1');
  set('flowerGlow','background','rgba(80,50,120,0.35)');

  // pond night
  set('pondCircle','background','linear-gradient(180deg,rgba(13,33,55,0.97),rgba(10,22,40,0.9))');
  setOp('moonReflection','1');
  set('fish','background','rgba(100,120,200,0.5)');

  // trees night
  set('tree1Crown','background','radial-gradient(circle at 40% 35%,#071a05,#040e03 60%,#020801)');
  set('tree2Crown','background','radial-gradient(circle at 40% 35%,#0a2008,#060f04 60%,#030902)');
  set('tree3Crown','background','radial-gradient(circle at 40% 35%,#071a05,#040e03 60%,#020801)');
  setOp('floatingLeaves','0'); setOp('treeFireflies','1');

  setOp('dewDrops','0.3');
  buildGrass('night');

  setOp('sunEl','0'); setOp('moonEl','1');
  setOp('sunmoonStars','1');

  set('footer','background','#000');
  updateTexts('night');
}

function getById(id) {
  return document.getElementById(id);
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
    ['fEyebrow','fTitle','fBody','flowers'],
    ['pEyebrow','pTitle','pBody','pond'],
    ['tEyebrow','tTitle','tBody','trees'],
    ['gEyebrow','gTitle','gBody','grass'],
    ['sEyebrow','sTitle','sBody','sunmoon'],
  ];
  pairs.forEach(([e,t,b,key]) => {
    const d = content[key][m];
    const eEl = document.getElementById(e);
    const tEl = document.getElementById(t);
    const bEl = document.getElementById(b);
    if (eEl) eEl.textContent = d.eyebrow;
    if (tEl) tEl.textContent = d.title;
    if (bEl) bEl.textContent = d.body;
  });
}

/* GRASS BLADES*/
function buildGrass(m) {
  const field = document.getElementById('grassField');
  if (!field) return;
  field.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const h   = 55 + Math.random() * 90;
    const w   = 4 + Math.random() * 4;
    const del = (Math.random() * 2).toFixed(2);
    const dur = (1.5 + Math.random() * 1.5).toFixed(2);
    const blade = document.createElement('div');
    blade.className = 'rounded-t-full origin-bottom animate-grass-wave flex-shrink-0';
    blade.style.cssText = `
      width:${w}px; height:${h}px; flex-shrink:0;
      background:${m === 'morning'
        ? `linear-gradient(to top,#166534,#4ade80 ${35+Math.random()*35}%,#86efac)`
        : `linear-gradient(to top,#020601,#071005 ${35+Math.random()*35}%,#0d2010)`};
      animation-duration:${dur}s; animation-delay:${del}s;
    `;
    field.appendChild(blade);
  }
}

/* STARS*/
function generateStars(id, count = 110) {
  const layer = document.getElementById(id);
  if (!layer) return;
  for (let i = 0; i < count; i++) {
    const s  = document.createElement('div');
    const sz = 1 + Math.random() * 2.5;
    s.className = 'absolute rounded-full bg-white animate-twinkle';
    s.style.cssText = `
      width:${sz}px; height:${sz}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      opacity:${Math.random()*0.5+0.1};
      animation-duration:${2+Math.random()*4}s;
      animation-delay:${Math.random()*4}s;
    `;
    layer.appendChild(s);
  }
}

/* FIREFLIES*/
function generateFireflies() {
  const layer = document.getElementById('fireflies');
  if (!layer) return;
  for (let i = 0; i < 22; i++) {
    const ff = document.createElement('div');
    const sz = 3 + Math.random() * 3;
    ff.className = 'absolute rounded-full animate-firefly';
    ff.style.cssText = `
      width:${sz}px; height:${sz}px;
      background:#CCFF00;
      box-shadow:0 0 8px #CCFF00,0 0 18px rgba(204,255,0,0.55);
      left:${Math.random()*90}%; top:${25+Math.random()*65}%;
      animation-duration:${4+Math.random()*6}s;
      animation-delay:${Math.random()*5}s;
      --fx:${(Math.random()*80-40).toFixed(0)}px;
      --fy:${(Math.random()*60-30).toFixed(0)}px;
      --fx2:${(Math.random()*60-30).toFixed(0)}px;
      --fy2:${(Math.random()*40-20).toFixed(0)}px;
    `;
    layer.appendChild(ff);
  }
}

/*CLOUDS */
function generateClouds() {
  const layer = document.getElementById('cloudsLayer');
  if (!layer) return;
  [{w:130,h:38,top:'8%',spd:38,del:0},{w:85,h:28,top:'22%',spd:52,del:-10},
   {w:170,h:48,top:'4%',spd:30,del:-20},{w:110,h:32,top:'30%',spd:44,del:-6},
   {w:75,h:24,top:'16%',spd:62,del:-28}].forEach(d => {
    const c = document.createElement('div');
    c.style.cssText = `position:absolute;width:${d.w}px;height:${d.h}px;top:${d.top};left:-280px;
      background:rgba(255,255,255,0.82);border-radius:50px;filter:blur(1px);
      animation:cloudDrift ${d.spd}s linear ${d.del}s infinite;`;
    ['0.15','0.4'].forEach((lp,i) => {
      const p = document.createElement('div');
      p.style.cssText = `position:absolute;border-radius:50%;background:inherit;
        width:${d.h*(1.2+i*0.3)}px;height:${d.h*(1.2+i*0.3)}px;
        top:-${d.h*(0.4+i*0.2)}px;left:${d.w*parseFloat(lp)}px;`;
      c.appendChild(p);
    });
    layer.appendChild(c);
  });
}

/*PARALLAX*/
const parallaxEls = document.querySelectorAll('.parallax');
function runParallax() {
  const sy = window.scrollY;
  parallaxEls.forEach(el => {
    el.style.transform = `translateY(${sy * parseFloat(el.dataset.speed || 0)}px)`;
  });
}

/* HERO FADE */
function fadeHero() {
  const el = document.getElementById('heroText');
  const sy = window.scrollY;
  const vh = window.innerHeight;
  el.style.opacity   = Math.max(0, 1 - sy / (vh * 0.6));
  el.style.transform = `translateY(${sy * 0.25}px)`;
}

/* ICON : TEXT COUNTER - ZOOM
   As each section scrolls into view:
   - element icon GROWS (scale up)
   - text blur box SHRINKS (scale down)
   Once the section is centred:
   - icon SHRINKS back
   - text box GROWS to normal size and full opacity
   This creates the "zoom in/out" effect .*/
const sections = [
  { id:'sec-flowers', iconId:'flowersIcon', textId:'flowersText', zoom:'in'  },
  { id:'sec-pond',    iconId:'pondIcon',    textId:'pondText',    zoom:'out' },
  { id:'sec-trees',   iconId:'treesIcon',   textId:'treesText',   zoom:'in'  },
  { id:'sec-grass',   iconId:'grassIcon',   textId:'grassText',   zoom:'out' },
  { id:'sec-sunmoon', iconId:'sunmoonIcon', textId:'sunmoonText', zoom:'in'  },
];

function runZoom() {
  const vh = window.innerHeight;
  const cy = window.scrollY + vh / 2;   // centre of viewport in page coords

  sections.forEach(sec => {
    const el     = document.getElementById(sec.id);
    const icon   = document.getElementById(sec.iconId);
    const text   = document.getElementById(sec.textId);
    if (!el || !icon || !text) return;

    const top    = el.offsetTop;
    const height = el.offsetHeight;
    const mid    = top + height / 2;

    // -1 = section approaching from below, 0 = centred, +1 = section left above
    const dist   = (cy - mid) / (height * 0.6);   // normalised distance from centre
    const t      = Math.max(-1, Math.min(1, dist)); // clamp

    // progress: 0 when far, 1 when centred
    const p = 1 - Math.abs(t);

    let iconScale, textScale;
    if (sec.zoom === 'in') {
      // Icon: big when approaching (t<0), normal when centred, small when past
      iconScale = t < 0
        ? 1 + (1 - p) * 0.55        // growing in: 1.55 → 1
        : 1 - (1 - p) * 0.25;       // shrinking out: 1 → 0.75
      textScale = t < 0
        ? 0.75 + p * 0.25           // text grows in: 0.75 → 1
        : 1;                         // stays at 1 after
    } else {
      // zoom='out': starts zoomed out, zooms in
      iconScale = t < 0
        ? 0.6 + p * 0.4             // icon zooms in: 0.6 → 1
        : 1 + (1-p) * 0.3;          // then expands out
      textScale = t < 0
        ? 1 + (1-p) * 0.3           // text starts big, normalises
        : 1;
    }

    icon.style.transform = `scale(${iconScale.toFixed(3)})`;
    text.style.transform = `scale(${textScale.toFixed(3)})`;
    // Opacity: text fades in as it enters centre
    text.style.opacity = Math.max(0.4, p).toFixed(3);
  });
}

/* SEAMLESS BACKGROUND BLEND
   Body bg colour transitions smoothly
   between sections when we scroll
   feels like walking through nature. */
const bgStops = {
  morning: [
    { id:'hero',        bg:'#1a5a8a' },
    { id:'sec-flowers', bg:'#1a5c1a' },
    { id:'sec-pond',    bg:'#0f4c5c' },
    { id:'sec-trees',   bg:'#0a2010' },
    { id:'sec-grass',   bg:'#064e3b' },
    { id:'sec-sunmoon', bg:'#78350f' },
    { id:'sec-closing', bg:'#111'    },
  ],
  night: [
    { id:'hero',        bg:'#020818' },
    { id:'sec-flowers', bg:'#0d0520' },
    { id:'sec-pond',    bg:'#020818' },
    { id:'sec-trees',   bg:'#010301' },
    { id:'sec-grass',   bg:'#010401' },
    { id:'sec-sunmoon', bg:'#020818' },
    { id:'sec-closing', bg:'#000'    },
  ],
};

function blendBackground() {
  const sy  = window.scrollY + window.innerHeight * 0.5;
  const stops = bgStops[mode];

  // Find which two stops we're between
  let fromStop = stops[0], toStop = stops[1];
  for (let i = 0; i < stops.length - 1; i++) {
    const aEl = document.getElementById(stops[i].id);
    const bEl = document.getElementById(stops[i+1].id);
    if (!aEl || !bEl) continue;
    const aTop = aEl.offsetTop;
    const bTop = bEl.offsetTop;
    if (sy >= aTop && sy < bTop) {
      fromStop = stops[i];
      toStop   = stops[i+1];
      break;
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
  // Interpolate hex colours
  document.getElementById('body').style.background = lerpColor(fromStop.bg, toStop.bg, Math.min(1, Math.max(0, progress)));
}

function lerpColor(a, b, t) {
  const ah = a.replace('#','');
  const bh = b.replace('#','');
  const ar = parseInt(ah.substring(0,2),16), ag = parseInt(ah.substring(2,4),16), ab = parseInt(ah.substring(4,6),16);
  const br = parseInt(bh.substring(0,2),16), bg = parseInt(bh.substring(2,4),16), bb = parseInt(bh.substring(4,6),16);
  const rr = Math.round(ar + (br-ar)*t).toString(16).padStart(2,'0');
  const rg = Math.round(ag + (bg-ag)*t).toString(16).padStart(2,'0');
  const rb = Math.round(ab + (bb-ab)*t).toString(16).padStart(2,'0');
  return '#' + rr + rg + rb;
}

/* ANNOUNCER */
const sectionAnnounces = {
  'sec-flowers': { morning:'🌸 She kisses them good morning…', night:'🌙 She sings them to sleep…' },
  'sec-pond':    { morning:'💧 She makes the pond ripple…',    night:'⭐ She shows the moon its reflection…' },
  'sec-trees':   { morning:'🌿 She hugs every trunk…',          night:'🌳 She hangs firefly lanterns…' },
  'sec-grass':   { morning:'💚 She dances barefoot…',           night:'🌾 She sleeps between two blades…' },
  'sec-sunmoon': { morning:'☀️ She blows the sun a kiss…',       night:'🌙 She scatters moonbeams…' },
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
  el.textContent  = text;
  el.style.opacity = '1';
  el.classList.remove('hidden');
  announceTimer = setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.classList.add('hidden'), 500);
  }, 3000);
}

/* CURSOR GLOW */
function initGlow() {
  const g = document.createElement('div');
  g.style.cssText = 'position:fixed;width:340px;height:340px;border-radius:50%;pointer-events:none;z-index:1;mix-blend-mode:screen;transform:translate(-50%,-50%);transition:background 1s;';
  document.body.appendChild(g);
  document.addEventListener('mousemove', e => {
    g.style.left = e.clientX+'px'; g.style.top = e.clientY+'px';
    g.style.background = mode === 'morning'
      ? 'radial-gradient(circle,rgba(255,240,100,0.07) 0%,transparent 70%)'
      : 'radial-gradient(circle,rgba(130,255,160,0.04) 0%,transparent 70%)';
  });
}

/* SCROLL */
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

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  generateStars('starsLayer', 120);
  generateStars('sunmoonStars', 80);
  generateFireflies();
  generateClouds();
  buildGrass('morning');
  initGlow();
  applyMorning();
  runZoom();
  blendBackground();
  setTimeout(() => speak('✨ Welcome to Luma\'s world…'), 1500);
});
