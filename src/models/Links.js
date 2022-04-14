const { default: mongoose } = require("mongoose");

const LinkSchema = new mongoose.Schema({
  URL: {
    type: String,
    match: [
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
      "pleas enter a valid url",
    ],
    required: [true, "pleas enter a valid url"],
  },
  short: { type: String, unique: true },
  owner: { type: mongoose.Types.ObjectId, default: "6251506f124b2ffef6079006" },
});

module.exports = mongoose.model("Link", LinkSchema);
