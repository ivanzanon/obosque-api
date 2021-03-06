/**
 * 
 * @author Ivan Zanon
 * 
 * @description Model of Products - for the control of products used to make a sandwich
 * 
 */

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('postgres://postgres:zanon@localhost:5431/postgres');

class Produto extends Model {};

Produto.init({
    descricao: {
        type: Sequelize.STRING,
        allownull: false,
    }, 
    unidade: {
        type: Sequelize.STRING,
        allownull: false,
    }
}, {sequelize});

Produto.sync().then(() => {
    console.log('Tabela de Produtos sincronizada e OK!');
});

module.exports = Produto;