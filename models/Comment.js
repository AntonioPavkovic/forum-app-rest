const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    created_at: { type: Date, default: Date.now },
    vote_count: { type: Number, default: 0 },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;