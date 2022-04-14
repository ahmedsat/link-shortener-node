require("dotenv").config();

const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const createUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    username: { $regex: username, $options: "i" },
    password,
  });
  if (!user)
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json("username or password is invalid");
  const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(StatusCodes.OK).json({ token });
};

const getOneUser = (req, res) => {
  res.send(`getOneUser`);
};
const updateUser = (req, res) => {
  res.send(`updateUser`);
};
const deleteUser = (req, res) => {
  res.send(`deleteUser`);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
