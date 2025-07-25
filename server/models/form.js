const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Form = sequelize.define("form", {
  email: DataTypes.STRING,
  payref: DataTypes.STRING,
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  currentaddress: DataTypes.STRING,
  dob: DataTypes.STRING,
  fname: DataTypes.STRING,
  fno: DataTypes.STRING,
  faddress: DataTypes.STRING,
  mname: DataTypes.STRING,
  mno: DataTypes.STRING,
  maddress: DataTypes.STRING,
  identification: DataTypes.STRING,
  applicantno: DataTypes.STRING,
  signature: DataTypes.STRING,
  identifiername: DataTypes.STRING,
  town: DataTypes.STRING,
  years: DataTypes.STRING,
  identifierfullname: DataTypes.STRING,
  rank: DataTypes.STRING,
  photo: DataTypes.STRING,
});

// sequelize.sync().then(() => {
//     console.log("Database connected and models synced");
//   });
  

module.exports = Form;
