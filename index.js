const express = require("express");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
const users = require("./routes/users");

const app = express();
app.use(cors());
app.use(cookie_parser());
app.use(express.json());
app.use("/", users);

app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json("Endpoint not found");
});

var port = process.env.PORT || "8080";
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
