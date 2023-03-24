import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return ({
        //         ...previousState,
        //         enteredTitle: event.target.value
        //     })
        // })
    }

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return ({
        //         ...previousState,
        //         enteredAmount: event.target.value
        //     })
        // })
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return ({
        //         ...previousState,
        //         enteredDate: event.target.value
        //     })
        // })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            'title': enteredTitle,
            'amount': enteredAmount,
            'date': new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        props.onCancel();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleChangedHandler}
                           value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min="1" onChange={amountChangedHandler}
                           value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2019-01-01" max="2023-12-31" onChange={dateChangedHandler}
                           value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type={"button"} onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;