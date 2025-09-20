const express = require("express");
const router = express.Router();

let bets = [];

// Créer une mise
router.post("/", (req, res) => {
  const { user, game, amount } = req.body;
  bets.push({ user, game, amount, date: new Date() });
  res.json({ message: "✅ Mise enregistrée" });
});

// Voir toutes les mises
router.get("/", (req, res) => {
  res.json(bets);
});

module.exports = router;
