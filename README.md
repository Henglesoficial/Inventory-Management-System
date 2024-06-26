# Inventory-Management-System

?branch= [![Netlify Status](https://api.netlify.com/api/v1/badges/53a45d6e-d0e7-4594-b5e4-270a6487dfa1/deploy-status)](https://app.netlify.com/sites/gerenciamentodeestoque/deploys)

Relatório de Desenvolvimento: Controle de Estoque com Node.js, Express e MongoDB

Este relatório descreve o desenvolvimento de uma API simples para controle de estoque utilizando Node.js, Express e MongoDB. O objetivo da API é permitir a adição de novos produtos ao estoque e o registro de vendas, atualizando a quantidade em estoque dos produtos.

Tecnologias Utilizadas:

Node.js: Plataforma de desenvolvimento JavaScript para construção de aplicações do lado do servidor.
Express: Framework web para Node.js que facilita a criação de APIs.
MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.
Mongoose: Biblioteca do Node.js que simplifica a interação com o MongoDB, fornecendo uma camada de modelagem de dados.
Configuração do Projeto:

Foram instaladas as bibliotecas necessárias (express, body-parser, mongoose) utilizando o npm (Node Package Manager).
O aplicativo Express foi configurado para fazer parsing do corpo das requisições como JSON.
Foi definido um esquema para representar um produto no banco de dados MongoDB, incluindo nome, quantidade, preço e data de validade.
Funcionalidades Implementadas:

Rota para adicionar um novo produto ao estoque:

Utiliza o método POST para receber os dados do produto e adicioná-lo ao banco de dados.
Cria uma instância do modelo Produto com os dados recebidos e a salva no banco de dados.
Rota para registrar uma venda e atualizar o estoque:

Utiliza o método POST para receber os dados da venda e atualizar a quantidade em estoque do produto.
Verifica se a quantidade em estoque é suficiente para a venda e atualiza a quantidade em estoque do produto no banco de dados.
Considerações Finais:

A API desenvolvida fornece funcionalidades básicas para controle de estoque, como adição de produtos e registro de vendas.
Para melhorar a API, podem ser implementadas funcionalidades adicionais, como consulta de produtos em estoque, atualização de informações de produtos e remoção de produtos do estoque.