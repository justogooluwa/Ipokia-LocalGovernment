const { DataTypes } = require('sequelize');
const sequelize=require('../db')

const Payhead = sequelize.define("payhead", {
    payref: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      copy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      delivery: {
        type: DataTypes.STRING,
        allowNull: false
      },
    paydate: {
      type: DataTypes.DATEONLY,
    },
    
    // paymethod: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    //   },
    // bank: {
    //   type: DataTypes.STRING,
    // },
 });
 
//  sequelize.sync({ alter: true }).then(() => {
//     console.log('Pay Reference table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
 module.exports=Payhead;