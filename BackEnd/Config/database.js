const pgPromise = require('pg-promise');
const pgp = pgPromise();
require('dotenv').config(); 

const db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

module.exports = db;