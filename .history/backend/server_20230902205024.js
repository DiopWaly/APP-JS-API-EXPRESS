const express = require('express');
const app = express();
const port = 5000;

app.use("/post", require("./routes/post.routes"))

//server
app.listen(port, () => console.log("server start at port : "+port) );