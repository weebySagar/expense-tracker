const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const db = require('./utils/database');
const expenseRoutes = require('./routes/expense');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/expense',expenseRoutes);


db.sync().then(()=>app.listen(3000)).catch(err=>console.log(err))







