const mongoose = require("mongoose");
const userModel = require("../model");

mongoose.connect("mongodb://db:27017/usersdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected Successfully");
});
exports.userlist = async (req, resp, next) => {
  try {
    const users = await userModel.find({});
    resp.send(users);
  } catch (error) {
    resp.status(500).send(error);
  }
};

exports.adduser = async (req, resp, next) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    resp.send(user);
  } catch (error) {
    resp.status(500).send(error);
  }
};
