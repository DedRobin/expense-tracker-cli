const { getExpenses } = require('../db');
const { toNumber } = require('../tools');
const { convertToTime, extractMonth } = require('./__services__');

const summaryExpenses = async (data) => {
  let msg = 'Summary for all time: ';
  let msgMonth;
  let msgYear;

  let expenses = await getExpenses();

  if (data?.month || data?.year) {
    const currentYear = new Date().getFullYear();
    const year = Number(data?.year) || currentYear;
    msgYear = year;

    const startMonth = Number(data?.month) - 1 || 0;
    const endMonth = Number(data?.month) || 11;

    if (Number.isNaN(startMonth)) throw new Error('startMonth=NaN');
    if (Number.isNaN(endMonth)) throw new Error('endMonth=NaN');
    if (Number.isNaN(year)) throw new Error('year=NaN');

    const startDate = new Date(year, startMonth, 1, 0, 0, 0);
    const endDate = new Date(year, endMonth, 1, 0, 0, -1);

    msgMonth = data?.month ? ` ${extractMonth(startDate)}` : '';
    msg = `Summary for${msgMonth} ${msgYear}: `;

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();

    expenses = expenses.filter((expense) => {
      const { date } = expense;
      const expenseTime = convertToTime(date);
      return startTime <= expenseTime && expenseTime < endTime;
    });
  }

  const amounts = expenses.map((expense) => toNumber(expense.amount));

  const summary = amounts.reduce((acc, currentValue) => acc + currentValue, 0);

  console.log(msg + summary);
};

module.exports = summaryExpenses;
