const express = require('express');
const { setPost, getPost, editPost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", editPost);

module.exports = router