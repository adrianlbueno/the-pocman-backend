// db.js
require("dotenv").config();
const mongoose = require("mongoose");

if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined");
    process.exit(1);
}

const MONGO_URI = process.env.MONGODB_URI;
const options = { autoIndex: true };

const connectDb = async () => {
    try {
       const connection = await mongoose.connect(MONGO_URI, options);
       console.log(`Connected to MongoDB database: ${connection.connection.name}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDb;
