//filter

//map:sempre retorna um array de mesmo tamanho do array original
//filter:sempre retorna um array de tamanho igual ou inferior ap tamanho do array original

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);
console.clear();

//exemplo 1

const alunos = [
  { nome: "Quinky", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const alunos_com_media_superior_a_85 = alunos.filter(
  (alunos) => alunos.media > 85
);
console.log(alunos_com_media_superior_a_85);

//exemplo 2

const produtos = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata Frita", preco: 10.0, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca", preco: 6.99, tipo: "Bebida" },
];


const produtos_filtrados=produtos.filter((produto)=produto.preco <10 && produto.tipo !=='Bebida');
console.log(produtos_filtrados);