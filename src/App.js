import React, { useState } from "react";

import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const INIT_DATA = [
  {
    id: "1",
    title: "Car insurance",
    price: 200,
    date: new Date(2023, 6, 20),
  },
  {
    id: "2",
    title: "online course",
    price: 100,
    date: new Date(2022, 5, 20),
  },
  {
    id: "3",
    title: "Kinder carden",
    price: 50,
    date: new Date(2020, 3, 20),
  },
  {
    id: "4",
    title: "Toilet Pouer",
    price: 100,
    date: new Date(2021, 1, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_DATA);
  const getExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpenses onGet={getExpenseHandler} />
      <Expense expensesDate={expenses} />
    </div>
  );
}

export default App;
