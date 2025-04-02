//Map 
//Ele cria um novo array que possui o *mesmo tamanho do array original*
//composto pelos elementos que foram retornados a cada interação 
const numeros = [40, 34, 67, 89, 23, 10];

const novo_array=numeros.map((elemento,index,array_completo)=>{
    //console.log(elemento,index,array_completo)
    //return 1;
    return elemento *2;

});
console.log(novo_array);
console.clear();

//exemplo1;elevando todos os numeros ao quadrado 

let valores=[39,45,32,24,4,22,2,49,23,8];

const valor_ao_quadrado=valores.map((valor)=>valor **2 );

console.log(valor_ao_quadrado);
console.clear();

// exemplo2:adicionando uma propriedade aos objetos do array


const carrinho=[
    {produto:'feijão',preco:7.98,quantidade:3},
    {produto:'arroz',preco:4.98,quantidade:5},
    {produto:'leite 1l',preco:6.99,quantidade:2}
];

const carrinho_com_total=carrinho.map((item_do_carrinho)=>{
    return {
        ...item_do_carrinho,
        total:item_do_carrinho.preco*item_do_carrinho.quantidade,
    };
});

console.log(carrinho_com_total);

// const pessoa ={
//     nome:'Matheus',
//     idade:18,
//     altura:11.93
// };

// // pessoa.peso=79

// //desestruracao ou spread (operator)
// const pessoa_com_peso={
//     ...pessoa,
//     peso:79
// };

// console.log(pessoa_com_peso);