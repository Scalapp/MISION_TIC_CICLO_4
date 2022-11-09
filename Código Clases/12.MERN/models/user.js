const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: { String, require: true },
  email: { String, require: true },
  password: { String, require: true },
  date: { Date, default: Date.now },
});

module.exports = User = mongoose.model("users", UserSchema);
