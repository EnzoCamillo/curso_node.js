var http = require("http");

http.createServer(function (requisicao, resposta){
    resposta.end("<h1>Bem-Vindo ao meu site!</h1>");

}).listen(3000);
console.log("Meu servidor está rodando!!")

