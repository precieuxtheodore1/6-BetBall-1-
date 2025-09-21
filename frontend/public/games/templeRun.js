const tm = document.getElementById('tm'), tctx = tm.getContext('2d');
let runner={x:50,y:300,w:30,h:50,vy:0}, obsT=[],distT=0,gameOverT=false,finishT=2000,minT=1000;
function spawnT(){ obsT.push({x:600,y:320,w:30,h:30}); } setInterval(spawnT,1500);
document.addEventListener('keydown', e=>{ if(e.key===' ') runner.vy=-14; });
function drawT(){ tctx.clearRect(0,0,tm.width,tm.height); tctx.fillStyle='green'; tctx.fillRect(runner.x,runner.y,runner.w,runner.h); tctx.fillStyle='brown'; obsT.forEach(o=>tctx.fillRect(o.x,o.y,o.w,o.h)); document.getElementById('d').innerText='Distance: '+distT+' m'; }
function updateT(){ if(gameOverT) return; runner.vy+=1; runner.y+=runner.vy; if(runner.y>300) runner.y=300, runner.vy=0; obsT.forEach(o=>o.x-=5); obsT=obsT.filter(o=>o.x+o.w>0); obsT.forEach(o=>{ if(o.x<runner.x+runner.w && o.x+o.w>runner.x && o.y<runner.y+runner.h && o.y+o.h>runner.y){ gameOverT=true; finishTfn(); } }); distT+=5; drawT(); requestAnimationFrame(updateT); }
updateT();
async function finishTfn(){ const pDist=distT, opp= parseInt(localStorage.getItem('opponentDistance'))||0; let winner;
 if(pDist>=finishT && opp>=finishT) winner='restart';
 else if(pDist>=finishT) winner='owner';
 else if(opp>=finishT) winner='opponent';
 else if(pDist>=minT && opp<minT) winner='owner';
 else if(opp>=minT && pDist<minT) winner='opponent';
 else winner='draw';
 const matchId=localStorage.getItem('matchId')||'test-match';
 await fetch(`/api/matches/${matchId}/finish`,{ method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ winner, distance:pDist })});
 alert('Temple Run terminé. Distance:'+pDist+' m'); }
document.getElementById('end').addEventListener('click', finishTfn);
