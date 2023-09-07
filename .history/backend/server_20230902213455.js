const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 5000;

//connexion a la DB
connectDB();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"))

//server
app.listen(port, () => console.log("server start at port : "+port) );