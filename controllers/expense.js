const Expense = require('../models/expense');
const path = require('path')

exports.getHome=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
}

exports.getAllExpenses=(req,res)=>{
    Expense.findAll().then(expense=>res.json(expense)).catch(err=>console.log(err))
}

exports.addExpense=(req,res)=>{
    console.log(req.body);
    const {amount,description,category} = req.body;
    Expense.create({amount,description,category}).then(()=>res.redirect('/expense')).catch(err=>console.log(err))
}

exports.deleteExpense=(req,res)=>{
    const {id }= req.params;
    Expense.destroy({where:{id}}).then(()=>res.redirect('/expense')).catch(err=>console.log(err))
}


exports.editExpense =(req,res)=>{
    const {id} = req.params;
    const {amount,description,category}= req.body;
    console.log(req.body);
    Expense.update({amount,description,category},{where:{id}}).then(()=>res.redirect('/expense')).catch(err=>console.log(err))
}
