const { program } = require('commander');

program.option('-f, --first <char>', 'first option');

program.parse();

const options = program.opts();
console.log(options);
