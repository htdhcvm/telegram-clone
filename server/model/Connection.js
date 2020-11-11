const { Pool } = require("pg");

let pool;

try {
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });
} catch (error) {
    console.log(error);
}


module.exports = pool;