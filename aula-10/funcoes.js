//definicao da funcao
// function saudacao(nome_do_estudante,curso){
//     // template string || template literals
//     console.log(`Olá,${nome_do_estudante}!`);
//     // console.log('Olá,',nome_do_estudante);
//     console.log(`Olá,seja bem-vinda(o) ao curso de ${curso}`);
// }

// saudacao('Matheus','Front-end em react') //chamado da função saudacao

function saudacao(nome_do_estudante, curso = "Front-end em React") {
  // template string || template literals
  return `Olá ,${nome_do_estudante}! Seja bem-vinda(o) ao curso de ${curso}`;
}

const mensagem_da_saudacao = saudacao("Matheus", "back-end em Node.js"); //chamado da função saudacao

console.log(mensagem_da_saudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado + 10);
console.clear();

//salvar em PDF

// const numero=Number=('10')

//FUNÇÕES ANÔNIMAS

const dobro_do_numero = function (numero) {
  return numero * 2;
};

const dobro = dobro_do_numero(2);
console.log(dobro);

console.clear();

//ARROW FUNCTIONS:FUNÇÃO SETA

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

// const multiplicar = (numero1, numero2) => {
//   if (numero1 < 0) console.log("O numero 1 é negativo");

//   return numero1 * numero2;
// };

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triplo_do_numero = (numero) => numero * 3;
