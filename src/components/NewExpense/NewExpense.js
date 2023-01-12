import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formAccess, setFormAccess] = useState(false);
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormAccess(false);
  };

  const stopEditingHandler = () => {
    setFormAccess(false);
  };

  const showFormHandler = () => {
    setFormAccess(true);
  }
  return (
    <div className="new-expense">
      {!formAccess && <button className="add-btn" onClick={showFormHandler}>Add New Expense</button>}
      {formAccess && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
