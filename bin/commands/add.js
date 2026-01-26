const { program } = require('commander');
const addExpense = require('../actions/add');

function commandAdd() {
  program
    .command('add')
    .description('Add a new expense')
    .requiredOption('-D, --description <string>', 'description of the expense')
    .requiredOption(
      '-A, --amount <number>',
      'amount of the expense',
      parseFloat
    )
    .action(addExpense);
}

module.exports = commandAdd;
