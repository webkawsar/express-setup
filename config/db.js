const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_LOCAL_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database Connected');
    } catch (error) {
        console.log(`Database Connection Error: ${error.message}`);
    }
};

module.exports = connectDB;
