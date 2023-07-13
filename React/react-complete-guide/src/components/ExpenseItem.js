import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

// You can also use object destructuring to extract the properties from the props object.
// function ExpenseItem({ title, amount, date })
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">{props.expense.amount}</div>
            </div>
        </div>

        // <div className="expense-item">
        //     <div>{props.date.toISOString()}</div>
        //     <div className="expense-item__description">
        //         <h2>{props.title}</h2>
        //         <div className="expense-item__price">{props.amount}</div>
        //     </div>
        // </div>
    );
}

export default ExpenseItem;