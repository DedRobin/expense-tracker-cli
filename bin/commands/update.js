const { program } = require('commander');

const updateExpense = require('../actions/update');

function commandUpdate() {
  program
    .command('update')
    .description('Update a target expense')
    .requiredOption('-I, --id <number>', 'expense ID')
    .requiredOption(
      '-D, --description <string>',
      'new description of the updated expense'
    )
    .requiredOption(
      '-A, --amount <number>',
      'new amount of the updated expense',
      parseFloat
    )
    .action(updateExpense);
}

module.exports = commandUpdate;
