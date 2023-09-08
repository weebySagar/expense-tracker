const form= document.querySelector('#expenseForm');
const expenseList = document.querySelector('.list-group')


form.addEventListener('submit',addExpense);
expenseList.addEventListener('click',deleteExpense);
expenseList.addEventListener('click',editExpense);
document.addEventListener('DOMContentLoaded',getAllExpensesApi);


const expense ={
    id:null,
    amount : null,
    description:null,
    category:null
}


function addExpense(e){
e.preventDefault();
expense.amount = e.target.amount.value;
expense.description = e.target.description.value;
expense.category =e.target.category.value;

if(expense.amount && expense.description && expense.category){
    console.log(amount,description,category);
 createExpenseApi(expense,expense.id);
}
expense.amount=null;
expense.category=null;
expense.description=null;
}


function createExpenseList(expense){
    const {amount,category,description,id}= expense
// creating new list and appending
const li = document.createElement('li');
li.className='list-group-item';
li.id=id;
li.appendChild(document.createTextNode(`${amount}    `));
li.appendChild(document.createTextNode(`${category}  `))
li.appendChild(document.createTextNode(`${description}   `));




// create an delete button
const deleteBtn = document.createElement('button');
deleteBtn.className='btn btn-danger btn-sm float-end delete';
deleteBtn.textContent='Delete';
li.appendChild(deleteBtn);


// create an edit button
const editBtn = document.createElement('button');
editBtn.className='btn btn-success btn-sm mx-2 float-end edit';
editBtn.textContent='Edit';
li.appendChild(editBtn)


const ul = document.querySelector('.list-group');
ul.appendChild(li);


}


// for deleting list
function deleteExpense(e){
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        console.log(li.id);
        deleteExpenseApi(li.id).then(()=>
        
        expenseList.removeChild(li.parentElement)
        )
    }

}


// for editing list
function editExpense(e){
    if(e.target.classList.contains('edit')){
        if(!form.amount.value || !form.amount.value || !form.amount.value){

            const li = e.target.parentElement;
            
            
            form.amount.value=li.childNodes[0].textContent.trim();
            form.description.value=li.childNodes[2].textContent.trim();
            form.category.value=li.childNodes[1].textContent.trim();
            expense.id= li.id;
            
            expenseList.removeChild(li);
        }
    }
   

}


const baseUrl = 'http://localhost:3000/expense';


async function createExpenseApi(expense,id){
    console.log(expense);
    try {
        if(!id){

            await axios.post(`${baseUrl}/addExpense`,expense);
        }else{
            await axios.post(`${baseUrl}/editExpense/${id}`,expense);
        }
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
    
}

async function getAllExpensesApi(){
    try {
       const response= await fetch(`${baseUrl}/getAllExpense`);
       const data =await response.json();
       for(let i=0;i<data.length;i++){
        createExpenseList(data[i]);
       }
    } catch (error) {
        console.log(error);
    }
    
}

async function deleteExpenseApi(id){
    try {
       await axios.delete(`${baseUrl}/deleteExpense/${id}`)
    window.location.reload();       
    } catch (error) {
        console.log(error);
    }
    
}