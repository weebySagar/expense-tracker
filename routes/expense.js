const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/',expenseController.getHome)

router.get('/getAllExpense',expenseController.getAllExpenses);

router.post('/addExpense',expenseController.addExpense);

router.delete('/deleteExpense/:id',expenseController.deleteExpense);

router.post('/editExpense/:id',expenseController.editExpense);

module.exports = router;