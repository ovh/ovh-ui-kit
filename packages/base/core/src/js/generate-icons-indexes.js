'strict mode';

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const icons = require('../fonts/oui-icons/oui-icons.json');

const { log } = console;

log(chalk.yellow('\nGenerating less variables from icons'));

const iconsIndexes = ['@oui-icon-index:'];
const iconsCodesLESS = [];
const iconsCodesSCSS = [];
const iconsCodesCSS = [];

Object.keys(icons).forEach((key) => {
  const value = icons[key];
  const prefix = 'icon-';

  // Remove prefix from key name
  const index = key.substr(prefix.length);
  iconsIndexes.push(`  ~"${index}"`);
  iconsCodesLESS.push(`@oui-icon-index-${index}: "${value}";`);
  iconsCodesSCSS.push(`$oui-icon-index-${index}: "${value}";`);
  iconsCodesCSS.push(`  --oui-icon-index-${index}: "${value}";`);
});

const lastIndex = iconsIndexes.length;
iconsIndexes[lastIndex - 1] += ';';

// Write in `src/less/variables/generated/icons.less`
const fileIndexes = fs.createWriteStream('src/less/variables/generated/icons.less');

log(chalk.blue('Generated'), chalk.cyan(path.resolve(fileIndexes.path)));

fileIndexes.write('/*\n * Icons (WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!)\n */\n\n');
fileIndexes.write(iconsIndexes.join('\n'));
fileIndexes.write('\n');
fileIndexes.end();

// Write in `src/less/tokens/_icons.less`
const fileCodesLESS = fs.createWriteStream('src/less/tokens/_icons.less');

log(chalk.blue('Generated'), chalk.cyan(path.resolve(fileCodesLESS.path)));

fileCodesLESS.write('/*\n * Icons (WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!)\n */\n\n');
fileCodesLESS.write(iconsCodesLESS.join('\n'));
fileCodesLESS.write('\n');
fileCodesLESS.end();

// Write in `src/scss/tokens/_icons.scss`
const fileCodesSCSS = fs.createWriteStream('src/scss/tokens/_icons.scss');

log(chalk.blue('Generated'), chalk.cyan(path.resolve(fileCodesSCSS.path)));

fileCodesSCSS.write('/*\n * Icons (WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!)\n */\n\n');
fileCodesSCSS.write(iconsCodesSCSS.join('\n'));
fileCodesSCSS.write('\n');
fileCodesSCSS.end();

// Write in `src/css/tokens/_icons.css`
const fileCodesCSS = fs.createWriteStream('src/css/tokens/_icons.css');

log(chalk.blue('Generated'), chalk.cyan(path.resolve(fileCodesCSS.path)));

fileCodesCSS.write('/*\n * Icons (WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!)\n */\n\n');
fileCodesCSS.write(':root {\n');
fileCodesCSS.write(iconsCodesCSS.join('\n'));
fileCodesCSS.write('\n}\n');
fileCodesCSS.end();

log(chalk.green('Done'));
