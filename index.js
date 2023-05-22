const express = require('express');
const mongoose = require('mongoose');
const forumRoutes = require('./routes/forumRoutes');

const app = express();
const port = process.env.PORT || 5000;


const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect(
            'mongodb-atlas-uri',
            connectionParams
            );
        console.log('Database connected succesfully');
    } catch (error) {
        console.log(error);
        console.log('database connection failed');
    }

});

database();

app.use(express.json());
app.use('/forums', forumRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});