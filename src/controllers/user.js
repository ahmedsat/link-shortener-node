const { StatusCodes } = require("http-status-codes");
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
  res.send(`login`);
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
