const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 5,
    maxlength: 50,
    default: "no name",
  },
  username: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 15,
    required: [true, "Please provide name"],
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Please provide password"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },

  Permissions: {
    type: [String],
    enum: {
      values: ["p1", "p2"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
