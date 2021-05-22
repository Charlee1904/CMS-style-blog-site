const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
// const { timeStamp } = require('console');
// const { userInfo } = require('os');
const {Model, DataTypes, STRING} = require('sequelize');
// const { Sequelize } = require('sequelize/types');

class User extends Sequelize.Model {
    checkPassword(pw) {
        return bcrypt.compare(pw, this.password);
    }
}

User.init (
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
        email: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
                isEmail:true,
            },
        },
        password: {
                type:DataTypes.STRING,
                allowNull:false,
                validate: {
                    len:[8],
                }
            },

        // post_id: {
        //     type:DataTypes.INTEGER,
        //     allowNull:true,
        //     refrences: {
        //         model:'post',
        //         key:'id',
        //     }
        // },
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                user.email = user.email.toLowerCase();
                user.password = await bcrypt.hash(user.password, 10)
                return user;
            },
            beforeUpdate: async(user) => {
                user.email = await user.email.toLowerCase();
                return user;
            }
        },
        sequelize,
        timeStamp:false,
        freezeTableName:true,
        underscored:true,
        modelName:'user',
    }
);

module.exports = User;