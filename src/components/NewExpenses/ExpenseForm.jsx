
import React,{useState} from "react";
 import  './ExpenseForm.css'


    const ExpenseForm = (props) => {
         console.log(props.onGet);

        const [title,setTaitle] = useState('')
        const [amount,setAmount] = useState('')
        const [date,setDate] = useState('')



    const titleChangeHandler = (event) =>{
      setTaitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
      }
      const dateChangeHandler = (event) =>{
        setDate(event.target.value);
      }

      const addExpense = (event) =>{
        event.preventDefault()
        const curretExpense = {
          title: title,
          amount: amount,
          date: new Date(date)
        }
        props.onSave(curretExpense)
      }
  return (
    <form onSubmit={addExpense}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input value={title} name="title" onChange={titleChangeHandler}type="text"  />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input name="amount" onChange={amountChangeHandler}type="number" min={"1"} step={"1"} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input name="date" onChange={dateChangeHandler} type="date" min={"2022-01-01"} max={"2026-01-01"}/>
        </div>
        <div />
      </div>
      <button className="new-expense__actions" type="sumbit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
