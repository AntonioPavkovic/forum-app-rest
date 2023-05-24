const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment for a post
router.post('/posts/:post_id/comments', commentController.createComment);

// Get all comments for a post
router.get('/posts/:post_id/comments', commentController.getCommentsByPost);

// Get a single comment by ID
router.get('/posts/comments/:id', commentController.getCommentById);

// Update a comment by ID
router.put('/comments/:id', commentController.updateComment);

// Delete a comment by ID
router.delete('/posts/comments/:id', commentController.deleteComment);

// Like a comment
router.post('/posts/comments/:id/like', commentController.likeComment);

// Dislike a comment
router.post('/posts/comments/:id/dislike', commentController.dislikeComment);

module.exports = router;