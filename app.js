require("dotenv").config();
const express = require("express");
const sqlC = require("./config/sqlC");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const fs = require("fs");
const https = require("https");

console.clear();
sqlC();
app.use(cors());
app.use("/api", require("./routers"));
app.use(express.static("storage"));

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cer"),
    },
    app
  )
  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
