// starfield
const c = document.getElementById('stars'), ctx = c.getContext('2d');
function resize(){ c.width = innerWidth; c.height = Math.max(innerHeight, document.body.scrollHeight); }
resize(); addEventListener('resize', resize);
const stars = Array.from({length:160}, () => ({
  x: Math.random()*c.width, y: Math.random()*c.height,
  r: Math.random()*1.6+0.3, a: Math.random()*Math.PI*2
}));
function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  stars.forEach(s=>{
    s.a += (Math.random()-0.5)*0.02;
    ctx.globalAlpha = 0.35*Math.abs(Math.sin(s.a)) + 0.1;
    ctx.fillStyle = '#c4b5fd';
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();

// typewriter (retro)
const roles = ["Sleek Automation Architect", "Spreadsheet Therapist", "Power BI Whisperer", "Unapologetic Excel Wrestler"];
const el = document.getElementById('typed');
let ri=0, ci=0, deleting=false;
function tick(){
  const word = roles[ri];
  if(!deleting){ el.textContent = word.slice(0, ci++); }
  else { el.textContent = word.slice(0, ci--); }
  if(!deleting && ci === word.length+1){ deleting = true; setTimeout(tick, 1200); return; }
  if(deleting && ci === 0){ deleting = false; ri = (ri+1)%roles.length; }
  setTimeout(tick, deleting ? 30 : 70);
}
setTimeout(tick, 400);

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
},{threshold:0.12});
reveals.forEach(r=>io.observe(r));

// small accessibility: prefers-reduced-motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
if(mq.matches){ reveals.forEach(r=>r.classList.add('visible')); }