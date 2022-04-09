const { default: mongoose } = require("mongoose");

const LinkSchema = new mongoose.Schema({
  URL: URL,
  short: { type: String },
});

module.exports = mongoose.model("Link", LinkSchema);
