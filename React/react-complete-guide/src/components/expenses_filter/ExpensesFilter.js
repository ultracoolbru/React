import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          {
            props.expenses.map((expense) => <option key={expense.id} value={expense.date.getFullYear()}>{expense.date.getFullYear()}</option>)
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;