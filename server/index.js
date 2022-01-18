const express = require('express');

const sequelize = require('./DB.js');
const models = require('./models/model.js');
const cors = require("cors");
const router = require('./routes/index')
require('dotenv').config();

const PORT = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req,res) => {
  res.status(200).json({message:'Working'})
});

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