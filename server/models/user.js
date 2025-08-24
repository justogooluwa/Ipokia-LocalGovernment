const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  payref: {
    type: DataTypes.STRING,
    allowNull: false
  },
  remainingCopies: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
  
}, {
  timestamps: true
});

module.exports = User;