const { program } = require('commander');
const summaryExpenses = require('../actions/summary');

function commandUpdate() {
  program
    .command('summary')
    .description('displays summary of expense by specified month, year')
    .option(
      '-M, --month [number]',
      'month, if ommited it is equel to the current month'
    )
    .option(
      '-Y, --year [number]',
      'year, if ommited it is equel to the current year'
    )
    .action(summaryExpenses);
}

module.exports = commandUpdate;
