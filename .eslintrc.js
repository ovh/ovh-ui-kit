const isDistribution = process.env.NODE_ENV === "dist";

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "es6": true,
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "globals": {
    "angular": true,
    "inject": true,
  },
  "rules": {
    'no-bitwise': ['error', { allow: ['~'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 0,
  },
  "overrides": {
    "files": "*.spec.js",
    "rules": {
      "no-magic-numbers": 0,
      "no-underscore-dangle": 0,
      "no-empty-function": 0,
    }
  }
};
