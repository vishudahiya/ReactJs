import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  // console.log('Expense::::', props);

  const expense = props.expenses;
  // console.log('Expensess',expense);
  return (
    <Card className="expenses">
      <ExpenseItem item={expense[0]}></ExpenseItem>
      <ExpenseItem item={expense[1]}></ExpenseItem>
      <ExpenseItem item={expense[2]}></ExpenseItem>
      <ExpenseItem item={expense[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
