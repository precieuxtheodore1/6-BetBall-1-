const race = document.getElementById('race'), rctx = race.getContext('2d');
let car={x:270,y:300,w:60,h:30},obs=[],dist=0,gameOver=false,finishDist=10000,minDist=1000;
function spawn(){ obs.push({x:Math.random()*540,y:0,w:60,h:30}); }
setInterval(spawn,1400);
document.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft') car.x-=10; if(e.key==='ArrowRight') car.x+=10; });
function drawR(){ rctx.clearRect(0,0,race.width,race.height); rctx.fillStyle='blue'; rctx.fillRect(car.x,car.y,car.w,car.h); rctx.fillStyle='red'; obs.forEach(o=>rctx.fillRect(o.x,o.y,o.w,o.h)); document.getElementById('dist').innerText='Distance: '+dist+' m'; }
function update(){ if(gameOver) return; dist += 15; obs.forEach(o=>o.y+=6); obs = obs.filter(o=>o.y<race.height+50); obs.forEach(o=>{ if(o.x<car.x+car.w && o.x+o.w>car.x && o.y<car.y+car.h && o.y+o.h>car.y){ gameOver=true; end(); } }); drawR(); requestAnimationFrame(update); }
update();
async function end(){ const playerDist=dist, opp= parseInt(localStorage.getItem('opponentDistance'))||0; let winner;
 if(playerDist>=finishDist && opp>=finishDist) winner='restart';
 else if(playerDist>=finishDist) winner='owner';
 else if(opp>=finishDist) winner='opponent';
 else if(playerDist>=minDist && opp<minDist) winner='owner';
 else if(opp>=minDist && playerDist<minDist) winner='opponent';
 else winner='draw';
 const matchId=localStorage.getItem('matchId')||'test-match';
 await fetch(`/api/matches/${matchId}/finish`, { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ winner, distance: playerDist })});
 alert('Course terminée. Distance:'+playerDist+' m'); }
document.getElementById('end').addEventListener('click', end);
