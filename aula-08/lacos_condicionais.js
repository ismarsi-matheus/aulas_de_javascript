const prompt= require ('readline-sync');

//let saldo =Number(prompt.question("Qual eh o seu saldo? "));

// let saldo2=0;

// if(saldo < 0){
//     saldo = Number(prompt.question('Saldo invalido !Por favor, informe novamente: '));
// }

//while(saldo < 0){
  //saldo = Number(prompt.question('Saldo invalido !Por favor, informe novamente: '));
    // saldo2 = Number(prompt.question('Saldo invalido !Por favor, informe novamente: '));
    // console.log('Dentro do while');


//console.log(saldo);


//Exemplo 2
//let nota_do_aluno=Number(prompt.question("informe a nota do aluno :"));

//let soma_das_notas=0;//acumulador
//let qtd_de_notas_validas=0;//acumulador(Quantidade de notas válidas)

//10 > 10
//8 >18


// while(nota_do_aluno >=0){

//     // soma_das_notas = soma_das_notas + nota_do_aluno;
//     soma_das_notas += nota_do_aluno;//incrementando o acumulador(soma_das_notas)
//     // qtd_de_notas_validas += 1;
//     qtd_de_notas_validas ++;//pós-incremento do acumulador(qtd_de_notas_validas)
//     nota_do_aluno=Number(prompt.question("informe a proxima nota :"));
// }

// console.log(soma_das_notas);
// console.log(qtd_de_notas_validas);
// console.log('Média das notas dos alunos =',soma_das_notas/qtd_de_notas_validas);

//Sotar um número->Obter um numero do usuario->Numero obtido difernete do numero dejado ?->Não->Você acaerou o numero 
//                                                                                      ↓
//                                                                                      ->Sim->Você errou o numero 
// * Exemplo 3

// const numero_aleatorio = parseInt(Math.random() * 10) + 1;//gerando um número aleatório entre 1 e 10

// let numero_do_usuario = Number(prompt.question("Informe um número entre 0 e 10: "));

// console.log(numero_aleatorio);

// while(numero_aleatorio !== numero_do_usuario){
//     console.log("Você errou o número! Tente novamente.");
//     numero_do_usuario = Number(prompt.question("Informe um número entre 0 e 10: "));
// }
// console.log("Você acertou o número! Parabéns! ,o número era:", numero_aleatorio);

//loop com contador

// let contador = 0;

// while(contador < 5){
//     console.log("Contador:", contador);
//     if(contador=2){
//         break;
//     }
//     contador++;

//     console.log("Depois do If...");
// }


// let contador = 0;

// while(contador < 5){
//     console.log("Contador:", contador);
//     contador++;
//     if(contador===2){
//         continue;
//     }

//     console.log("Depois do If...");
// }


// * do while

let saldo; //= Number(readlineSync.question("Qual é o seu saldo? "));
///undefined
//let saldo2=0;

if (saldo < 0) {
    saldo = Number(readlineSync.question('Saldo inválido! Por favor, informe novamente: '));
}

do {
    saldo = Number(readlineSync.question('Saldo inválido! Por favor, informe novamente: '));
} while (saldo < 0);

console.log(saldo);

//saldo2 = Number(prompt.question('Saldo invalido !Por favor, informe novamente: '));
//console.log('Dentro do while');
console.log(saldo);