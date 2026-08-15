// starfield
  const c = document.getElementById('stars'), ctx = c.getContext('2d');
  function resize(){ c.width = innerWidth; c.height = document.body.scrollHeight; }
  resize(); addEventListener('resize', resize);
  const stars = Array.from({length:140}, () => ({
    x: Math.random()*c.width, y: Math.random()*c.height,
    r: Math.random()*1.4+0.3, a: Math.random()
  }));
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    stars.forEach(s=>{
      s.a += (Math.random()-0.5)*0.02;
      ctx.globalAlpha = Math.max(0.15, Math.min(1, Math.abs(Math.sin(s.a))));
      ctx.fillStyle = '#c4b5fd';
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,7); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();

  // typewriter
  const roles = ["Finance Analyst", "Automation Builder", "Power BI Developer", "AP Ops Specialist"];
  const el = document.getElementById('typed');
  let ri=0, ci=0, deleting=false;
  function tick(){
    const word = roles[ri];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    if(!deleting && ci === word.length+1){ deleting = true; setTimeout(tick, 1200); return; }
    if(deleting && ci === 0){ deleting = false; ri = (ri+1)%roles.length; }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();