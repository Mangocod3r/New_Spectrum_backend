const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)
// Route to create a new post
router.post('/create', postController.createPost);

// Route to get all posts
router.get('/posts', postController.getPosts);

router.get('/posts_main', postController.getAllPosts);

// Route to get a specific post by title
router.get('/posts/:title', postController.getPostByTitle);

// Route to get a specific post by header
router.get('/postsh/:header', postController.getPostByHeader);

// Route to update a post by ID
router.put('/update/:id', postController.updatePost);

// Route to delete a post by ID
router.delete('/delete/:id', postController.deletePost);

module.exports = router;
