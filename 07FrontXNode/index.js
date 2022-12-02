//Instalando a biblioteca express
const estrutura = require('express');

//'Instanciando' a biblioteca para manipularção
const aplicacao = estrutura();

//Criando a conexão com o diretorio de css, imagens
aplicacao.use(estrutura.static(__dirname + '/estatico'));

//Rotas e servidor instalado
aplicacao.get('/', function(req, res){
    res.sendFile(__dirname + '/front.html')
}).listen(8080);

