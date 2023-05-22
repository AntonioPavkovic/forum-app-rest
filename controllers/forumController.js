const Forum = require('../models/Forum');

const createForum = async (req, res) => {

    const { name, description, user_id } = req.body;

    try {
        const forum = new Forum({
            name,
            description,
            user_id
        });

        const newForum = await forum.save();
        res.status(201).json(newForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllForums = async (req, res) => {

    try {
        const forums = await Forum.find();
        res.json(forums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getForumById = async (req, res) => {
    const { id } = req.params;

    try {
        const forum = await Forum.findById(id);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found' });
        }

        res.json(forum);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateForum = async (req, res) => {

    console.log(req.body);
    const { id } = req.params;
    const { name, description, user_id } = req.body;
  
    try {
      const forum = await Forum.findById(id);
      if (!forum) {
        return res.status(404).json({ message: 'Forum not found' });
      }
      forum.name = name;
      forum.description = description;
      forum.user_id = user_id;
      const updatedForum = await forum.save();
      res.json(updatedForum);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


const deleteForum = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedForum = await Forum.deleteOne({ _id: id });
  
      if (deletedForum.deletedCount === 0) {
        return res.status(404).json({ message: 'Forum not found' });
      }
  
      res.json({ message: 'Forum deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {
    createForum,
    getAllForums,
    getForumById,
    updateForum,
    deleteForum,
};