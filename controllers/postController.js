const Post = require('../models/Post');
const Forum = require('../models/Forum');

const createPost = async (req, res) => {

    const { post_name, description, user_id, forum_id } = req.body;

    try {
        const forum = await Forum.findById(forum_id);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found!' });
        }

        const post = new Post({
            post_name,
            description,
            user_id,
            forum_id
        });

        const newPost = await post.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const getPostsByForum = async (req, res) => {

    const { forum_id } = req.params;

    try {

        const forum = await Forum.findById(forum_id);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found!' });
        }

        const posts = await Post.find({ forum_id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getPostById = async (req, res) => {

    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const updatePost = async (req, res) => {

    const { id } = req.params;
    const { post_name, description, user_id } = req.body;

    try {

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        post.post_name = post_name;
        post.description = description;
        post.user_id = user_id;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const deletePost = async (req, res) => {

    const { id } = req.params;

    try {

        const deletedPost = await Post.deleteOne({ _id: id });

        if (deletedPost.deletedCount === 0) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        res.json({ message: 'Post deleted!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


const getPostsByUser = async (req, res) => {

    const { user_id } = req.params;

    try {

        const posts = await Post.find({ user_id });
        
        if (!posts) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const likePost = async (req, res) => {

    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        post.vote_count += 1;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const dislikePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found!' });
        }

        post.vote_count -= 1;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPostsByForum,
    getPostById,
    updatePost,
    deletePost,
    likePost,
    dislikePost,
    getPostsByUser
};