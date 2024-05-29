## Express.js: Rotas e Parâmetros

Este repositório contém um exemplo básico de como utilizar o módulo Express.js para definir rotas e lidar com parâmetros em uma aplicação web.

**Conteúdo da Aula:**

* **Introdução ao Express.js:**
    * Instalação e inicialização do módulo.
    * Criação de um servidor web básico.
* **Definindo Rotas:**
    * Utilização do método `app.get()` para definir rotas.
    * Tratando requisições e respostas.
* **Parâmetros nas Rotas:**
    * Rotas com parâmetros obrigatórios.
    * Rotas com parâmetros opcionais.
    * Acessando os valores dos parâmetros.

**Para executar o código:**

1. **Instalar o Node.js:** Baixe e instale o Node.js do site oficial ([https://nodejs.org/](https://nodejs.org/)).
2. **Criar um novo diretório:** Crie uma pasta para o projeto.
3. **Baixar os arquivos do projeto:** Baixe os arquivos deste repositório para o diretório criado.
4. **Instalar as dependências:** Execute o comando `npm install` no terminal dentro do diretório. Este comando irá instalar os módulos (as dependências necessárias) descritos no arquivo `packege.json`.
5. **Iniciar o servidor:** Execute o comando `node index.js` no terminal para iniciar o servidor.
6. **Acessar o servidor:** Abra o navegador e acesse `http://localhost:8080`.

**Como explorar o código:**

* **Rotas básicas:**
    * Acesse `http://localhost:8080` para visualizar a rota raiz.
    * Acesse `http://localhost:8080/rota1` para visualizar a rota "rota1".
    * Acesse `http://localhost:8080/rota1/rota2` para visualizar a rota "rota1/rota2".
* **Parâmetros obrigatórios:**
    * Acesse `http://localhost:8080/rota3/valor` para enviar um parâmetro "valor" para a rota "rota3".
* **Parâmetros opcionais:**
    * Acesse `http://localhost:8080/rota4` para acessar a rota "rota4" sem enviar um parâmetro.
    * Acesse `http://localhost:8080/rota4/valor` para enviar um parâmetro "valor" para a rota "rota4".

**Lembre-se:** Este código é um exemplo básico. Explore as diversas funcionalidades do Express.js para criar aplicações web mais complexas.