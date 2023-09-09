const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

User.belongsTo(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(User, {
    foreignKey: 'postId',
   
});

Post.belongsTo(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});


Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

module.exports = {User,Comment,Post};