const { program } = require('commander');

const deleteExpense = require('../actions/delete');

function commandDelete() {
  program
    .command('delete')
    .description('delete a target expense')
    .requiredOption('-I, --id <number>', 'expense ID')
    .action(deleteExpense);
}

module.exports = commandDelete;
