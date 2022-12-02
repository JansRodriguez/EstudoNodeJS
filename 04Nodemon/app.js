//Instando o npm - biblioteca do node (node package manager) para utilizar recursos, como o nodemon.
//O nodemon é o boot do node, para atualizar automaticamente o servidor.
const server = require('http');

server.createServer(
    function(req, res){
        res.write('Nodemon em operação para "bootar" o servidor');
        res.end();
    }
).listen(8080);

//Para instalar o npm nodemon, utiliza-se o npm install -g nodemon ou npm i nodemon ou npm i
//Com o nodemon instalado, utiliza-se o nodem 'app.js' para executar