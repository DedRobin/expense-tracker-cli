const { program } = require('commander');
const commandAdd = require('./commands/add');

function main() {
  commandAdd();

  program.parse();
}

main();
