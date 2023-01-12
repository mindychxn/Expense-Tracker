import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="fallback-container">
        <h2 className="expenses-list__fallback">No expenses found.</h2>;
      </Card>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
