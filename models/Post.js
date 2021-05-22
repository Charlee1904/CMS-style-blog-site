const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
// const { timeStamp } = require('console');
// const { userInfo } = require('os');
const {Model, DataTypes, STRING} = require('sequelize');
// const { Sequelize } = require('sequelize/types');

class Post extends Sequelize.Model {}

Post.init (
    {
        id:{ 
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true,
        },
        username: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        title: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        content: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        comment: {
                type:DataTypes.STRING,
                allowNull:true,
        },

        // user_id: {
        //     type:DataTypes.INTEGER,
        //     references: {
        //         model:'user',
        //         key:'id',
        //     },
        // },
    },

    {
        sequelize,
        timeStamp:false,
        freezeTableName:true,
        underscored:true,
        modelName:'post',
    }
);

module.exports = Post;