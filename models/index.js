const User = require('./User');
const Post = require("./Post"); 

// create associations, user can have many posts
User.hasMany(Post, {
    // creates reference for  id column in USer model to link to corresponding foreign key pair (user_id in Post model)
    foreignKey: 'user_id'
});

//reverse association, Post can only belong to 1 user (1 to 1)
Post.belongsTo(User, {
    foreignKey: 'user_id', 
});

module.exports = { User, Post };