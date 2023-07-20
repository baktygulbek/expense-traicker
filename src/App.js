import "./App.css";
import Expense from "./components/Expense";

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
      <Expense  date={expenses}/>
    </div>
  );
}

export default App;
