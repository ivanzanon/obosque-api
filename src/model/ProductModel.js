const Sequelize = require('sequelize');

const Model = Sequelize.Model;

const sequelize = new Sequelize('postgres://postgres:zanon@localhost:5431/postgres');

class Produto extends Model {};

Produto.init({
    prd_descricao: {
        type: Sequelize.STRING,
        allownull: false,
    }, 
    prd_unidade: {
        type: Sequelize.STRING,
        allownull: false,
    }
}, {sequelize});

Produto.sync().then(() => {
    console.log('Tabela de Produtos sincronizada e OK!');
});

module.exports = Produto;