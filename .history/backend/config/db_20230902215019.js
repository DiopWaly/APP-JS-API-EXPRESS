const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6",
        () => console.log("connecté"))
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;