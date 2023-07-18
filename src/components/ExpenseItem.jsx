import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) =>{
    const expenseTitle = props.title
    const expenseAmount = props.price
    
    return(
        <div className="expense-item">
            <h2 className="expense-item__description" >{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
            <ExpenseDate date={props.date}/>
        </div>
    )
}

export default ExpenseItem;