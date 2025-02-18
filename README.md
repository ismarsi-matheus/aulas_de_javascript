
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

- **Hipertexto** significa que, diferentemente de um texto comum, ele pode conter referências navegáveis para outros textos.  
- Essas referências são chamadas de **links**.  
- Podemos considerar praticamente toda a web como um único hipertexto.  
- **Linguagem de marcação**: Possui símbolos especiais que indicam metainformações.  
- Essas metainformações referem-se à forma, hierarquia, ordem e/ou semântica dos elementos da página.  
- **HTML não é uma linguagem de programação**, mas de marcação.  
- Criado em **1991**, atualmente está na versão **5** (lançada em 2014).  

### 🔹 Marcação → Tags  
- As **tags HTML** são delimitadas por `<` e `>`.  
- Usadas para descrever o elemento que será adicionado.  

**Exemplo de tags HTML:**  
```html
<button> Clique aqui </button>
<p> Parágrafo de texto </p>
```

---

## 🎨 CSS (Cascading Style Sheets)  

- Linguagem de **estilização**.  
- Utilizada para **melhorar a aparência** das páginas web.  
- Permite estilizar os elementos HTML, garantindo uma **interface mais agradável** para os usuários de uma aplicação.  

---

## ⚡ JavaScript  

- **Linguagem de programação mais utilizada** entre os desenvolvedores.  
- Usada no **Front-End, Back-End e Mobile**.  
- Os **navegadores (browsers) executam o JavaScript**.  
- Existem inúmeros **frameworks baseados em JavaScript**.  

---

## 🚀 TypeScript  
Superset do JavaScript que adiciona tipagem estática ao código, aumentando a segurança e a manutenibilidade.  

---

## ✅ Linter  

Ferramenta para melhorar a qualidade do código, analisando e identificando possíveis problemas.  

### 🔹 Benefícios do Linter  
1. Minimiza o número de **erros em produção**.  
2. Garante um código **mais legível, manutenível e consistente**.  
3. Reduz discussões sobre estilos de código em **code reviews**.  
4. Código mais **performático e seguro**.  
5. **Educa desenvolvedores** sobre a qualidade do código.  

### 🔹 ESLint  
Linter específico para **JavaScript**.  

---

## 🌐 Como a Web Funciona?  

### 📌 Arquitetura Cliente-Servidor  

O modelo cliente-servidor define como os dispositivos se comunicam na web.  

**Fluxo básico:**  
1. O **cliente** (navegador) faz uma **requisição** ao servidor.  
2. O **servidor** processa a requisição e envia uma **resposta**.  

---

## 📡 Protocolo HTTP  

- **HTTP (Hypertext Transfer Protocol)**: Define como as mensagens devem ser enviadas entre cliente e servidor em uma rede IP.  
- Utilizado principalmente para a **solicitação e recebimento de páginas web** pela internet.  
- O HTTP usa o protocolo **TCP/IP** para o transporte das informações.  

### 🔹 O que é um IP?  
- O **IP (Internet Protocol)** funciona como um "CPF" dos dispositivos na internet.  
- Cada dispositivo possui um **IP único**.  

**Exemplos de endereços IP:**  
- IPv4: `192.168.10.150`  
- IPv6: `3002:0bd6:0000:0000:ee00:0033:6778`  

### 🔹 Como obtemos o IP do servidor digitando apenas uma URL?  
- Para obter o **endereço IP** de um servidor ao digitar uma URL, o navegador consulta um **servidor DNS (Domain Name System)**.  
- Existem cerca de **13 servidores DNS principais** que informam o endereço IP dos servidores a partir de seus domínios.  

