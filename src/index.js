require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running under port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
