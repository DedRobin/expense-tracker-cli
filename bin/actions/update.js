const { getExpenses, saveExpenses } = require('../db');
const { getDatetime } = require('../services');

const updateExpense = async (data) => {
  if (!data?.id) throw new Error('No ID');
  if (!data?.description) throw new Error('No description');
  if (!data?.amount) throw new Error('No amount');

  const { id, description, amount } = data;
  const targetId = Number(id);

  if (Number.isNaN(targetId)) throw new Error('Got NaN during updating');

  const expenses = await getExpenses();

  let expenseIsUpdated = false;

  const updatedExpenses = expenses.map((expense, index) => {
    if (index === targetId) {
      expense.description = description;
      expense.amount = amount;
      expense.date = getDatetime();

      expenseIsUpdated = true;

      return expense;
    }

    return expense;
  });

  if (expenseIsUpdated) {
    console.log(`The expense (ID=${targetId}) is updated.`);
  } else {
    console.log(`No such the expense with ID=${targetId}`);
  }

  await saveExpenses(updatedExpenses);
};

module.exports = updateExpense;
