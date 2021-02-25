'strict mode';

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const { log } = console;

log(chalk.yellow('\nGenerating less variables from flags'));
const folder = './src/svg/flags/';

// List all filenames in flags folder
fs.readdir(folder, (err, files) => {
  const flags = files.map((file) => file.replace(/\.svg/, ''));

  // Init less file (relative path from the package root, not this file)
  const file = fs.createWriteStream('src/less/variables/generated/flags.less');

  log(chalk.blue('Generated'), chalk.cyan(path.resolve(file.path)));

  const flagsIndexes = ['@oui-flag-index:'];
  flags.forEach((flag) => flagsIndexes.push(`  ~"${flag}"`));

  const lastIndex = flagsIndexes.length;
  flagsIndexes[lastIndex - 1] += ';';

  file.write('/*\n * Flags (WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!)\n */\n\n');
  file.write(flagsIndexes.join('\n'));
  file.write('\n');

  file.end();

  log(chalk.green('Done'));
});
