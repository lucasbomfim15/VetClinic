const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db',
    logging: console.log
});

module.exports = sequelize;