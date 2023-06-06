import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import Title from './components/UI/Title';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'DummyOne',
    amount: 0.0,
    date: new Date(2020, 0, 1),
  },
  {
    id: 'e3',
    title: 'DummyTwo',
    amount: 0.0,
    date: new Date(2021, 1, 2),
  },
  {
    id: 'e4',
    title: 'DummyThree',
    amount: 0.0,
    date: new Date(2022, 2, 3),
  },
  {
    id: 'e4',
    title: 'DummyFour',
    amount: 0.0,
    date: new Date(2023, 3, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <Title></Title>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
