import { Grid, Card as NextCard, Row, Dropdown } from "@nextui-org/react";

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const distinctYears = [...new Set(props.expenses.map(expense => expense.date.getFullYear()))];

  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }

  return (
    <Grid xs={12} md={12} justify='center'>
      <NextCard css={{ mw: "800px", $$cardColor: '$colors$gradient' }} variant='bordered'>
        <NextCard.Header>
          <Row justify='space-between'>
            <label>Filter by year</label>
            <label>{props.filteredInfoText}</label>
            {/* <Dropdown>
              <Dropdown.Button>{props.selected}</Dropdown.Button>
              <Dropdown.Menu
                onSelectionChange={filterChangeHandler}
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single">
                {
                  props.expenses.map((expense) => <Dropdown.Item key={expense.id} value={expense.date.getFullYear()}>{expense.date.getFullYear()}</Dropdown.Item>)
                }
              </Dropdown.Menu>
            </Dropdown> */}

            <select onChange={filterChangeHandler} value={props.selected}>
              <option value='All'>All</option>
              {
                props.expenses.map((expense) => <option key={expense.id} value={distinctYears}>{distinctYears}</option>)
              }
            </select>
          </Row>
        </NextCard.Header>
        <NextCard.Body>
          Expense Filter Results.
        </NextCard.Body>
      </NextCard>
    </Grid>
  );
};

export default ExpensesFilter;