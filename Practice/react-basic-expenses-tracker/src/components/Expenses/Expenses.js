import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");
  const changeFilterHandler = (filterYear) => {
    //console.log(filterYear)
    setSelectedFilterYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
