// general requirements
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDB = require("./database/connect");
const userRouter = require("./routers/users");
const linksRouter = require("./routers/links");
const authenticationsMiddleware = require("./middleware/auth");

const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// pre-routes middleware

app.use(express.json());
app.use(authenticationsMiddleware);

// extra packages

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/link", linksRouter);

// redirection route
app.get("/:short", async (req, res) => {
  const { StatusCodes } = require("http-status-codes");
  const Link = require("./models/Links");

  const link = await Link.findOne({ short: req.params.short }, "URL");
  if (!link) res.status(StatusCodes.NOT_FOUND).send("NOT FOUND");
  res.status(StatusCodes.OK).json({ url: link.URL });
});

// post-routes middleware
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
