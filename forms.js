// Importar bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configurar o aplicativo Express
const app = express();
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/confeitariaDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir o esquema do produto
const produtoSchema = new mongoose.Schema({
    nome: String,
    quantidade: Number,
    preco: Number,
    dataValidade: Date
});

// Modelo de produto
const Produto = mongoose.model('Produto', produtoSchema);

// Rota para adicionar um novo produto ao estoque
app.post('/produto', async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        await novoProduto.save();
        res.status(201).send('Produto adicionado ao estoque com sucesso.');
    } catch (err) {
        console.error("Erro ao adicionar produto:", err);
        res.status(500).send('Erro ao adicionar o produto ao estoque.');
    }
});

// Rota para registrar uma venda e atualizar o estoque
app.post('/venda', async (req, res) => {
    const { idProduto, quantidadeVendida } = req.body;
    try {
        const produto = await Produto.findById(idProduto);
        if (!produto) {
            res.status(404).send('Produto não encontrado.');
            return;
        }

        if (produto.quantidade < quantidadeVendida) {
            res.status(400).send('Quantidade insuficiente em estoque.');
            return;
        }

        produto.quantidade -= quantidadeVendida;
        await produto.save();

        if (produto.quantidade < produto.quantidadeMinima) {
            console.log(`Atenção: A quantidade de ${produto.nome} está abaixo do mínimo.`);
        }

        res.status(200).send('Venda registrada com sucesso.');
    } catch (err) {
        console.error("Erro ao registrar a venda:", err);
        res.status(500).send('Erro ao registrar a venda.');
    }
});

// Iniciar o servidor
const porta = 3306;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});