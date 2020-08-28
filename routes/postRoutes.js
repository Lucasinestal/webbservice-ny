const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsControllers');
const commentsController = require('../controllers/commentsControllers');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

// post routes

router.get('/posts', jsonParser, postsController.findAllPosts);

router.get("/posts/:id", jsonParser, postsController.findPostById);

router.post("posts/:id/edit", jsonParser, postsController.updatePost);

router.post("posts/create", jsonParser, postsController.createNewPost);

router.post("/posts/:id/delete", jsonParser, postsController.deletePost);

// comment routes

router.get('/comments', jsonParser, commentsController.findAllComments);

router.get("/posts/comments/:id", jsonParser, commentsController.findCommentById);

router.post("/posts/comments/:id/edit", jsonParser, commentsController.updateComment);

router.post("/posts/comment/:id/create", jsonParser, commentsController.createNewComment);

router.post("/posts/comment/:id/delete", jsonParser, commentsController.deleteComment);



module.exports = router