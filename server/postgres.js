const Pool = require("pg").Pool;
const types = require("pg").types;

require("dotenv").config();

const { PG_USER, PG_HOST, PG_DATABASE, PG_PASS, PG_PORT } = process.env;

types.setTypeParser(1114, function (stringValue) {
  return stringValue;
});

const pool = new Pool({
  user: PG_USER,
  password: PG_PASS,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
});

const postgres = async sql => {
  let client = await pool.connect();
  let result = await client.query(sql);

  client.release();
  return result.rows;
};

module.exports = postgres;
