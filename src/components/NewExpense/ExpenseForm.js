import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

    //instead of using 3 diffrent useState const we can manage it by using one instance

    // const [ userInput , setUserInput ] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : '',
    // });

    //approuch 1 to update states ,this approuch may create some issues sometimes because react don't intantly work on the changes it schedule the changes so...
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,}); 
    };

    //approuch 2 to update previous states
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState,enteredAmount : event.target.value}
        // }); 
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,}); 
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    };


    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" 
                    min="0.01" 
                    step="0.01"
                    value={enteredAmount} 
                    onChange={amountChangeHandler}
                     />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
};
    
export default ExpenseForm;
