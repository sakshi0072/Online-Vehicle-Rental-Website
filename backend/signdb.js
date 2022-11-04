const mongoose = require("mongoose");

const signInfo = mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Password:String,
});
module.exports = mongoose.model("sign", signInfo);