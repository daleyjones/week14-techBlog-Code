const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// Get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).render('error', { error: err });
  }
});

// Get a single post
router.get('/post/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    const postData = await Post.findByPk(postId, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).render('error', { error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).render('error', { error: err });
  }
});

// Render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

// Render signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});

module.exports = router;
