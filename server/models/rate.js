const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Rate = sequelize.define("rate", {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Rate;
