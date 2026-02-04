const { program } = require('commander');
const listExpenses = require('../actions/list');

function commandList() {
  program
    .command('list')
    .description("Show a expenses' list")
    .action(listExpenses);
}

module.exports = commandList;
