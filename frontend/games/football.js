// Jeu Football - Tir au but
function startFootball() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let direction = prompt("Choisis la direction du tir : gauche, centre, droite");
    let gardien = ["gauche", "centre", "droite"][Math.floor(Math.random() * 3)];
    if (direction !== gardien) {
      alert("But 🎉 !");
      score++;
    } else {
      alert("Arrêté par le gardien 🧤");
    }
  }
  alert("Ton score final au football est : " + score + " buts !");
}
