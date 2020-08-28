//const controller = require("../controllers/commentsControllers")

const Datastore = require('nedb'), db = new Datastore({filename: 'comments.db', autoload: true});

getComments = () => {
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
createComment = (comment) =>  {
    return new Promise((resolve, reject) => {
        db.insert(comment, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs)    
            }
        });
    })   
}


findComment = (id) => {
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

updatedComment = (id, body) => {
    return new Promise ((resolve, reject) => {
        db.update({ _id: id }, { $set: {content: body.content} }, { multi: true }, function (err, numReplaced) {
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

deletedComment = (id) => {
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
module.exports = { getComments, createComment, findComment, updatedComment, deletedComment }
