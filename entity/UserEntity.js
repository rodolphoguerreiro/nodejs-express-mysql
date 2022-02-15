const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dao')

class UserEntity extends Model {}

UserEntity.init({
    name: DataTypes.STRING
},{
    sequelize,
    modelName: 'users',
    timestamps: false
})

module.exports = UserEntity