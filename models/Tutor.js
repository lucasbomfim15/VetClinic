const Sequelize = require('sequelize');
const db = require("../db/connection");
const sequelize = require('../db/connection');

const Tutor = db.define('tutors', {
    name: {
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    date_of_birth:{
        type: Sequelize.TEXT
    },
    zip_code: {
        type: Sequelize.TEXT
    }

});

module.exports = Tutor