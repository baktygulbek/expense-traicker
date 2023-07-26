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

  //  функция которая передается как пропс для получения данных с form
  const filteredExpenses = expensesDate.filter((expense) => {
    return expense.date.getFullYear().toString() === filtiredYear;
  });

  let expensContent = <p style={{ color: "red" }}> No expenses found</p>;

  if (filteredExpenses.lenght > 0) {
    expensContent = filteredExpenses.map((el) => {
      return (
        <ExpenseItem
          key={Math.random()}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      );
    });
  }
  if (filtiredYear === "All") {
    expensContent = filteredExpenses.map((el) => {
      return (
        <ExpenseItem
          key={Math.random()}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensFiltir filtiredYear={filtiredYear} onSelected={getSelectedYear} />
      {expensContent}
    </Card>
  );
}

export default Expense;
