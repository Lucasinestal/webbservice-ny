const model = require("../models/postsModels")

exports.findAllPosts = async (req, res) => {
   const posts = await model.findAll()
    res.send(posts)
    }


exports.createNewPost = async (req, res) => {
    let post = {
        title: req.body.title,
        content: req.body.content
    }
    const createdPost = await model.createPost(post)
    res.send(createdPost)
}

exports.findPostById = async (req, res) => {
    let id = req.params.id
    const findPost = await model.findPost(id)
    res.send(findPost)
}

exports.updatePost = async (req, res) => {
    let id = req.params.id
    let body = req.body
    console.log(body.title, body.content)
    const updatedPost = await model.updatedPost(id, body)
    res.send(updatedPost)
}

exports.deletePost = async (req, res) => {
    let id = req.params.id
    const deletedPost = await model.deletedPost(id)
    console.log(deletedPost)
    res.send(deletedPost)
}






