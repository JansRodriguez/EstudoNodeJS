//Importando o express
const estrutura = require('express');

//Aplicação para manipulação das funcionalidades do frameworks
let aplicacao = estrutura();


//Rotas e porta
aplicacao.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}).listen(8080);//A porta está logo atrelado a rota
