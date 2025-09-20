const express = require("express");
const router = express.Router();

let games = [
  { id: 1, name: "Football", status: "open" },
  { id: 2, name: "Basketball", status: "open" },
  { id: 3, name: "Dames", status: "open" },
  { id: 4, name: "Temple Run", status: "open" },
  { id: 5, name: "Racing", status: "open" },
  { id: 6, name: "Karaté", status: "open" }
];

// Liste des jeux
router.get("/", (req, res) => {
  res.json(games);
});

// Changer statut d'un jeu
router.put("/:id", (req, res) => {
  const game = games.find((g) => g.id === parseInt(req.params.id));
  if (!game) return res.status(404).json({ message: "Jeu introuvable" });

  game.status = req.body.status || game.status;
  res.json({ message: "✅ Jeu mis à jour", game });
});

module.exports = router;
