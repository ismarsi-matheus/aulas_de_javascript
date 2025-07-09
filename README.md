Claro, Matheus! Aqui está o conteúdo completo do README com tudo que foi abordado até agora, incluindo as seções sobre HTML, CSS, JavaScript e JSON — tudo formatado em Markdown prontinho pra colar no seu repositório:

# Front-End e Web Development  

## O que é Front-End?  
Corresponde à parte visual da aplicação, aquela com a qual o usuário interage.  

### Desenvolvedor Front-End  
Profissional responsável por desenvolver os códigos que garantem uma página web consistente, responsiva e com boa experiência do usuário (UX).  

### Desenvolvedor Front-End vs UI/UX Designer  
- O desenvolvedor front-end implementa as funcionalidades e a estrutura da interface.  
- O UI/UX Designer cuida da aparência e da experiência do usuário.  

---

## 🔹 Terminologias  

### 📌 Framework  
Conjunto de bibliotecas.  

### 📌 Biblioteca  
Conjunto de pacotes.  

### 📌 Pacote  
Coleção de funções (funcionalidades prontas para uso).  

### 📌 Linguagem de Programação  
Conjunto de regras que permitem criar um código que informa instruções de processamento ao computador.  

### 📌 Linguagem de Máquina  
Linguagem entendida pelo computador e de difícil compreensão para o ser humano.  

### 📌 Hardware  
Dispositivo físico construído por circuitos elétricos.  

---

## 🌍 HTML (HyperText Markup Language)  

### 📌 Estrutura do `index.html`
O arquivo `index.html` é a estrutura base da aplicação e contém:
- `head`: Define metadados e importa a fonte `Heebo` do Google Fonts.
- `body`: Estrutura principal da página, contendo:
  - `header`: Barra de navegação com nome, links e menu hamburguer responsivo.
  - `main`: Seções de banner e posts.
  - `footer`: Ainda não implementado.

### 📌 Seções do `index.html`
- **Navbar:** Contém a identidade visual e links principais.
- **Banner:** Apresenta o desenvolvedor com imagem e botão de download do CV.
- **Posts:** Lista posts recentes com título, data e resumo.

```html
<header>
  <nav id="navbar">
    <a href="#" class="nav_brand">Matheus Ismarsi</a>
    <ul class="nav_list">
      <li class="nav_item"><a href="#">Works</a></li>
      <li class="nav_item"><a href="#">Blog</a></li>
      <li class="nav_item"><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

🎨 CSS (Cascading Style Sheets)

📌 Estrutura do style.css

O arquivo style.css é responsável pela estilização da página, contendo:

Reset CSS: Remove margens e paddings padrão.

Fonte personalizada: Heebo do Google Fonts.

Navbar responsiva: Oculta a lista de navegação em telas menores.

Banner e Posts: Estilização e alinhamento dos conteúdos.

header #navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

⚡ JavaScript

O projeto passou a contar com funcionalidades básicas utilizando JavaScript puro, com foco em boas práticas e organização do código.

📌 ESLint

O projeto utiliza o ESLint como ferramenta de análise estática para manter a qualidade do código:

Enforce de aspas duplas.

Obrigatoriedade de ponto e vírgula.

Identificação de variáveis não utilizadas.

Configuração de ambiente para Node e navegador.

📌 Interações implementadas

Impressão no terminal com console.log.

Manipulação de variáveis, tipos primitivos e condicionais (if, else, operadores lógicos).

Uso de estruturas de repetição como for e while.

Construção e manipulação de listas: push(), remove(), index(), len().

Leitura de entrada do usuário com conversão de tipos (int, float).

Aplicação de operadores aritméticos e lógicos.

Estruturação de expressões condicionais com if, elif, else.

📦 JSON (JavaScript Object Notation)

📘 Introdução

JSON é um formato leve e baseado em texto para troca de dados entre sistemas. Embora tenha origem no JavaScript, é compatível com diversas linguagens como Python, PHP, Java, entre outras.

Ele representa dados como pares chave/valor e é ideal para comunicação estruturada entre cliente e servidor.

✅ Vantagens

Leitura e escrita simples para humanos e máquinas.

Formato leve e eficiente para transporte de dados.

Padronizado, com suporte a números, strings, booleanos, arrays e objetos.

Excelente integração com JavaScript nativo (JSON.parse() e JSON.stringify()).

🚀 Aplicações

Comunicação via APIs RESTful.

Armazenamento local de dados.

Configuração de sistemas e bibliotecas.

Bancos de dados NoSQL como o MongoDB.

Transmissão de dados estruturados entre backend e frontend.

🔤 Regras importantes

Strings e chaves devem usar aspas duplas ".

Suporte nativo a true, false, null.

Não aceita comentários ou aspas simples.

🧠 Exemplo

{
  "nome": "Matheus",
  "idade": 24,
  "ativo": true,
  "linguagens": ["JavaScript", "Python"]
}

Essa documentação apresenta os fundamentos, tecnologias e lógicas usadas no projeto, servindo como guia técnico para quem quiser colaborar, estudar ou expandir a aplicação.
