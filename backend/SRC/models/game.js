import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Game", gameSchema);
