const form= document.querySelector('#expenseForm');
const expenseList = document.querySelector('.list-group')


form.addEventListener('submit',addExpense);
expenseList.addEventListener('click',deleteExpense);
expenseList.addEventListener('click',editExpense)



function addExpense(e){
e.preventDefault();
const amount = e.target.amount.value;
const desc = e.target.description.value;
const category =e.target.category.value;

if(amount && desc && category){

// creating new list and appending
const li = document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(`${amount}    `));
li.appendChild(document.createTextNode(`${category}  `))
li.appendChild(document.createTextNode(`${desc}   `));




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

e.target.amount.value='';
e.target.category.value='';
e.target.description.value='';
}

}


// for deleting list
function deleteExpense(e){
    if(e.target.classList.contains('delete')){
        const li = e.target;
        expenseList.removeChild(li.parentElement)
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
            
            expenseList.removeChild(li);
        }
    }
   

}