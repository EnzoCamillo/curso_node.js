const express = require("express"); // Importando o Express
const app = express(); // Iniciando o Express


app.get("/", function(req, res){
    res.send("Bem-Vindo a tela inicial!!");
    res.send("Segunda Resposta"); // Não funciona ( só é possível enviar uma repsosta )
});

app.get("/blog", function(req, res){
    res.send("Bem-Vindo ao blog!");
});
app.get("/blog/:artigo", function(req, res){
    var artigo = req.params.artigo

    res.send("Artigo: " + artigo);
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"]

    if (canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido!")
    }
    
});

// PARÂMETROS OBRIGATÓRIOS
app.get("/ola/:nome/:empresa", function(req, res){ // A rota só será acessada se houver o parâmetro junto
    // req ==> são os dados enviados pelo usuário
    // res ==> resposta que será enviada para o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
});

app.listen(4000, function (erro){
    if (erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})