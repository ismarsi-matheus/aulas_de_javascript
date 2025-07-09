const fs = require('fs');
const { stringify } = require('querystring');

// 1 , Lendo um arquivo JSON.

fs.readFile('.eslintrc.json', (erro, dados) => {
  if (erro) {
    console.log('Erro:', erro);
  } else {
    const dados_objeto = JSON.parse(dados);

    console.log(dados_objeto.rules);
  }
});

// Convertendo JSON, em formato de string ,para um objeto


const jsonString = '{"nome": "Matheus", "idade": 25}';

// Convertendo um objeto do JS ,em um JSON (String)

console.clear();

const pessoa ={
    nome: 'Matheus',
    papel: 'Programador',
};

console.log(JSON,stringify(pessoa));
