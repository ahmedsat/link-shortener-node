require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./database/connect");
const authRouter = require("./routers/auth");

const app = express();

const port = process.env.PORT || 5000;
//? middleware

app.use(express.json());

//? routes
app.use("/api/v1/", authRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running under port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
