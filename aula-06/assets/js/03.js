const prompt = require('readline-sync');




const idade= prompt.question("Qual eh a sua idade?");
const idade_number = Number(idade);



console.log(idade_number,typeof idade_number);

//coerção explicita(conversão manual)

console.log(Number("X"));//not a number


console.log(String("10"),typeof String("10"));
console.log(Boolean(1),typeof Boolean(1));

//coerção implícita

console.log(10 + "10");//1010
console.log("50" + 5);//505
console.log(10 - "5");//5
console.log(10 * "5");//50
console.log(10 / "5");//2 

//Qual será a saída desse código?
let n=1 +'1'

x= n-1
console.log(x);//0

//Qual será a saída desse código?
console.log(2+3+4+'5');//95
// Qual será a saída desse código?
console.log('5'+2+3+4);//5234
// Qual será a saída desse código?
console.log('10' - '4' - '3'-2+'5');//15