const fs = require('node:fs/promises');

const { DB_PATH, CSV_HEADER } = require('./constants');

const getExpenses = async () => {
  let expenses = [];

  try {
    const db = await fs.readFile(DB_PATH);
    const expensesArray = db.toString().split('\n');
    expenses = expensesArray.slice(1);
  } catch (err) {
    const noSuchFile = err?.code && err.code === 'ENOENT';
    if (noSuchFile) {
      const createdDb = `${CSV_HEADER}\n`;
      await fs.writeFile(DB_PATH, createdDb);
    } else {
      throw new Error('Something went wrong during reading the database', err);
    }
  }

  return expenses;
};

const saveExpenses = async (expenses) => {
  const updatedDb = CSV_HEADER + '\n' + expenses.join('\n');
  try {
    await fs.writeFile(DB_PATH, updatedDb);
  } catch (err) {
    throw new Error('Something wenr wrong during the database saving', err);
  }
};

module.exports = { getExpenses, saveExpenses };
