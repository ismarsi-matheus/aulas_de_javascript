//obter a idade da pessoa -> idade=18?->sim->voce é maior de idade
//->não->voce é menor de idade

const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual eh a sua idade?"));



const eh_maior_de_idade = idade >= 18;

//Estrutura condicional :if/else

if(idade >=18){
    //Faça alguma coisa...
    console.log("Voce eh maior de idade");
} else{
    //Faça outra coisa...
    console.log("Voce eh menor de idade");
}

const media_do_aluno = 7;

//Média >=7  -> Aprovado
//Média <7 -> Reprovado

// if(media_do_aluno >= 7){
//     console.log("Aprovado");
// } else{
//     console.log("Reprovado");
//}

if(media_do_aluno >= 7){
    console.log("Aprovado");
    console.log("Parabens!!😁👍");

} else if(media_do_aluno < 7 && media_do_aluno >= 5){
    console.log("Prova final");

}
else{    
    console.log("Reprovado");
}

//1.Preciso ser maior de idade  
//2. Preciso ter carteira de motorista

const idade_da_pessoa = 18;
const tem_cnh = true;

if(idade_da_pessoa >= 18 && tem_cnh){
    console.log("Voce pode dirigir");
} else{
    console.log("Voce nao pode dirigir");
}