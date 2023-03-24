import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'New Book (Paper)',
        amount: 4523,
        date: new Date(2019, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const expenseDataHandler = expense => {
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses];
        })
    }

    const onUpdateExpenseHandler = filterYear => {
        setExpenses(DUMMY_EXPENSES.filter(expense => {
            return expense.date.getFullYear().toString() === filterYear;
        }));
    }

    return (
        <div>
            <NewExpense onAddExpenseData={expenseDataHandler}/>
            <Expense items={expenses} onUpdateExpense={onUpdateExpenseHandler}/>
        </div>
    );
}

export default App;
