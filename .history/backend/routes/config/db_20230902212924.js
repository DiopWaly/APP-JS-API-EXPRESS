const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb://127.0.0.1:27017/mynodedb",
        () => console.log("connecté"))
    } catch (err) {
        console.log(err);
        process.exit();
    }
}