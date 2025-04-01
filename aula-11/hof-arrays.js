//*FUncoes de alta ordem
//1.Array.protype.forach()

const numeros = [40, 34, 67, 89, 23, 10];

// function imprimir_elementos(elemento){
//     console.log(elemento);
// };

// for(const elemento of numeros ){

// };

// numeros.forEach((elemento) => {
//   console.log(elemento);
// });
numeros.forEach((item, index, array_completo) => {
  console.log(index, item, array_completo);
});

console.clear();

//2.array.protype.fin():util para encontar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);
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

const pessoa_encontrada = pessoa.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);
console.log(pessoa_encontrada);

//3.array.prototype.findIndex():muito parecido com o find(),
//                              porém retorna o indice do elemento encontrado
const indice_da_pessoa_encontrada = pessoa.findIndex(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);
console.clear();
console.log(indice_da_pessoa_encontrada);
