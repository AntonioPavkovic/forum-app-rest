const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

// Create a new forum
router.post('/', forumController.createForum);

// Get all forums
router.get('/', forumController.getAllForums);

// Get a single forum by ID
router.get('/:id', forumController.getForumById);

// Update a forum by ID
router.put('/:id', forumController.updateForum);

// Delete a forum by ID
router.delete('/:id', forumController.deleteForum);

module.exports = router;