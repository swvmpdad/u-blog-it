const { Post, User, Comment } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'title',
            'post_content',
            'user_id'
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
            res.render('homepage', { posts })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;