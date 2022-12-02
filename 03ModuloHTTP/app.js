//Importar a biblioteca do protocolo http
const server = require('http');

//Criando o servidor e fazendo-o ser ouvido (atraves do listen)
server.createServer(
    function(req, res) { //req or request é o envio de dados pelo http && res or response é captaçao desses dados
        res.write('Aprendendo (de verdade) Node.js.');
        res.write('Temos um projeto com 21 dias para entregar');
        res.end();
    }
).listen(8080);

//A biblioteca http cria um servidor (similar ao tomcat).
///Apenas um arquivo tu rodando no navegador.
///Em Java teria que criar um projeto, um controle, informar a anotação, um metodo e retorno.