'strict mode';

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const icons = require('../dist/icons/icons.json');
const log = console.log;

log(chalk.yellow(`\nGenerating less variables from icons`));

// init less file
let file = fs.createWriteStream('packages/oui-icons/_icons.less');

log(chalk.blue(`Generated`), chalk.cyan(path.resolve(file.path)));

let iconsIndexes = [`@oui-icon-index:`];
let iconsCodes = [`\n`];

Object.keys(icons).forEach((key) => {
    let value = icons[key];
    let index = key.substr(5);
    iconsIndexes.push(`  ~"${index}"`);
    iconsCodes.push(`@oui-icon-index-${index}: "${value}";`)
});

const lastIndex = iconsIndexes.length;
iconsIndexes[lastIndex - 1] += ';';

file.write(`// WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!\n\n`);
file.write(iconsIndexes.join(`\n`));
file.write(iconsCodes.join(`\n`));
file.write(`\n`);

file.end();

log(chalk.green(`Done`));
