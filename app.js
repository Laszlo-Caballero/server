require("dotenv").config();
const express = require("express");
const sqlC = require("./config/sqlC");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

console.clear();

sqlC();

app.use("/api", require("./routers"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
