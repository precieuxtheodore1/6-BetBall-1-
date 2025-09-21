const pool = document.getElementById('pool'), pctx = pool.getContext('2d');
let ball={x:300,y:175,r:10},target={x:500,y:175,r:10},scoreB=0;
function drawB(){ pctx.clearRect(0,0,pool.width,pool.height); pctx.beginPath(); pctx.fillStyle='white'; pctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI); pctx.fill(); pctx.beginPath(); pctx.fillStyle='yellow'; pctx.arc(target.x,target.y,target.r,0,2*Math.PI); pctx.fill(); }
pool.addEventListener('click', e=>{ const dx=e.offsetX-ball.x, dy=e.offsetY-ball.y; ball.x+=dx*0.5; ball.y+=dy*0.5; if(Math.hypot(ball.x-target.x,ball.y-target.y) < ball.r+target.r){ scoreB++; ball.x=300; ball.y=175; alert('Bille rentrée !'); } drawB();});
drawB();
document.getElementById('end').addEventListener('click', async ()=>{ const matchId=localStorage.getItem('matchId')||'test-match'; const winner = scoreB>=1 ? 'owner':'opponent'; await fetch(`/api/matches/${matchId}/finish`,{ method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ winner, score: scoreB })}); alert('Match envoyé');});
