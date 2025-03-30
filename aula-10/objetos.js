const array = ["Matheus", 27, 1.93, true];

const pessoa = {
  nome_da_pessoa: "Matheus",
  idade: 2,
  altura: 1.93,
  ehprogramador: true,
  hobbies:['Jogar FIFA','Academia','ler'],
  imprimir_algo:() =>{console.log('imprimir!')}
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.hobbies);

pessoa.profissao='Desenvolvedor'

pessoa.nome='Leonardo Ismarsi';

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimir_algo();

const idade =27;
const altura = 1.77;

const objeto ={
    idade,
    altura,
};

console.log(objeto);
console.clear();


const { nome,hobbies } =pessoa;
console.log(nome);
console.log(hobbies);
console.log(pessoa);

