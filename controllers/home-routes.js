const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
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

router.get('/post?id=:id', withAuth, (req, res) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    Post.findOne({
        where: {
            id: urlParams.get('id')
        },
        attributes: [
          'id',
          'post_content',
          'title',
          'created_at'
      ],
      include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
      ]
    })
        .then(dbPostData => {
            const post = dbPostData.get({ plain: true });
            res.render('post', { post })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;