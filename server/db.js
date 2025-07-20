// db.js
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',     
//   user: 'root', 
//   password: '123456',
//   database: 'ipokia'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// module.exports = db;





// db.js
const { Sequelize } = require('sequelize');

// ✅ Create Sequelize instance
const sequelize = new Sequelize('ipokia', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Optional: disables SQL logs
});

module.exports = sequelize; // ✅ Export this instance

