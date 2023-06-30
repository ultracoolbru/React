import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
    return (
        <div>
            {
                // expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
                props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
                // expenses.map((expense) =>
                // {
                //   return <ExpenseItem
                //     key={expense.id}
                //     title={expense.title}
                //     amount={expense.amount}
                //     date={expense.date.toISOString()}
                //   />
                // })
            }
        </div>
    )
}

export default Expenses;