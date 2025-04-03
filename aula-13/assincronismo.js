const fs = require("fs");

//*1.Callbacks

// console.log('Antes de ler o arquivo...');

// //função assíncrona(ler um arquivo leva um tempo)
// fs.readFile('aula-13/arquivo.txt',(erro,conteudo_do_arquivo)=>{
//     if(erro){
//         console.log('Ocorreu um erro ao tentar ler o arquivo:',erro);
//     } else{
//         console.log(String(conteudo_do_arquivo));
//     };
// });

// console.log('Depois da função de ler o arquivo');
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//exemplo 2:setTimeout ();
// console.log('Antes do setTimeout...');

// setTimeout(()=>{
//     console.log('Isso aqui vai ser executado após 2 segundos');
// },2 * 1000);

// console.log('Depois do setTimeout...');

//2.promises(promessas);
console.clear();
console.log("Antes da criação da promise...");
const promessa = new Promise((resolve, reject) => {
  fs.readFile("aula-13/arquivo.txt", (erro, conteudo_do_arquivo) => {
    if (erro) {
      reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
    } else {
      resolve(String(conteudo_do_arquivo));
    }
  });
}); //criando uma promessa

promessa
  .then((reorrno_do_resolve_da_promessa) => {
    console.log("Deu certo:", reorrno_do_resolve_da_promessa);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado independente do sucesso ou fracasso ,no final dela "
    );
  });

console.log("Antes da criação da promise...");
function ler_arquivo_promise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (erro, conteudo_do_arquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudo_do_arquivo));
      }
    });
  });
} //criando uma promessa

ler_arquivo_promise()
  .then((retorno_do_resolve_da_promessa) => {
    console.log("Deu certo:", retorno_do_resolve_da_promessa);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado independente do sucesso ou fracasso ,no final dela "
    );
  });

//*3.Assync/await
console.clear();

async function leitura_de_dados() {
  console.log("isso é executado ants da promise ser resolvida");
  try {
    const dados_do_arquivo_lido = await ler_arquivo_promise(); //espera a promessa ser resolvida para avançar no código

    console.log(dados_do_arquivo_lido);
    console.log("Isso é executado DEPOIS da promise ser resolvida");
  } catch (err) {
    console.log(err);
    console.log('Isso aqui é executado depois da promise(com err)')
  } finally{
    console.log('Dentro do finally')
  }
}

leitura_de_dados();
