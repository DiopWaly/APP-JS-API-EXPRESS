const express = require('express');
const { setPost, getPost, editPost, deletePost, likePost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/:id", likePost);

module.exports = router