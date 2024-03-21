const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const FormModel = mongoose.model("employees", FormSchema);

module.exports = FormModel;
