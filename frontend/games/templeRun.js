// Jeu Temple Run
function startTempleRun() {
  let playerDistance = Math.floor(Math.random() * 2000);
  let opponentDistance = Math.floor(Math.random() * 2000);

  alert("Ta distance : " + playerDistance + " m\nDistance de l'adversaire : " + opponentDistance + " m");

  if (playerDistance < 1000 && opponentDistance < 1000) {
    alert("❌ Aucun joueur n’a atteint 1000m. Les deux perdent.");
  } else if (playerDistance >= 2000 && opponentDistance >= 2000) {
    alert("⚔️ Les deux sont arrivés à 2000m ! Rejouez.");
  } else if (playerDistance > opponentDistance) {
    alert("🎉 Tu gagnes la mise !");
  } else if (opponentDistance > playerDistance) {
    alert("😢 L’adversaire gagne !");
  } else {
    alert("Égalité parfaite !");
  }
}
