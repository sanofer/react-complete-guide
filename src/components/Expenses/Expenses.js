import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const addDateFilter = (date) => {
    setFilteredYear(date);
    console.log(filteredYear);
    
  };
  return (
    <div className="expenses">
      <ExpenseFilter onDateFilterChange={addDateFilter} />
      {props.expenses
        .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};

export default Expenses;
