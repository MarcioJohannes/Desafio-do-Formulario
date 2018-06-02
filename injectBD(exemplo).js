    var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "desafiobd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO cadastro (id,nome,nascimento,cpf,cep,endereco,numero,bairro,cidade,estado,complemento) VALUES (uuid(),'Zézinho','1990-05-07','10576592432','50780090','rua','444','sant','recife','PE','casa')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
  