const fs = require('node:fs/promises');

const { getDatetime } = require('./services');

const DB_PATH = 'db.csv';

const addExpense = async (expense) => {
  if (!expense?.description) throw new Error('No description');
  if (!expense?.amount) throw new Error('No amount');

  const { description, amount } = expense;
  const date = getDatetime();

  try {
    const buffer = await fs.readFile(DB_PATH);
    const rows = buffer.toString().split('\n');

    const newRow = `0,${description},${amount},${date}`;
    rows.push(newRow);

    const rowsWithUpdatedId = rows.map((row, index) => {
      if ((index === 0) | (index === row[0])) return row;
      const rowArray = row.split(',');
      rowArray[0] = index;
      return rowArray.join(',');
    });

    const updatedDb = rowsWithUpdatedId.join('\n');

    await fs.writeFile(DB_PATH, updatedDb);
  } catch {
    const header = 'ID,Description,Amount,Date';
    const row = `1,${expense.description},${expense.amount},${date}`;
    const db = `${header}\n${row}`;

    await fs.writeFile(DB_PATH, db);
  }
};

module.exports = { addExpense };
