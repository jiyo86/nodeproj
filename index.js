const express = require("express");
const app = express();
exports.module = app;
app.get("/", function(req, resp, next) {
  resp.send("Welcome");
});

app.listen(8080, function(){console.log("listen")})
