// const { Model, DataTypes } = require("sequelize");
// const sequelize = require('../db'); 
// const bcrypt = require("bcrypt");

// class Admin extends Model {}

// Admin.init(
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: { isEmail: true },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "admin",
//     tableName: "admins",
//     timestamps: true,
//   }
// );

// Hash password before saving
// Admin.beforeCreate(async (admin) => {
//   const salt = await bcrypt.genSalt(10);
//   admin.password = await bcrypt.hash(admin.password, salt);
// });

// module.exports = Admin;

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const bcrypt = require("bcrypt");

const Admin = sequelize.define("admin", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
  timestamps: true
});
Admin.beforeCreate(async (admin) => {
  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
});

module.exports = Admin;

