const {DataTypes} = require('sequelize');
const {bdd} = require('../framework/connexion.js');

const Event = bdd.define("events", {
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.TEXT,
    }
});

module.exports = Event;