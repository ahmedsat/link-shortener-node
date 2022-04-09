const express = require("express");
const Router = express.Router();

const { createUser } = require("../controllers/user");
const { login } = require("../controllers/auth");

Router.route("/register").post(createUser);
Router.route("/login").post(login);

module.exports = Router;
