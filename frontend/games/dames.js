// Jeu de Dames - Plateau 20x20
function startDames() {
  const size = 20;
  let board = [];

  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = ((i + j) % 2 === 0) ? "⬜" : "⬛";
    }
  }

  let display = "";
  for (let row of board) {
    display += row.join("") + "\n";
  }

  alert("Plateau de Dames 20x20 généré :\n\n" + display);
}
