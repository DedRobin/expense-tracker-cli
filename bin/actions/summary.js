const { getExpenses } = require('../db');

const summaryExpenses = async (data) => {
  console.log(data);

  const expenses = await getExpenses();

  const amounts = expenses.map((expense) => {
    const num = Number(expense.amount);
    if (Number.isNaN(num)) throw new Error('Got NaN');

    return num;
  });

  const summary = amounts.reduce((acc, currentValue) => acc + currentValue, 0);

  console.log(`Summary=${summary}`);
};

module.exports = summaryExpenses;
