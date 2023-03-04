const sqlC = require("../config/sqlC");
const connection = sqlC();

const subirDB = (id, nombre, tipo, titulo, descripcion, enlace) => {
  const comando = `INSERT INTO albumes (id, imagen, tipo, titulo, descripcion, enlace) values (${id}, "${nombre}", "${tipo}", "${titulo}", "${descripcion}", "${enlace}")`;
  connection.query(comando, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
};

module.exports = subirDB;
