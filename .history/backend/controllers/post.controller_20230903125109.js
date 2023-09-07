const PostModel = require('../models/post.model')

module.exports.setPost = (req, res) => {
    if(!res.body.message)
        res.status(400).json({messageError: "Merci d'ajouter un message"});
    res.json({message: "Ca fonctionne !"});
}