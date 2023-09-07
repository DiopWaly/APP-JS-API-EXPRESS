const express = require('express');
const app = express();
const port = 5000;

app.listen(port, (req, res) => {
    console.log("server start at port : "+port);
});