const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.json({ message: "Voici les données"})
});
router.post("/", (req,res) => {
    console.log(req.body);
    res.json({ message: req.body.message})
});
router.put("/:id", (req,res) => {
    console.log(req.body);
    res.json({ message: req.body.message + req.params.id})
});

module.exports = router