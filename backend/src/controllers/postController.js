// Mock Data
const posts = [];

// Get All Posts
exports.getPosts = (req, res) => {
  res.json(posts);
};

// Create a New Post
exports.createPost = (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = { id: posts.length + 1, title, content, userId };
  posts.push(newPost);
  res.status(201).json(newPost);
};