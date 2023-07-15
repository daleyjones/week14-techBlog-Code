const router = require('express').Router();
const { Post, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const newData = {
      title: req.body.title,
      body: req.body.body,
    };

    await Post.update(newData, {
      where: {
        id: postId,
      },
    });

    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, {
      include: [{ model: Comment }],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
    } else {
      res.status(200).json(postData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  const newData = {
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
  };

  try {
    const newPost = await Post.create(newData);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.destroy({
      where: {
        id: postId,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
