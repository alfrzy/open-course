// const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "ababab",
  port: 5432,
  database: "choolifah",
});

// const createTblQry = "CREATE TABLE users (user_id serial PRIMARY KEY, username VARCHAR (50) UNIQUE NOT NULL, password VARCHAR (50) UNIQUE NOT NULL);";

// pool
//   .query(createTblQry)
//   .then((Response) => {
//     console.log("Table created successfully!");
//     console.log(response);
//     pool.end();
//   })
//   .catch((err) => {
//     console.log("Error creating database", err);
//     pool.end();
//   });

module.exports = pool;
