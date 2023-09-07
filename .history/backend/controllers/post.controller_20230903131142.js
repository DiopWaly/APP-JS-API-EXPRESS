const PostModel = require('../models/post.model')

module.exports.getPost = async (req,res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
}

module.exports.setPost = async(req, res) => {
    if(!req.body.message)
        res.status(400).json({
            messageError: "Merci d'ajouter un message"});
    
    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author
    });
    res.status(200).json(post);

}