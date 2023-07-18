import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const expenses = [
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
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
