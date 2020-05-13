const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zanon@localhost:5431/postgres');

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados OK!');
  })
  .catch(err => {
    console.log('deu erro! na conexão');
  });

  module.exports = sequelize;