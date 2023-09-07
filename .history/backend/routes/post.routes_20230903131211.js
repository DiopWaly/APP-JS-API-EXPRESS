const express = require('express');
const { setPost, getPost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", (req,res) => {
    console.log(req.body);
    res.json({ message: req.body.message + req.params.id})
});

module.exports = router