import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
    
        <Card className="expenses">

        <ExpensesFilter selected={filteredYear}onChangeFilter={filterChangeHandler}></ExpensesFilter>

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}

        {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
         */}

         <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

         <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
        </div>
    );
}

export default Expense;