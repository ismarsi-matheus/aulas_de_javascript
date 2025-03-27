//Muito útil quando sua variável possui valores específicos

const permissoes = "admin"; //'aluno || professor || admin'

switch (permissoes) {
  case "aluno":
    console.log("Voce só pode visualizar o conteudo");
    break;
  case "professor":
    console.log("Voce pode alterar as aulas e adicionar exercicios");
    break;
  case "admin":
    console.log("Voce pode fazer o que quiser");
    break;
  default:
    console.log("Não sei quem voce eh");
}
