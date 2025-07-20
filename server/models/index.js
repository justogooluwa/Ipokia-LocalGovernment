const Sequelize = require('sequelize');
const sequelize = require('../db'); // or wherever your db config is
const Payhead = require('./payhead');
// const User = require('./user')

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Payhead = Payhead;
// db.User = User;

module.exports = db;
