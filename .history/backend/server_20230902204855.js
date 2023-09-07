const express = require('express');
const app = express();
const port = 5000;

use("/post", require("./"))

//server
app.listen(port, () => console.log("server start at port : "+port) );