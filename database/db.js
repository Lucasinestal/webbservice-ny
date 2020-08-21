const Datastore = require('nedb'), db = new Datastore({filename: '../database/posts.db', autoload: true});

module.exports = db;