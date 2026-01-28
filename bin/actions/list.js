const { getExpenses } = require('../db');

const listExpenses = async () => {
  const expenses = await getExpenses();
  const columns = Object.keys(expenses[0]);
  console.table(expenses, columns);
};

module.exports = listExpenses;
