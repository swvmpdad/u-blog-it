const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Welcome to the site!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'What a great idea!',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;