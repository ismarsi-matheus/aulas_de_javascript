//Array.protype.every():verificar se todos os elementos de um array seguem uma determinada condicao
// retornada pela funcao

const numeros = [40, 34, 67, 89, 23, 10];

const todos_positivos = numeros.every((elemento) => {
  elemento > 0;
});

console.log(todos_positivos);
console.clear();


const pessoa = [
    {
        nome: "pessoa1",
        idade: 34,
        altura: 1.77,
    },
    {
        nome: "pessoa2",
        idade: 25,
        altura: 1.6,
    },
    {
        nome: "pessoa3",
        idade: 46,
        altura: 1.95,
    },
];

const todos_maiores_de_idade = pessoa.every((pessoa) => pessoa.idade >= 18);

console.log(todos_maiores_de_idade);
console.clear();
//Array.protype.some():verificar se algum elemento do array torna verdadeira uma determinada condicao
//                     retornada pela funcao

const numeros2 =[-1,3,7,-3,5];

const retorno=numeros2.some((numero)=>numero > 0);

console.log(retorno);











