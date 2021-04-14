const Pool = require("pg").Pool;
const env = require('dotenv');
env.config();

const pool = new Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 5432,
    database: process.env.DATABASE
});

module.exports = pool;