const { program } = require('commander');

const commandAdd = require('./commands/add');
const commandUpdate = require('./commands/update');
const commandDelete = require('./commands/delete');
const commandList = require('./commands/list');
const commandSummary = require('./commands/summary');
const { registerCommands } = require('./services');

function main() {
  program
    .name('expense-tracker')
    .description('A simple CLI to track your expenses')
    .version('1.0.0');

  const commands = [
    commandAdd,
    commandUpdate,
    commandDelete,
    commandList,
    commandSummary,
  ];

  registerCommands(commands);

  program.parse();
}

main();
