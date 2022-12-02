//Utilizando o frameworks express
const estrutura = require('express');
//Pode ser importado pela seguinte forma, sem o require:
    //import estrutura from 'express';
//No entanto, no arquivo package.json, precisa ser informado essa sintaxe:
    //"type": "module"

//Criando variáveis para manipular o frameworks express;
let aplicacao = estrutura(); //Se usa os parenteses pois estrutura é uma função que está recebendo  os metodos do frameworks.

/* Essa aplicação permite que seja criada diferentes url e endpoints */

//Criando rotas e fazendo a rota sendo ouvida na porta
aplicacao.get('/', function(req, res){
    res.write('Executando o node com o express e com o nodemon');
    res.end();
}).listen(8080);

//Ou poderia criar uma chamada a parte do servidor
//aplicacao.listen(8080);