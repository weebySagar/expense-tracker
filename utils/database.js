const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodjs_learning','root','admin',{dialect:'mysql','host':'127.0.0.1',port:'5000'})



module.exports = sequelize;