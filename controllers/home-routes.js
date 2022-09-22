const { Post, User, Comment } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'title',
            'post_content',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['post_id']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                loggedIn: req.session.loggedIn,
                 posts })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;