const controller = require("../controllers/postsControllers")

const Datastore = require('nedb'), db = new Datastore({filename: 'posts.db', autoload: true});

findAll = () => {
    return new Promise((resolve, reject) => {
        db.find({}, function (err, docs) {
            if (err) {
                res.send('Someting went wrong!');
            } else {
                resolve(docs);
            }
        });
    })
}
createPost = (post) =>  {
    return new Promise((resolve, reject) => {
        db.insert(post, function (err, docs) {
            if (err) {
                res.send('Someting went wrong!');
            } else {
                resolve(docs)    
            }
        });
    })   
}

findPost = (id) => {
    return new Promise ((resolve, reject) => {
        db.findOne({ _id: id }, function (err, docs) {
            if (err) {
                res.send('Someting went wrong!');
            } else {
                resolve(docs);
            }
        })
    })
}

updatedPost = (id, body) => {
    return new Promise ((resolve, reject) => {
        db.update({ _id: id }, { $set: { title: body.title, content: body.content, comment: body.comment } }, { multi: true }, function (err, numReplaced) {
            if (err) {
                res.send('Someting went wrong!');
            } else {
                db.find({ _id: id }, function (err, docs) {
                    resolve(docs);
                });
            }
        })
    })
}

deletedPost = (id) => {
    return new Promise((resolve, reject) => {
        db.remove({ _id: id }, function (err, numDeleted) {
            if (err) {
                res.send('Someting went wrong!');
            } else {
                resolve("Post with ID " + id + " was successfully deleted!, number of posts that was deleted = " + numDeleted)
            }
    });
})
}
module.exports = { findAll, createPost, findPost, updatedPost, deletedPost }

