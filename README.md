# Node.js CRUD API


Este repositório apresenta um aplicativo básico CRUD (Create, Read, Update, Delete) desenvolvido em Node.js para criar uma API REST de um projeto chamado VetClinic, que seria API direcionada para um sistema de cliníca veterinária. A principal meta é exercitar os conhecimentos adquiridos em Node.js, como parte do estudo dessa tecnologia.



## Tecnologias Utilizadas

- **Node.js:** Plataforma JavaScript do lado do servidor.
- **Express:** Framework web para Node.js.
- **Sequelize:** ORM (Object-Relational Mapping) para interagir com o banco de dados SQLite.
- **Nodemon:** Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina antes de prosseguir.

## Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/lucasbomfim15/VetClinic.git
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd VetClinic
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Instale o Nodemon globalmente (caso ainda não tenha):**

    ```bash
    npm install -g nodemon
    ```

    **Nota:** Se você já tem o Nodemon instalado globalmente, pode pular esta etapa.

## Configuração do Banco de Dados

- Este projeto utiliza o Sequelize como ORM (Object-Relational Mapping) e SQLite como banco de dados. Certifique-se de configurar as credenciais de banco de dados no arquivo `db/connection.js`.

## Execução

Execute o seguinte comando para iniciar o servidor usando Nodemon:

```bash
npm start
