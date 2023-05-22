const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post in a forum
router.post('/:forum_id/posts', postController.createPost);

// Get all posts in a forum
router.get('/:forum_id/posts', postController.getPostsByForum);

// Get a single post by ID
router.get('/posts/:id', postController.getPostById);

// Update a post by ID
router.put('/posts/:id', postController.updatePost);

// Delete a post by ID
router.delete('/posts/:id', postController.deletePost);

// Like a post
router.post('/posts/:id/like', postController.likePost);

// Dislike a post
router.post('/posts/:id/dislike', postController.dislikePost);

module.exports = router;