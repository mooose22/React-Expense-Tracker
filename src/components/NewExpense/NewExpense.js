import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const expenseDataHandler = (expenseData) => {
    const saveExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(saveExpenseData);
  };

  const formToggleHandler = () => {
    setShowForm(true);
  };

  const onCancelHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={formToggleHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
