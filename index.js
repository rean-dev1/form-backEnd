const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FormModel = require("./models/Form");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  FormModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("sucess");
      } else {
        res.json("wrong password");
      }
    } else {
      res.json("no record exists");
    }
  });
});

app.post("/register", (req, res) => {
  FormModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
