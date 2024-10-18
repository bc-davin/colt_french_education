// database/db.js
const { Sequelize } = require('sequelize');

//create the database 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', 
});

module.exports = sequelize;
