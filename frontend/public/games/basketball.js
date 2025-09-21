let score=0, time=60;
const scoreEl=document.getElementById('score'), timeEl=document.getElementById('time');
document.addEventListener('keydown', e=>{
  if(e.key===' ') { if(Math.random()>0.45) score++; scoreEl.innerText='Score: '+score; }
});
const t = setInterval(()=>{ time--; timeEl.innerText='Temps:'+time; if(time<=0){ clearInterval(t); finish(); } },1000);
async function finish(){
  const matchId = localStorage.getItem('matchId') || 'test-match';
  const winner = score>=5 ? 'owner' : 'opponent';
  try{
    await fetch(`/api/matches/${matchId}/finish`,{
      method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')},
      body: JSON.stringify({ winner, score })
    });
    alert('Match envoyé. Score: '+score);
  }catch(e){ alert('Erreur en envoyant'); console.error(e); }
}
document.getElementById('end').addEventListener('click', finish);
