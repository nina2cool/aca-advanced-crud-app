const PostModel = require('../models/PostModel.js');


// TODO: Add your controller logic here.
module.exports = {

    list: function(req, res, next) {

        PostModel.find((err, posts) => {

            res.render('index', {
                posts: posts
            });

        })

    },

    show: function(req, res, next) {
        var id = req.params.id;

        PostModel.findOne({
            _id: id
        }, function(err, post) {

            var author = post.author;
            var post_body = post.post_body;
            var date = post.date;

            res.render('post', {
                author: author,
                post_body: post_body,
                date: date
            });
        });


    },

    create: function(req, res, next) {
        var post = new PostModel({
            author: req.body.author,
            post_body: req.body.post_body
        });

        post.save((err, item) => {
            res.redirect('/posts');
        });
    },

    update: function(req, res, next) {

        var id = req.params.id;

        PostModel.findOne({
                _id: id
            },
            function(err, post) {
                post.author = req.body.author;
                post.post_body = req.body.post_body;
                post.date = req.body.date;

                post.save(function(err, post) {

                    res.redirect('/posts');
                });
            });
    },

    remove: function(req, res, next) {
        var id = req.params.id;

        PostModel.findByIdAndRemove(id, function(err, post) {

            res.redirect('/posts');
        });
    },

    add: function(req, res, next) {
        PostModel.find((err, posts) => {

            res.render('post_form', {
                posts: posts
            });

        })
    },

    edit: function(req, res, next) {

        var id = req.params.id;

        PostModel.findOne({
            _id: id
        }, function(err, post) {

            var author = post.author;
            var post_body = post.post_body;
            var date = post.date;
            var id = post.id;

            res.render('post_edit_form', {
                author: author,
                post_body: post_body,
                date: date,
                id: id
            });
        });

    }


};
