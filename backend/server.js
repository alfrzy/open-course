// import express from "express";

const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(cors());
app.post("/adduser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  console.log("Username" + username);
  console.log("Password" + password);

  const insertUser = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

  pool
    .query(insertUser)
    .then((response) => {
      console.log("User Added");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response" + req.body);
});
// localhost:5000
app.listen(5000, () => console.log("listening on port 5000"));
