const Sequelize = require('sequelize');
const db = require("../db/connection");
const sequelize = require('../db/connection');

const Pet = db.define('pets', {
    name: {
        type: Sequelize.INTEGER
    },
    species: {
        type: Sequelize.TEXT
    },
    carry: {
        type: Sequelize.TEXT
    },
    weight:{
        type: Sequelize.REAL
    },
    date_of_birth: {
        type: Sequelize.TEXT
    }

});

module.exports = Pet