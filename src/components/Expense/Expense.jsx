import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expense.css";
import ExpensFiltir from "./ExpensFiltir";

function Expense({ expensesDate }) {
  const [filtiredYear, SetFiltiredYear] = useState("2023");

  const getSelectedYear = (selectedYear) => {
    SetFiltiredYear(selectedYear);
   
  };

  const filteredExpenses = expensesDate.filter((expense) => {
    return expense.date.getFullYear().toString() === filtiredYear;
  })
  let expensContent = <p style={{color: 'red'}}> No expenses found</p>
  if (filteredExpenses.lenght > 0){
    expensContent = filteredExpenses.map((el) =>{
      return  <ExpenseItem
            key={Math.random()}
            title={el.title}
          amount={el.amount}
            date={el.date}
          />
    })
  }
   if( filtiredYear ==="All") {
    expensContent = filteredExpenses.map((el) =>{
      return  <ExpenseItem
            key={Math.random()}
            title={el.title}
          amount={el.amount}
            date={el.date}
          />
    })
   }
 
  return (
    <Card className="expenses">
      <ExpensFiltir filtiredYear={filtiredYear} onSelected={getSelectedYear} />
       {expensContent}


{/* // {filteredExpenses.map((el) => { */}
{/* //         return  <ExpenseItem */}
{/* //             key={Math.random()}
//             title={el.title}
//           amount={el.amount}
//             date={el.date}
//           />
        
//       } */}
      








     {/* filteredExpenses.length ===0 ? <p style={{color:'red'}}>No espenses found</p> : filteredExpenses.map
      return <ExpenseItem */}
      {/* {filteredExpenses.map((el) => {
        return (
          <ExpenseItem
            key={Math.random()}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })} */}


    </Card>
  );
}

export default Expense;
