const Sequelize = require('sequelize');
const db = require("../db/connection");
const sequelize = require('../db/connection');
const Tutor = require('./Tutor');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Pet = db.define('pets', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Marcar como chave primária
        autoIncrement: true 
    },
  
    name: {
        type: Sequelize.TEXT
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
    },
    

});

Pet.associate = models => {
Pet.belongsTo(models.Tutor, { foreignKey: 'tutorId', as: 'tutor' });}


module.exports = Pet