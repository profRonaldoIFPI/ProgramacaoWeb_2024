## Express.js e EJS: Templates e Renderização de Conteúdo

Este repositório contém um exemplo de como utilizar o módulo EJS (Embedded JavaScript Templates) para renderizar templates HTML dinamicamente em uma aplicação web com Express.js.

**Conteúdo da Aula:**

* **Introdução a Template Engines:**
    * O que são template engines e por que utilizá-las.
    * Vantagens de utilizar EJS.
* **Configurando EJS no Express.js:**
    * Instalação e configuração do EJS como view engine.
    * Renderização de templates.
* **Passando dados para os templates:**
    * Utilizando `res.render()` para passar dados para o template.
    * Acessando os dados dentro do template EJS.

**Para executar o código:**

1. **Instalar o Node.js:** Baixe e instale o Node.js do site oficial ([https://nodejs.org/](https://nodejs.org/)).
2. **Criar um novo diretório:** Crie uma pasta para o projeto.
3. **Baixar os arquivos do projeto:** Baixe os arquivos deste repositório para o diretório criado.
4. **Instalar as dependências:** Execute o comando `npm install` no terminal dentro do diretório do projeto para instalar as dependências necessárias.
5. **Iniciar o servidor:** Execute o comando `node index.js` no terminal para iniciar o servidor.
6. **Acessar o servidor:** Abra o navegador e acesse `http://localhost:8080`.
7. **Preencher o formulário:** Preencha os campos "Nome" e "Sobrenome" no formulário e clique em "Enviar".
8. **Visualizar o resultado:** A página de cadastro será renderizada com os dados preenchidos no formulário.

**Arquivos de código:**

* **`index.js`:**
    * Configura o Express.js e o EJS.
    * Define rotas para o formulário (`/`) e para a página de cadastro (`/cadastro`).
    * Passa os dados do formulário para o template de cadastro.
* **`form.ejs`:**
    * Define o formulário HTML.
* **`cadastro.ejs`:**
    * Renderiza a página de cadastro com os dados recebidos do formulário.

**Lembre-se:** Este código é um exemplo básico. Explore as diversas funcionalidades do EJS e do Express.js para criar aplicações web mais complexas.