const express = require("express");
const router = express.Router();
const { pedirDatos } = require("../controllers/albumes");

router.get("/", pedirDatos);

module.exports = router;
