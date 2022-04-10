const Link = require("../models/Links");

const createLink = async (req, res) => {
  res.send(`create link`);
};

const getAllLinks = (req, res) => {
  res.send(`getAllUsers`);
};
const getOneLink = (req, res) => {
  res.send(`getOneUser`);
};
const updateLink = (req, res) => {
  res.send(`updateUser`);
};
const deleteLink = (req, res) => {
  res.send(`deleteUser`);
};

module.exports = {
  createLink,
  getAllLinks,
  getOneLink,
  updateLink,
  deleteLink,
};
