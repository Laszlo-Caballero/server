const express = require("express");
const router = express.Router();
const subirArchivo = require("../utils/subirArchivo");
const { subirFotos } = require("../controllers/fotos");

//:id/:titulo/:descripcion/:enlace
router.post(
  "/:id/:titulo/:descripcion/:enlace",
  subirArchivo.single("myfile"),
  subirFotos
);

module.exports = router;
