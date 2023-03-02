const Sequelize = require('sequelize');

// Import dotenv to read environment variables from .env file
require('dotenv').config();

let sequelize;
// Create a Sequelize instance with JawsDB URL if it's available, otherwise use the local database credentials
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;