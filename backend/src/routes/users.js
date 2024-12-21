const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const router = express.Router();

// Routes
router.get("/", getUsers); // Get all users
router.post("/", createUser); // Create a new user

module.exports = router;