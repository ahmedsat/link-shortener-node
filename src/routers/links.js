const express = require("express");
const router = express.Router();
const authenticationsMiddleware = require("../middleware/auth");

const {
  getAllLinks,
  createLink,
  getOneLink,
  updateLink,
  deleteLink,
} = require("../controllers/links");

router
  .route("/")
  .get(authenticationsMiddleware, getAllLinks)
  .post(authenticationsMiddleware, createLink);
router
  .route("/:id")
  .get(authenticationsMiddleware, getOneLink)
  .patch(authenticationsMiddleware, updateLink)
  .delete(authenticationsMiddleware, deleteLink);

module.exports = router;
