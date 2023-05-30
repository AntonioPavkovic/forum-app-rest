const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment for a post
router.post('/:forum_id/posts/:post_id/comments', commentController.createComment);

// Get all comments for a post
router.get('/:forum_id/posts/:post_id/comments', commentController.getCommentsByPost);

// Get a single comment by ID
router.get('/:forum_id/posts/comments/:id', commentController.getCommentById);

// Update a comment by ID
router.put('/:forum_id/posts/:post_id/comments/:id', commentController.updateComment);

// Delete a comment by ID
router.delete('/:forum_id/posts/:post_id/comments/:id', commentController.deleteComment);

// Like a comment
router.post('/:forum_id/posts/:post_id/comments/:id/like', commentController.likeComment);

// Dislike a comment
router.post('/:forum_id/posts/:post_id/comments/:id/dislike', commentController.dislikeComment);

module.exports = router;