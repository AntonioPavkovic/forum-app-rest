const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res) => {
    const { post_id } = req.params;
    const { text, user_id } = req.body;
  
    try {
      const post = await Post.findById(post_id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found!' });
      }
  
      const comment = new Comment({
        text,
        post_id,
        user_id
      });
  
      const newComment = await comment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
const getCommentsByPost = async (req, res) => {
    const { post_id } = req.params;
  
    try {
      const comments = await Comment.find({ post_id });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
const getCommentById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found!' });
      }
  
      res.json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
const updateComment = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found!' });
      }
  
      comment.text = text;
      const updatedComment = await comment.save();
      res.json(updatedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
const deleteComment = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedComment = await Comment.deleteOne({ _id: id });
      if (deletedComment.deletedCount === 0) {
        return res.status(404).json({ message: 'Comment not found!' });
      }
  
      res.json({ message: 'Comment deleted!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
const likeComment = async (req, res) => {
    const { id } = req.params;
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found!' });
      }
  
      comment.vote_count += 1;
      const updatedComment = await comment.save();
      res.json(updatedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
const dislikeComment = async (req, res) => {
    const { id } = req.params;
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found!' });
      }
  
      comment.vote_count -= 1;
      const updatedComment = await comment.save();
      res.json(updatedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
module.exports = {
    createComment,
    getCommentsByPost,
    getCommentById,
    updateComment,
    deleteComment,
    likeComment,
    dislikeComment
};