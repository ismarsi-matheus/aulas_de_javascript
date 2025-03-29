const prompt = require("prompt-sync")();

let i =0;

// expressão 1:inicialização da varivel de controle
// expressão 2:condição que define quando irá ocorrer a parada do for
// expressão 3:incremento da variável de controle

for(expressão 1;expressão 2;expressão 3){
    //o escopo do for é aqui dentro
}

for(i=0;i<5;i+=2){
    console.log("Contador:", i);
}

console.log("Variável i:", i);

for (;;) {} ->loop infinito

for (;;) {
    if (tal condição ocorrer ) break;
}

for (;;) {}

while(true){}

for(let i=0;i<5;){
    console.log("Contador:", i);
}

for (let i = 0; i < 5; i++) {
  console.log("Contador:", i);
}

//limpando o console
console.clear();

//exemplo

let maior_numero= 0;
let numero_informado;

for (let i=1;i<=5;i++){
    numero_informado = Number(prompt("Informe um número:"));
    if(numero_informado > maior_numero){
        maior_numero = numero_informado;
    }
}
console.log("O maior número informado foi:", maior_numero);

* Exemplo:precorrendo strings com for

const nome='Lucas';

// console.log(nome[0]); 

// for(let i=0;i< nome.length;i++){
//     console.log(nome[i]);
//}

for(let i=0;i< nome.length;i++){
    console.log(nome[i]);
    if(i===2){
        break;
    }
} 

// * arraays

const nota1=10;
const nota2=7;
const nota3=8;

const notas_dos_alunos=[10,7,8];
const pessoa=['Matheus', 21, true, 1.75];

console.log(pessoa);
console.log(notas_dos_alunos);
console.log(pessoa[0]);

pessoa[2]=false;
console.log(pessoa);

console.clear();
console.log(pessoa.length);

//fatiando o array

const numeros=[40,34,67,89,23,10]

console.log(numeros.slice(0,2));
console.log(numeros.slice(2));

console.clear();

//Adicionando elementos no final do array
numeros.push(0);
console.log(numeros);

//adiconando elementos no começo do array

console.clear();
numeros.unshift(-1);
console.log(numeros);

//pop remove o último elemento do array
console.clear();
numeros.pop();
console.log(numeros);

//shift remove o primeiro elemento do array
console.clear();
numeros.shift();
console.log(numeros);

//Será que o elemento 20 existe no array?
console.clear();
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if(numeros.includes(10)){
    console.log("Opa! O número 10 existe no array!");
} else{
    console.log("O número 10 não existe no array!");
}

const existe_o_numero_20=numeros.includes(20);

console.clear();


//  * indexOf
const inidice_do_elemento_20=numeros.indexOf(20);
console.log(inidice_do_elemento_20);


//  * LastindexOf
const inidice_do_elemento_40=numeros.lastIndexOf(40);
console.log(inidice_do_elemento_40);
console.clear();

// * Percorrendo arrays  com o for 
const arr=[45,36,90,76,32,7];
for (let i =0;i <arr.length;i++){
    console.log(arr[i]);
}

// *for-of

for (const elemento of arr){
    console.log(elemento);
}

//for-in

for(const indice in arr){
    console.log(indice);
}