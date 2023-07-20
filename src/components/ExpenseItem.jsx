import React,{ useState}from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) =>{
    
    const expenseAmount = props.price
    const [title,setTitle] = useState(props.title)
    const [count,setCount ] = useState(0)
    const appDateHendler = () => {
        setCount(count + 1)

    }
    
    return(
        <div className="expense-item">
            <h2 className="expense-item__description" >{title}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
            <ExpenseDate date={props.date}/>
            <button onClick={appDateHendler}>update</button>
            <p> vy kliknuly {count} ras</p>
        </div>
    )
}

export default ExpenseItem;