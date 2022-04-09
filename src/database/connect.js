const { default: mongoose } = require("mongoose");

const connectDB = (uri) => mongoose.connect(uri);

module.exports = connectDB;
