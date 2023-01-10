import React, {useState} from 'react';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('Show All');
  const submitYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }
  const filteredExpenses=props.items.filter((expense) => {
    if (filterYear!== "Show All"){
      return expense.date.getFullYear().toString() === filterYear;
    }
    else {
      return true;
    }
  });
  
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter 
        selected={filterYear} 
        onSubmitYear={submitYearHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  </div>
  );
}

export default Expenses;