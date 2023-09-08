const Sequelize = require('sequelize');

const db = require('../utils/database');

const Expense = db.define('expense',{
id:{
    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
},
amount:{
    type:Sequelize.DOUBLE,
    allowNull:false,

},
description:{
    type:Sequelize.STRING,
    allowNull:false
},
category:{
    type:Sequelize.STRING,
    allowNull:false
}
});

module.exports = Expense;