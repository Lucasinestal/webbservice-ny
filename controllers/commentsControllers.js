const model = require("../models/commentsModels")

findAllComments = async (req, res) => {
   const comments = await model.getComments()
    res.send(comments)
    console.log(comments)
    }


createNewComment = async (req, res) => {
    let comment = {
        postId: req.params.id,
        content: req.body.content
    }
    const createdComment = await model.createComment(comment)
    res.send(createdComment)
}

findCommentById = async (req, res) => {
    let postId = req.params.id
    const findComment = await model.findComment(postId)
    res.send(findComment)
}

updateComment = async (req, res) => {
    let postId = req.params.id
    let body = req.body
    console.log(body.content)
    const updatedComment = await model.updatedComment(postId, body)
    res.send(updatedComment)
}

deleteComment = async (req, res) => {
    let id = req.params.id
    const deletedComment = await model.deletedComment(id)
    console.log(deletedComment)
    res.send(deletedComment)
}


module.exports = {findAllComments, createNewComment, findCommentById, updateComment, deleteComment}





