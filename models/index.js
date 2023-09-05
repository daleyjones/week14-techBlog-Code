const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

User.belongsTo(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(User, {
    foreignKey: 'user_id',
   
});

Post.belongsTo(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});


Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

module.exports = {User,Comment,Post};