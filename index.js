const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hellloo World");
});

app.listen(4000, () => console.log("server runnig in port 4000"));
