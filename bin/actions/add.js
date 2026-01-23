const { getDatetime } = require('../services');
const { getExpenses, saveExpenses } = require('../db');

const addExpense = async (expense) => {
  if (!expense?.description) throw new Error('No description');
  if (!expense?.amount) throw new Error('No amount');

  const { description, amount } = expense;
  const date = getDatetime();

  const expenses = await getExpenses();

  const newRow = `0,${description},${amount},${date}`;
  expenses.push(newRow);

  const expensesWithUpdatedId = expenses.map((expense, index) => {
    const expenseId = expense[0];
    if (index === expenseId) return expense;
    const expenseArray = expense.split(',');
    expenseArray[0] = index + 1;
    return expenseArray.join(',');
  });

  await saveExpenses(expensesWithUpdatedId);
};

module.exports = addExpense;
