import { Grid, Card as NextCard, Row } from "@nextui-org/react";

import NewExpense from "../new_expense/NewExpense";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../ui/Card";

function Expenses(props) {
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
                        <NewExpense />
                    </NextCard.Body>
                </NextCard>
            </Grid>
            <Grid xs={12} md={12}>
                <Card className='expenses'>
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
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Expenses;