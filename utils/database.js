const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-course', 'root', 'Masterdamus12', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;