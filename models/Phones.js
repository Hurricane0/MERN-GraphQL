const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  name: String,
  number: String,
  description: String,
});

module.exports = mongoose.model("Phone", PhoneSchema);
