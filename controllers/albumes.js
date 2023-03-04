const sqlC = require("../config/sqlC");
const connection = sqlC();

/**
 *
 * @param {*} req
 * @param {*} res
 */

const pedirDatos = (req, res) => {
  connection.query("SELECT * FROM albumes", (error, result) => {
    if (error) throw error;
    res.send(result);
  });
};

module.exports = { pedirDatos };
