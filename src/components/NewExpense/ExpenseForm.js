import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
  }

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(enteredDate);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new_expense_controls">
        <div className="new_expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new_expense_control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new_expense_control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
