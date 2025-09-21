// Jeu Course/Racing
function startRacing() {
  let playerDistance = Math.floor(Math.random() * 10000);
  let opponentDistance = Math.floor(Math.random() * 10000);

  alert("Ta distance : " + playerDistance + " m\nDistance de l'adversaire : " + opponentDistance + " m");

  if (playerDistance < 1000 && opponentDistance < 1000) {
    alert("❌ Aucun joueur n’a atteint 1 km. Les deux perdent.");
  } else if (playerDistance >= 10000 && opponentDistance >= 10000) {
    alert("⚔️ Les deux ont terminé la course ! Rejouez.");
  } else if (playerDistance > opponentDistance) {
    alert("🚗 Tu gagnes la course !");
  } else if (opponentDistance > playerDistance) {
    alert("🏍️ L’adversaire gagne !");
  } else {
    alert("Égalité parfaite !");
  }
}
