const express = require('express');

const sequelize = require('./DB.js');
const models = require('./models/model.js');
const router = require('./routes/index')
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use('/api', router)
const start = async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Подключение к БД успешно ')
  } catch (e) {
    console.log('Подключение к БД невозможно ', e)
  }
};

start();
app.listen(PORT);