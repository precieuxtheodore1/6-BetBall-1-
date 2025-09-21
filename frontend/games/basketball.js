// Jeu Basketball - Lancer franc
function startBasketball() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let chance = Math.random();
    if (chance > 0.4) {
      alert("Panier 🏀 !");
      score++;
    } else {
      alert("Raté ❌");
    }
  }
  alert("Ton score final au basketball est : " + score + " paniers !");
}
