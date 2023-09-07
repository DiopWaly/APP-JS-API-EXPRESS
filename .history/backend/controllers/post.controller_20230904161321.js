const PostModel = require('../models/post.model')

module.exports.getPost = async (req,res) => {
    await PostModel.find().then((posts) => res.status(200).json(posts));
}

module.exports.setPost = async(req, res) => {
    await PostModel.create({
        message: req.body.message,
        author: req.body.author
    }).then((post) => res.status(200).json(post))
    .catch((err) => res.status(400).send(err));

}

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById({_id: req.params.id});
    if(!post)
        res.status(400).json({message: "Ce post n'exist pas !"});
    
    await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    ).then((postUpdate) => res.status(200).json(postUpdate))
    .catch((err) => res.status(400).json(err));
}

module.exports.deletePost = async (req,res) =>{
    const post = await PostModel.findById({_id: req.params.id});
    if(!post)
        res.status(400).json({message: "Ce post n'exist pas !"});
    await PostModel.findOneAndDelete(post).then((data) => res.status(200).json(data));
}

module.exports.likePost = async (req,res) => {
    await PostModel.findByIdAndUpdate(
        req.params.id,
        {$addToSet: {likers: req.body.userId}},
        {new: true}
    ).then((post) => res.status(200).send(post))
    .catch((err) => res.status(400).json(err))
}
module.exports.dislikePost = async (req,res) => {
    await PostModel.findByIdAndUpdate(
        req.params.id,
        {$pull: {likers: req.body.userId}},
        {new: true}
    ).then((post) => res.status(200).send(post))
    .catch((err) => res.status(400).json(err))
}
