const canvasD = document.getElementById('board'), ctxD = canvasD.getContext('2d');
const ROWS=20, COLS=20, CELL=canvasD.width/COLS;
let board=[];
for(let r=0;r<ROWS;r++){ board[r]=[]; for(let c=0;c<COLS;c++){ if(r<5 && (r+c)%2==1) board[r][c]='B'; else if(r>14 && (r+c)%2==1) board[r][c]='W'; else board[r][c]=''; }} 
function drawBoard(){ for(let r=0;r<ROWS;r++){ for(let c=0;c<COLS;c++){ ctxD.fillStyle=(r+c)%2==0?'#f0d9b5':'#b58863'; ctxD.fillRect(c*CELL,r*CELL,CELL,CELL); if(board[r][c]){ ctxD.fillStyle=board[r][c]==='B'?'black':'white'; ctxD.beginPath(); ctxD.arc(c*CELL+CELL/2,r*CELL+CELL/2,CELL/2-4,0,2*Math.PI); ctxD.fill(); }}}}
drawBoard();
let sel=null;
canvasD.addEventListener('click', e=>{ const c=Math.floor(e.offsetX/CELL), r=Math.floor(e.offsetY/CELL); if(sel){ board[r][c]=board[sel.r][sel.c]; board[sel.r][sel.c]=''; sel=null; drawBoard(); } else { if(board[r][c]) sel={r,c}; }});
document.getElementById('end').addEventListener('click', async ()=>{
  const matchId=localStorage.getItem('matchId')||'test-match';
  const winner = Math.random()>0.5 ? 'owner' : 'opponent';
  await fetch(`/api/matches/${matchId}/finish`, { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ winner })});
  alert('Partie terminée (envoi simulé)');
});
