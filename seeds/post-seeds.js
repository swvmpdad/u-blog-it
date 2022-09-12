const { Post } = require('../models');

const postData = [
    {
        title: 'Hello World',
        post_content: 'This is the first post!',
        user_id: 1
    },
    {
        title: 'Welcome to U Blog It',
        post_content: 'This is a place where you can blog about your life',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;