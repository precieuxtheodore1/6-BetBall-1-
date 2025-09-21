import Bet from "../models/Bet.js";

export const placeBet = async (req, res) => {
  try {
    const { userId, gameId, amount } = req.body;
    const bet = new Bet({ userId, gameId, amount });
    await bet.save();
    res.status(201).json({ message: "✅ Bet placed!", bet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
