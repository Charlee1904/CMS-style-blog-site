const User = require('./User');
const Post = require('./Post');


// Post.hasOne(User,{
//     foreignKey:'user_id',
//     onDelete:'CASCADE',
// });

// User.belongsTo(Post,{
//     foreignKey:'user_id',
// });

// User.hasMany(Post, {
//     foreignKey:'user_id',
//     onDelete:'CASCADE',
// });

// Post.belongsTo(User, {
//     foreignKey:'user_id',
// });

module.export = {User, Post};