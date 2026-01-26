const { getExpenses, saveExpenses } = require('../db');

const deleteExpense = async (expense) => {
  if (!expense?.id) throw new Error('No ID');

  const { id: targetId } = expense;

  const expenses = await getExpenses();

  let expenseIsDeleted = false;

  const filteredExpenses = expenses.filter((expense) => {
    const expenseArray = expense.split(',');
    const expenseId = expenseArray[0];

    const isFound = expenseId === targetId;
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
