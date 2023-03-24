import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "San Francisco Trip",
    amount: 987.21,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "PS-5", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Medical Bills",
    amount: 294.67,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e4",
    title: "New Couch",
    amount: 450,
    date: new Date(2022, 5, 16),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const onUpdateExpenseHandler = (filterYear) => {
    setExpenses(
      Dummy_Expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
      })
    );
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} onUpdateExpense={onUpdateExpenseHandler} />
    </div>
  );
}

export default App;
