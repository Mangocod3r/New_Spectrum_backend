const Post = require('../models/other').Post;

// Create a new post
exports.createPost = (req, res) => {
  const newPost = new Post(req.body);
  newPost.save()
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json(err));
};

// Get all posts
exports.getPosts = (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json(err));
};

// Get a specific post by title
exports.getPostByTitle = (req, res) => {
  const title = req.params.title;
  Post.find({ title })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    })
    .catch((err) => res.status(400).json(err));
};

// Get a specific post by header
exports.getPostByHeader = (req, res) => {
  const header = req.params.header;
  Post.find({ header })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    })
    .catch((err) => res.status(400).json(err));
};

// Update a post by ID
exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const updateData = req.body;
  Post.findByIdAndUpdate(postId, updateData, { new: true })
    .then((updatedPost) => {
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(updatedPost);
    })
    .catch((err) => res.status(400).json(err));
};

// Delete a post by ID
exports.deletePost = (req, res) => {
  const postId = req.params.id;
  Post.findByIdAndDelete(postId)
    .then((deletedPost) => {
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json({ message: 'Post deleted successfully' });
    })
    .catch((err) => res.status(400).json(err));
}

const Post1 = require('../models/other').Post1;
// Controller function to get all posts
exports.getAllPosts = (req, res) => {
  Post1.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(500).json({ error: err.message }));
};