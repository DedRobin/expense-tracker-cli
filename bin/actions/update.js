const { getExpenses, saveExpenses } = require('../db');
const { getDatetime } = require('../services');

const updateExpense = async (expense) => {
  if (!expense?.id) throw new Error('No ID');
  if (!expense?.description) throw new Error('No description');
  if (!expense?.amount) throw new Error('No amount');

  const {
    id: updatedExpenseId,
    description: updatedExpenseDescr,
    amount: updatedExpenseAmount,
  } = expense;

  const expenses = await getExpenses();

  let expenseIsUpdated = false;

  const updatedExpenses = expenses.map((expense) => {
    const expenseArray = expense.split(',');
    const targetExpenseId = expenseArray[0];

    if (targetExpenseId === updatedExpenseId) {
      expenseArray[1] = updatedExpenseDescr;
      expenseArray[2] = updatedExpenseAmount;
      expenseArray[3] = getDatetime();
      const updatedExpense = expenseArray.join(',');

      expenseIsUpdated = true;

      return updatedExpense;
    }

    return expense;
  });

  if (expenseIsUpdated) {
    console.log(`The expense (ID=${updatedExpenseId}) is updated.`);
  } else {
    console.log(`No such the expense with ID=${updatedExpenseId}`);
  }

  await saveExpenses(updatedExpenses);
};

module.exports = updateExpense;
