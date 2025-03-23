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

Exemplo de código:
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
```

---

## 🎨 CSS (Cascading Style Sheets)  

### 📌 Estrutura do `style.css`
O arquivo `style.css` é responsável pela estilização da página, contendo:
- **Reset CSS:** Remove margens e paddings padrão.
- **Fonte personalizada:** `Heebo` do Google Fonts.
- **Navbar responsiva:** Oculta a lista de navegação em telas menores.
- **Banner e Posts:** Estilização e alinhamento dos conteúdos.

### 📌 Exemplo de código:
```css
header #navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## ⚡ JavaScript  
O projeto atual não possui JavaScript, mas futuras funcionalidades podem ser implementadas, como:
- Animações interativas.
- Menu mobile expansível.
- Validações de formulário.


Essa documentação fornece uma visão clara da estrutura do projeto, facilitando futuras modificações e implementações.
