let p=100,e=100;
function draw(){ document.getElementById('info').innerText='P:'+p+' | E:'+e; }
document.addEventListener('keydown', eKey=>{ if(eKey.key==='a') e-=15; if(eKey.key==='d') p-=8; draw(); if(p<=0||e<=0) finish(); });
function finish(){ const winner = p>e ? 'owner' : 'opponent'; const matchId = localStorage.getItem('matchId')||'test-match'; fetch(`/api/matches/${matchId}/finish`,{ method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ winner })}); alert('Combat terminé.'); }
document.getElementById('end').addEventListener('click', finish);
draw();
