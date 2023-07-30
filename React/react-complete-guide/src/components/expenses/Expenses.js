import { useState } from "react";
import { Grid, Card as NextCard, Row } from "@nextui-org/react";

import NewExpense from "../new_expense/NewExpense";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "../expenses_filter/ExpensesFilter";

function Expenses(props) {
    const [expenses, setExpenses] = useState(props.expenses);

    const addExpenseHandler = (expense) => {
        console.log('In Expenses.js');

        setExpenses(props.expenses.push(expense));

        console.log('Expense Added!');
    }

    const setExpensesHandler = (expenses) => {
        setExpenses(expenses);
    }

    const [filteredYear, setFilterdYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    }

    return (
        <Grid.Container gap={2} justify='center' direction='column'>
            <Grid xs={12} md={12} justify='center'>
                <NextCard css={{ mw: "800px", $$cardColor: '$colors$gradient' }} variant='bordered'>
                    <NextCard.Header>
                        <Row justify='center'>
                            <h2 className='expenses__title'>Add new expense!</h2>
                        </Row>
                    </NextCard.Header>
                    <NextCard.Body>
                        <NewExpense onExpenseDataSaved={addExpenseHandler} />
                    </NextCard.Body>
                </NextCard>
            </Grid>
            <Grid xs={12} md={12} justify='center'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} expenses={props.expenses} />
            </Grid>
            <Grid xs={12} md={12}>
                <Card className='expenses'>
                    {
                        // expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
                        //props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
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
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Expenses;