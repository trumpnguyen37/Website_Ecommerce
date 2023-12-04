require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASENAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "logging": false,
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    },
  }
}