const User = require("../models/User");

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(req.body);
};

const getAllUsers = (req, res) => {
  res.send(`getAllUsers`);
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
};
