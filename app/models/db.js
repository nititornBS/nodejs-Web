const mysql = require("mysql2");
const dbConfig = require("../config/db.config");
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});
connection.connect((error) => {
  if (error) console.log("mysql conection " + error);
  else console.log("Successfully conected to the database");
});
module.exports = connection;
