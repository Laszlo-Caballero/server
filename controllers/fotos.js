const agruparTitulo = require("../utils/agruparTitulo");
const subirDB = require("../utils/subirDB");
/**
 *
 * @param {*} req
 * @param {*} res
 */

const subirFotos = (req, res) => {
  const { file } = req;
  const nombreFoto = file.filename.split(".").shift();
  const extencion = file.filename.split(".").pop();
  const { id, titulo, descripcion, enlace } = req.params;
  const subirTitulo = agruparTitulo(titulo);
  const subriDescripcion = agruparTitulo(descripcion);
  subirDB(id, nombreFoto, extencion, subirTitulo, subriDescripcion, enlace);
  res.send("se envio");
};

module.exports = { subirFotos };
