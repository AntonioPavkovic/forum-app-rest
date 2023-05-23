const User = require('../models/User');

const createUser = async (req, res) => {

    try {

        const { username, password, email } = req.body;

        const user = new User({ username, email, password });
        const newUser = await user.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const getUsers = async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getUserById = async (req, res) => {

    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).message({ message: 'User not found!' });
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { username, password, email } = req.body;

    try {

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }


        user.username = username;
        user.password = password;
        user.email = email;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const deleteUser = async (req, res) => {

    const { id } = req.params;

    try {

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        
        res.json({ message: 'User deleted!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser 
};