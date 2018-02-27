const { join, basename } = require("path");
const { lstatSync, readdirSync } = require("fs");

const packagesDir = join(__dirname, "packages");

const isDirectory = (source) =>
  lstatSync(source).isDirectory();

const isComponentPackage = (name) =>
  name.startsWith("oui-");

const getDirectories = (source) =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const getDirectoriesNames = (source) =>
  getDirectories(source)
    .map(name => basename(name));

const getComponents = () =>
  getDirectoriesNames(packagesDir)
    .filter(isComponentPackage);

module.exports = {
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    // Force scope to be one of our component name
    "scope-enum": [2, "always", getComponents()]
  }
}
