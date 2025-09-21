// Mini Soccer (simple)
const canvas = document.getElementById('soccer');
const ctx = canvas.getContext('2d');
let ball = {x:300,y:175,r:10}, goal = {x:560,y:125,w:20,h:100}, score=0;
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='green'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='yellow'; ctx.fillRect(goal.x,goal.y,goal.w,goal.h);
  ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI); ctx.fill();
}
document.addEventListener('keydown', e=>{
  if(e.key==='ArrowUp') ball.y-=10;
  if(e.key==='ArrowDown') ball.y+=10;
  if(e.key==='ArrowLeft') ball.x-=10;
  if(e.key==='ArrowRight') ball.x+=10;
  if(ball.x+ball.r>goal.x && ball.y>goal.y && ball.y<goal.y+goal.h){
    score++; ball.x=300; ball.y=175; document.getElementById('score').innerText='Score: '+score;
  }
  draw();
});
draw();
document.getElementById('end').addEventListener('click', async ()=>{
  const matchId = localStorage.getItem('matchId') || 'test-match';
  const winner = score>=1 ? 'owner' : 'opponent';
  try{
    await fetch(`/api/matches/${matchId}/finish`,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')},
      body: JSON.stringify({ winner, score })
    });
    alert('Match envoyé. Score: '+score);
  }catch(e){
    console.error(e);
    alert('Erreur en envoyant le résultat (vérifie le backend)');
  }
});
