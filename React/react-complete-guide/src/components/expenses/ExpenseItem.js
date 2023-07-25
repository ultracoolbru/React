import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../ui/Card";

// You can also use object destructuring to extract the properties from the props object.
// function ExpenseItem({ title, amount, date })
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        title === "Car Insurance" ? setTitle("Updated!") : setTitle("Car Insurance");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>

            <button onClick={clickHandler} title="Delete">Button</button>

        </Card>

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