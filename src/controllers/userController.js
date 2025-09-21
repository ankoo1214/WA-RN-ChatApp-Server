const User = require("../models/User");

// Create new user
exports.createUser = async (req, res) => {
  try {
    const { username, number } = req.body;
    const user = new User({ username, number });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single user by username
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update user socketId
exports.updateSocket = async (req, res) => {
  try {
    const { socketId } = req.body;
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { socketId },
      { new: true }
    );
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
