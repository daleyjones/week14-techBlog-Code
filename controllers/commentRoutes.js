const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log('Creating a new comment');

    const newData = {
      body: req.body.body,
      post_id: req.body.postId,
    };

    const newComment = await Comment.create(newData);

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
