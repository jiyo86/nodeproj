const express = require("express");
const router = express.Router();

const users = require("../conroller/UserController");

router.get("/userlist", users.getUserlist);
router.post("/adduser", users.addUser);

module.exports = router;
