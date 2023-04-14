import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const addDateFilter = (date) => {
    setFilteredYear(date);
    console.log(filteredYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <div className="expenses">
      <ExpenseFilter onDateFilterChange={addDateFilter} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
