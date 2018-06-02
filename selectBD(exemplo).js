var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "desafiobd"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT id FROM cadastro WHERE cpf='10576592432'", function (err, resultSelect, fields) {
    if (err) throw err;
    console.log(resultSelect);
  });
});