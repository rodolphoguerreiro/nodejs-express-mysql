const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.PG_SCHM, 
    process.env.PG_USER, 
    process.env.PG_PASS, {
        host: process.env.PG_HOST,
        dialect: 'postgres'
    });

module.exports = sequelize
