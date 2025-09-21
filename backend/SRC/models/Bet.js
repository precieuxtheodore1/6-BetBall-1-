import mongoose from "mongoose";

const betSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  amount: Number,
});

export default mongoose.model("Bet", betSchema);
