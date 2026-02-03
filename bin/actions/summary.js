const { getExpenses } = require('../db');
const { convertToTime } = require('../services');
const { toNumber } = require('../tools');

const summaryExpenses = async (data) => {
  let expenses = await getExpenses();

  if (data?.month || data?.year) {
    const currentYear = new Date().getFullYear();
    const year = Number(data?.year) || currentYear;

    const beforeMonth = Number(data?.month) - 1 || 0;
    const afterMonth = Number(data?.month) || 11;

    if (Number.isNaN(beforeMonth)) throw new Error('beforeMonth=NaN');
    if (Number.isNaN(afterMonth)) throw new Error('afterMonth=NaN');
    if (Number.isNaN(year)) throw new Error('year=NaN');

    const before = new Date(year, beforeMonth, 1, 0, 0, 0);
    const after = new Date(year, afterMonth, 1, 0, 0, -1);

    const beforeTime = before.getTime();
    const afterTime = after.getTime();

    expenses = expenses.filter((expense) => {
      const { date } = expense;
      const expenseTime = convertToTime(date);
      return beforeTime <= expenseTime && expenseTime < afterTime;
    });
  }

  const amounts = expenses.map((expense) => toNumber(expense.amount));

  const summary = amounts.reduce((acc, currentValue) => acc + currentValue, 0);

  console.log(`Summary for all time: ${summary}`);
};

module.exports = summaryExpenses;
