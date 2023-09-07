const express = require('express');
const app = express();
const port = 5000;

app.get("/post", (req,res) => {
    res.json({ message: "Voici les données"})
})

app.listen(port, () => console.log("server start at port : "+port) );