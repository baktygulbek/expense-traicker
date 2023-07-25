 import React from "react"
 import ExpenseForm from "./ExpenseForm";
 import './NewExpenses.css'
 
 
 
 const NewExpenses = (props) => {
    const saveExpenseDate = (expense) => {
          const dateWithId = {
      id: Math.random().toString(),
      ...expense
    }
      props.onGet(dateWithId)
    
    } 



    return (
        <div className="new-expense">
         <ExpenseForm onSave ={saveExpenseDate} />
        </div>
    )
 }

 export default NewExpenses