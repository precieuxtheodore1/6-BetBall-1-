const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

let users = []; // Temporaire (remplace une vraie base MongoDB)

// Inscription
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Utilisateur déjà existant" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: "✅ Inscription réussie" });
});

// Connexion
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "Utilisateur introuvable" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: "Mot de passe incorrect" });

  const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
  res.json({ message: "✅ Connexion réussie", token });
});

module.exports = router;
