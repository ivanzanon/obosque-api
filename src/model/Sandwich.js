/**
 * 
 * @author Ivan Zanon
 * 
 * @description Model of Sandwich - store the different sandwiches to offer
 * 
 */

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('postgres://postgres:Zanon@9853@localhost:5432/postgres');

class Sandwich extends Model {};

Sandwich.init({
    nome: {
        type: Sequelize.STRING,
        allownull: false,
    }, 
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allownull: false,
    }
}, {sequelize});

Sandwich.sync().then(() => {
    console.log('Tabela de Sanduíches sincronizada e OK!');
});

module.exports = Sandwich;