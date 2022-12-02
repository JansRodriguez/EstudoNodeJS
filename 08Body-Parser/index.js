//Importando a biblioteca do express
const estrutura = require('express');

//Importando a biblioteca do bodyParser
const bodyParser = require('body-parser');

//Criando uma instancia do express
const aplicacao = estrutura();

//Criando uma instancia do bodyParser
aplicacao.use(bodyParser.json()); //O bodyparser estará recebendo os dados em formatos json
aplicacao.use(bodyParser.urlencoded({extended:false})); //Como se está utilizando o post, se utiliza o 'urlencoded ...'

//Uma forma mais atual de instanciar o bodyParsr é:
// Configurar o BodyParser
/*  app.use(estrutura.json());
    app.use(estrutura.urlencoded({extended:true})); */

//Rotas
    //Rota padrão
aplicacao.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html')
});

    //Rota de Recebimento
aplicacao.post('/receber', function(req, res){
    res.write('O produto informado é: ' + req.body.produto);
    res.write('. A marca informada é: ' + req.body.marca);
    res.end();
});

//Utilizando o SERVIDOR
aplicacao.listen(8080);