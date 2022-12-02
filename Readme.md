<h1><strong>Anotações e observações de estudo</strong></h1>

O node.js tem varios frameworks disponíveis.
    <h1>O <strong>express</strong> é um dos frameworks mais utilizados para a linguagem</h1>
O express e o http são similares, pois o frameworks express auxiliar nas criações das rotas

Para instalar o express utilizar-se {
    <h1>npm i express</h1>
}

<strong>Ao instalar, ele criar um arquivo package-lock.json, onde tras todas os modulos e todas as dependencias que serão utilizadas até essa instalação.</strong>

<strong>A cada nova dependencia, a cada npm i, este arquivo package-lock.json atualiza e tras sua versão e boot.</strong>

Lembrando que nodemon é instando uma só vez. E para o servidor ficar bootando a aplicação, é necessário abrir a aplicação com o comando {
    nodemon 'app.js'
}

Pode ser importado pela seguinte forma, sem o require:
    /import estrutura from 'express';
No entanto, no arquivo package.json, precisa ser informado essa sintaxe:
    /"type": "module"

<h2>O express precisa ser instalado a cada novo projeto, diferente do nodemon.</h2>

<strong>Obs.:</strong> o res.end(); é somente usado quando usamos o res.write(); para parar a rota.

O __dirname => refere-se a pasta do projeto. Qualquer referencia do projeto, sai como base esse diretorio.

<h1>Body-Parser:</h1>
<h3>É a forma de obter dados via formulário ou requisição.</h3>
<p>É necessário instalar o bodyParser atras do comando <strong>npm i body-parser</strong> para se utilizar a obtenção de dados. Alem do express, nunca se esqueça que o express precisa ser instalado em cada projeto. O Nodemon é instalado apenas uma vez na máquina.</p>

<h1>Dica importante: Leia a documentação do BodyParser.</h1>