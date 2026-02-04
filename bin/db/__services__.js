const convertToObjectsArray = (rows) =>
  rows.map((row) => {
    const [description, amount, date] = row.split(',');
    const expense = {};
    expense.description = description;
    expense.amount = amount;
    expense.date = date;

    return expense;
  });

module.exports = { convertToObjectsArray };
