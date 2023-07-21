import { Grid, Card as NextCard } from '@nextui-org/react';

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../ui/Card";

function Expenses(props) {
    return (
        <Grid.Container gap={2} justify='center' direction='column'>
            <Grid xs={12} md={12} justify='center'>
                <NextCard css={{ mw: "400px", $$cardColor: '$colors$gradient' }} variant='bordered'>
                    <NextCard.Body>
                        <h1>Let's get started!</h1>
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