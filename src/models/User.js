const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    socketId: { type: String, default: null }, // updated on connection
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
