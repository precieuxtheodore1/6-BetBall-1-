// Jeu Karaté - Réflexe
function startKarate() {
  let moves = ["coup de poing", "coup de pied", "blocage"];
  let playerMove = prompt("Choisis ton attaque : coup de poing / coup de pied / blocage");
  let opponentMove = moves[Math.floor(Math.random() * moves.length)];

  alert("Ton choix : " + playerMove + "\nChoix de l’adversaire : " + opponentMove);

  if (playerMove === opponentMove) {
    alert("⚔️ Égalité !");
  } else if (
    (playerMove === "coup de poing" && opponentMove === "blocage") ||
    (playerMove === "coup de pied" && opponentMove === "coup de poing") ||
    (playerMove === "blocage" && opponentMove === "coup de pied")
  ) {
    alert("😢 L’adversaire gagne !");
  } else {
    alert("🥋 Tu gagnes !");
  }
}
