const { StatusCodes } = require("http-status-codes");
const Link = require("../models/Links");
const { NotFoundError } = require("../errors");

const createLink = async (req, res) => {
  const link = await Link.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ link });
};

const getAllLinks = async (req, res) => {
  if (!req.user)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json("UNAUTHORIZED, please login");
  const links = await Link.find({ owner: req.user.id });
  if (!links)
    return res
      .status(StatusCodes.OK)
      .json("no links yet, add links to see here");
  return res.status(StatusCodes.OK).json({ links });
};

const getOneLink = async (req, res) => {
  let result = await Link.findOne({ short: req.params.id });
  if (!result) {
    /*
     * catch error before > express-async-errors <
     * ignore mongoose id syntax error
     */
    try {
      result = await Link.findOne({ _id: req.params.id });
    } catch (error) {
      /*
       * no result then throw 404 error instated of  mongoose id syntax err
       */
      throw new NotFoundError("cant fond this link");
    }
  }

  res.json({ result });
};

const updateLink = async (req, res) => {
  const link = await Link.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  if (!link) throw new NotFoundError("cant find this link");
  res.status(StatusCodes.OK).json(link);
};

const deleteLink = async (req, res) => {
  const link = await Link.findByIdAndDelete(req.params.id);
  if (!link) throw new NotFoundError("cant find this link");
  res.status(StatusCodes.OK).json(link);
};

module.exports = {
  createLink,
  getAllLinks,
  getOneLink,
  updateLink,
  deleteLink,
};
