const router = require('express').Router();

const userRoutes = require('./user-Routes.js');
const postRoutes = require('./post-Routes.js');
const commentRoutes = require('./comment-Routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;