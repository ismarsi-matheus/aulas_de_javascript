// reduce

const numeros = [1, 2, 3, 4, 5];

// numeros.reduce((acumulador,elemento,index,array_completo)=>{},0);

const soma = numeros.reduce((acumulador, elemento, _, array_completo) => {
  //console.log(acumulador);
  return elemento / array_completo.length + acumulador;
}, 0);

console.log(soma);

const soma_dos_pares = numeros.reduce((acumulador, numero) => {
  //se o numero for par
  if (numero % 2 === 0) {
    return acumulador + numero;
  } else {
    return acumulador;
  }
},0);

console.clear();

console.log(soma_dos_pares);

//toral a pagar do carinho 

const carrinho=[
    {produto:'Feijão',preco:7.98,quantidade:3},
    {produto:'Arroz',preco:4.98,quantidade:5},
    {produto:'Leite 1l',preco:6.99,quantidade:2},
];


const total_a_pagar = carrinho.reduce((acumulador,item)=>{
    return item.preco * item.quantidade + acumulador;
},0);

console.clear();
console.log(total_a_pagar);

// let soma_das_notas = 0;

// for(){
//     const nota=prompt();
//     soma_das_notas +=nota;
// }
