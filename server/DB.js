const {Sequelize} = require('sequelize');
/*
    Файл подключения к бд

    Вариант подключения 1
    const sequelize = new Sequqlize('postgres://user:pass@example.com:5432/dbname')

    Вариант подключения 2
    const sequelize = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: /* 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    })
*/

module.exports = new Sequelize(
    "spent_market",
    "postgres",
    "1",
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);