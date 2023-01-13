import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setisEditing] =  useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = (showExpenseForm) => {
    setisEditing(showExpenseForm)
  }

  return (
    <div className="new-expense">
      <ExpenseForm showExpenseForm={showExpenseFormHandler} isEditing={isEditing} onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
