require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./database/connect");
const userRouter = require("./routers/users");
const linksRouter = require("./routers/links");

const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/link", linksRouter);

// app.get("/", (req, res) => {
//   res.redirect("http://google.com");
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
