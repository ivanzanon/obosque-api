const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const requireDir = require('require-dir');

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize('postgres://postgres:zanon@localhost:5431/postgres');

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados OK!');
  })
  .catch(err => {
    console.log('deu erro! na conexão');
  });

requireDir("./src/model");

app.use('/api', require("./src/routes"));
app.listen(3002);