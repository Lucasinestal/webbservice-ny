const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsControllers');
const commentsController = require('../controllers/commentsControllers');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

// post routes

router.get('/', jsonParser, postsController.findAllPosts);

router.get("/post/:id", jsonParser, postsController.findPostById);

router.post("/edit/:id", jsonParser, postsController.updatePost);

router.post("/create", jsonParser, postsController.createNewPost);

router.post("/delete/:id", jsonParser, postsController.deletePost);

// comment routes

router.get('/posts/comments', jsonParser, commentsController.findAllComments);

router.get("/posts/:id/comments", jsonParser, commentsController.findCommentById);

router.post("/edit/:id/comment", jsonParser, commentsController.updateComment);

router.post("/create/:id/comment", jsonParser, commentsController.createNewComment);

router.post("/delete/:id/comment", jsonParser, commentsController.deleteComment);



module.exports = router