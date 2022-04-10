const express = require("express");
const router = express.Router();

const {
  getAllLinks,
  createLink,
  getOneLink,
  updateLink,
  deleteLink,
} = require("../controllers/links");

router.route("/").get(getAllLinks).post(createLink);
router.route("/:id").get(getOneLink).patch(updateLink).delete(deleteLink);

module.exports = router;
