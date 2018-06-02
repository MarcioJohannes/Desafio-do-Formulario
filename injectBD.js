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
  var sql = "INSERT INTO cadastro (id,nome,nascimento,cpf,cep,endereco,numero,bairro,cidade,estado,complemento) VALUES (uuid(),'Nome','ano-mês-dia','CPF sem pontuação','cep sem pontuação','rua','numero','bairro','cidade','estado','complemento')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
  