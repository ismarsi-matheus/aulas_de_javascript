//Operadores Booleanos :comparação de valores

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);//false
console.log(numero1 === numero2);//false
console.log(numero1 === "10");//false
console.log(numero1 == "10");//true

console.log(numero1 !== numero2);//true
console.log(numero1 !== numero2);//true

console.log(numero1 > numero2);//false
console.log(numero1 < numero2);//true
console.log(numero1 >= numero2);//false
console.log(numero1 <= numero2);//true

const idade_pessoa1 = 16;
const idade_pessoa2 = 39;

console.log(idade_pessoa1 >= 18 && idade_pessoa2 >= 18 );//false
console.log(idade_pessoa1 >= 18 || idade_pessoa2 >= 18 );//true

console.log(!true);

console.log(!(idade_pessoa1 >=18));//Retoorna verdadeiro se a pessoa for menor de idade



