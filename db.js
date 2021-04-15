const Pool = require("pg").Pool;
require('dotenv').config();

const devConfig = {
    user: "postgres",
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PG_PORT,
    database: process.env.DATABASE
}

const prodConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}
 
const pool = new Pool(process.env.NODE_ENV === "production" ? prodConfig : devConfig);

module.exports = pool;