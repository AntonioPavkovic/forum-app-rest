const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const forumRoutes = require('./routes/forumRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const port = process.env.PORT || 5000;


const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect(
            'mongodb-uri',
            connectionParams
            );
        console.log('Database connected succesfully');
    } catch (error) {
        console.log(error);
        console.log('database connection failed');
    }

});

database();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/forums', forumRoutes);
app.use('/forums', postRoutes);
app.use('/forums', commentRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});