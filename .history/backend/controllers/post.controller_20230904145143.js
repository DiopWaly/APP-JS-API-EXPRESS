const PostModel = require('../models/post.model')

module.exports.getPost = async (req,res) => {
    await PostModel.find().then((posts) => res.status(200).json(posts));
}

module.exports.setPost = async(req, res) => {
    if(!req.body.message)
        res.status(400).json({
            messageError: "Merci d'ajouter un message"});
    
    await PostModel.create({
        message: req.body.message,
        author: req.body.author
    }).then((post) => res.status(200).json(post));

}

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById({_id: req.params.id});
    if(!post)
        res.status(400).json({message: "Ce post n'exist pas !"});
    
    await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    ).then((postUpdate) => res.status(200).json(postUpdate));
}

module.exports.deletePost = async (req,res) =>{
    const post = await PostModel.findById({_id: req.params.id});
    if(!post)
        res.status(400).json({message: "Ce post n'exist pas !"});
    // await PostModel.findOneAndDelete(post);
    await PostModel.deleteById(post).then((data) => res.status(200).json(data));
}
