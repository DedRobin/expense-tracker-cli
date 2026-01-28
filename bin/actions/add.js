const { getExpenses, saveExpenses } = require('../db');
const { getDatetime } = require('../services');

const addExpense = async (expense) => {
  if (!expense?.description) throw new Error('No description');
  if (!expense?.amount) throw new Error('No amount');

  const date = getDatetime();

  const expenses = await getExpenses();

  const newExpense = { ...expense, date };

  expenses.push(newExpense);

  await saveExpenses(expenses);
};

module.exports = addExpense;
