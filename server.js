const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const requireDir = require('require-dir');
require('path');

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize('postgres://postgres:Zanon@9853@localhost:5432/postgres');

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