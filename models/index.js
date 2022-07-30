const User = require('./User');
const Post = require("./Post"); 
const Vote = require('./Vote');

// create associations, user can have many posts
User.hasMany(Post, {
    // creates reference for  id column in USer model to link to corresponding foreign key pair (user_id in Post model)
    foreignKey: 'user_id'
});

//reverse association, Post can only belong to 1 user (1 to 1)
Post.belongsTo(User, {
    foreignKey: 'user_id', 
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

  module.exports = { User, Post, Vote };