const Sequelize = require('sequelize');
const db = require("../db/connection");
const Pet = require('./Pet');
const sequelize = require('../db/connection');



const Tutor = db.define('tutors', {
    name: {
        type: Sequelize.TEXT
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


Tutor.associate = models =>{
Tutor.hasMany(models.Pet, {as: 'pets'});} 



module.exports = Tutor
