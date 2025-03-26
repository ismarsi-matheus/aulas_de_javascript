console.log("Hello World!");
console.log("estamos na aula 06");

//javascript  possui tipagem dinâmica :interfere os tipos de dados
//javascript possui uma tipagem fraca: não é necessário declarar o tipo de dado

var nome = "Matheus Ismarsi"; //string (texto):utilize aspas simples ou duplas
var idade = 18; //number
var altura = 1.93; //number
var estudando = true; //boolean

var nome_do_professor = "Matheus Ismarsi"; //snack case

console.log(typeof nome); //typeof:retorna o tipo de dado
console.log(idade, typeof idade); //typeof:retorna o tipo de dado
console.log(estudando, typeof estudando); //typeof:retorna o tipo de dado
console.log(altura, typeof altura); //typeof:retorna o tipo de dado

var sem_conteudo; //undefined

console.log(sem_conteudo, typeof sem_conteudo); //typeof:retorna o tipo de dado

var curso = "Front-end em react",
  topico = "javascript basico I"; //declarando mais de uma variável na mesma linha

console.log(curso, topico);




//!Não utilize o var nos seus códigos, utilize o let e const

let nota_do_aluno = 10; //let:variável que pode ser alterada
const media = 8; //const:variável que não pode ser alterada

nota_do_aluno = 9; //alterando o valor da variável