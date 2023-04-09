const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "This is relevant to my interests."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Computers really seem to be catching on."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "All PEBKAC all the time."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Um, actually...."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I didn't come here to make friends."
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;