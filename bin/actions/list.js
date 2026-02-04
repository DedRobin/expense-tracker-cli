const { getExpenses } = require('../db');

const listExpenses = async () => {
  const expenses = await getExpenses();

  const noExpenses = expenses.length === 0;
  if (noExpenses) {
    console.log('No expenses found');
    return;
  }

  const columns = Object.keys(expenses[0]);
  console.table(expenses, columns);
};

module.exports = listExpenses;
