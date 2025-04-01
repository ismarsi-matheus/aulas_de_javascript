//high order functions

// * 1.função que retorna outra função como parâmetro (Cloujure)

function welcome(course_name) {
  return (student_name) => {
    console.log(
      `Olá ,${student_name}! Seja bem-vindo(a) ao curso de ${course_name}!`
    );
  };
}

const display_welcome_to_front_end_course = welcome("Front-end em React");
const display_welcome_to_back_end_course = welcome("Back-end em Node.js");

display_welcome_to_front_end_course("Matheus Ismarsi");

console.clear();
// * 2.função que recebe outra função como parâmetro ()

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//operacao:funcao que realiza a operacao entre os dois numeros
//         ou seja,ele precsa ser uma funcao uqe recebe dois numeros
const calcular = (num1, num2, funcao_da_operacao) =>
  funcao_da_operacao(num1, num2);

// calcular= (10,5,somar)=> somar(10,5);
const retorno = somar(10, 5, somar);

console.log(retorno);

//O calculo que eu qero é :(num1*num2)+(2*num1*num2)

const resultado=calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);

console.log(resultado);
