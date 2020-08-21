const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsControllers');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

router.get('/', jsonParser, postsController.findAllPosts);

router.get("/post/:id", jsonParser, postsController.findPostById);

router.post("/edit/:id", jsonParser, postsController.updatePost);

router.post("/create", jsonParser, postsController.createNewPost);

router.post("/delete/:id", jsonParser, postsController.deletePost);


module.exports = router