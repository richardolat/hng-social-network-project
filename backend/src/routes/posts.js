const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");
const router = express.Router();

// Routes
router.get("/", getPosts); // Get all posts
router.post("/", createPost); // Create a new post

module.exports = router;