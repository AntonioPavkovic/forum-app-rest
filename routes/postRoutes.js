const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post in a forum
router.post('/:forum_id/posts', postController.createPost);

// Get all posts in a forum
router.get('/:forum_id/posts', postController.getPostsByForum);

// Get a single post by ID
router.get('/:forum_id/posts/:id', postController.getPostById);

// Update a post by ID
router.put('/:forum_id/posts/:id', postController.updatePost);

// Delete a post by ID
router.delete('/:forum_id/posts/:id', postController.deletePost);

// Get post by user
router.get('/users/:user_id/posts', postController.getPostsByUser);

// Like a post
router.post('/:forum_id/posts/:id/like', postController.likePost);

// Dislike a post
router.post('/:forum_id/posts/:id/dislike', postController.dislikePost);

module.exports = router;