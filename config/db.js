const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_LOCAL_URI;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Kawsar:aVOqeCyeo0UFQhrh@cluster0.u2izr.mongodb.net/contact-manager");
        console.log('Database Connected');
    } catch (error) {
        console.log(`Database Connection Error: ${error}`);
    }
};

module.exports = connectDB;
