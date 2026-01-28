const fs = require('node:fs/promises');

const { DB_PATH, CSV_HEADER } = require('../constants');
const { convertRowsToObject } = require('./__services__');

const getExpenses = async () => {
  try {
    const db = await fs.readFile(DB_PATH);
    const rows = db.toString().split('\n');

    const expenses = convertRowsToObject(rows);

    return expenses;
  } catch (err) {
    const noSuchFile = err?.code && err.code === 'ENOENT';
    if (noSuchFile) {
      const createdDb = `${CSV_HEADER}\n`;
      await fs.writeFile(DB_PATH, createdDb);
    } else {
      throw new Error('Something went wrong during reading the database', err);
    }
  }

  return [];
};

const saveExpenses = async (expenses) => {
  const expensesAsRows = expenses.map((expense) =>
    Object.values(expense).join(',')
  );
  const updatedDb = CSV_HEADER + '\n' + expensesAsRows.join('\n');
  try {
    await fs.writeFile(DB_PATH, updatedDb);
  } catch (err) {
    throw new Error('Something wenr wrong during the database saving', err);
  }
};

module.exports = { getExpenses, saveExpenses };
