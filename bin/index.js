const { program } = require('commander');
const addExpense = require('./actions/add');

function main() {
  program
    .name('expense-tracker')
    .description('A simple CLI to track your expenses')
    .version('1.0.0');

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

  program.parse();
}

main();
