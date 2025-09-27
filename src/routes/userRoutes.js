const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create user
router.post("/", userController.createUser);

// Get all users
router.get("/", userController.getUsers);

// Get single user by username
router.get("/:username", userController.getUser);

// Update socketId
router.put("/:username/socket", userController.updateSocket);

// Delete user
router.delete("/:username", userController.deleteUser);

module.exports = router;
