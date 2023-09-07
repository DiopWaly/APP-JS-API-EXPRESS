const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        // mongoose.connect("mongodb://127.0.0.1:27017/test",
        // () => console.log("connecté"))
        mongoose.connect('mongodb://127.0.0.1:27017/test',
        {useNewUrlParser: true, useUnifiedTopology: true});
        // db = mongoose.connection;
        // db.on('error', console.error.bind(console, 'connection error:'));
        // db.connection.once('open', ()=>console.log("connecté a mongoose"));
        console.log("connecté")
    } catch (err) {
        console.log(err);
        process.exit();
    }
    // mongoose.connect('mongodb://127.0.0.1:27017/test',
    // {useNewUrlParser: true, useUnifiedTopology: true});
    // db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', ()=>console.log("connecté a mongoose"));
};

module.exports = connectDB;