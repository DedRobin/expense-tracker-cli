const { getExpenses, saveExpenses } = require('../db');

const deleteExpense = async (data) => {
  if (!data?.id) throw new Error('No ID');

  const { id } = data;

  const targetId = Number(id);
  if (Number.isNaN(targetId)) throw new Error('Got NaN during deleting');

  const expenses = await getExpenses();

  let expenseIsDeleted = false;

  const filteredExpenses = expenses.filter((_, index) => {
    const isFound = index === targetId;
    if (isFound) expenseIsDeleted = true;

    return !isFound;
  });

  if (expenseIsDeleted) {
    console.log(`The expense (ID=${targetId}) is deleted.`);
  } else {
    console.log(`No such the expense with ID=${targetId}`);
  }

  await saveExpenses(filteredExpenses);
};

module.exports = deleteExpense;
