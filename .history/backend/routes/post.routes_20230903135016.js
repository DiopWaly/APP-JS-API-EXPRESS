const express = require('express');
const { setPost, getPost, editPost, deletePost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = router