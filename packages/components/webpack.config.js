const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dev.config');
const merge = require('webpack-merge');
const { resolve } = require('path');

module.exports = merge(baseConfig, {
  entry: {
    // Atoms
    'oui-button': [
      './button/src/index.js',
    ],
    'oui-radio': [
      './radio/src/index.js',
    ],
    'oui-checkbox': [
      './checkbox/src/index.js',
    ],
    'oui-tooltip': [
      './tooltip/src/index.js',
    ],
    'oui-spinner': [
      './spinner/src/index.js',
    ],
    'oui-skeleton': [
      './skeleton/src/index.js',
    ],
    'oui-switch': [
      './switch/src/index.js',
    ],
    'oui-textarea': [
      './textarea/src/index.js',
    ],
    'oui-select': [
      './select/src/index.js',
    ],
    // Molecules
    'oui-form-actions': [
      './form-actions/src/index.js',
    ],
    'oui-select-picker': [
      './select-picker/src/index.js',
    ],
    'oui-message': [
      './message/src/index.js',
    ],
    'oui-clipboard': [
      './clipboard/src/index.js',
    ],
    'oui-numeric': [
      './numeric/src/index.js',
    ],
    'oui-search': [
      './search/src/index.js',
    ],
    'oui-file': [
      './file/src/index.js',
    ],
    'oui-password': [
      './password/src/index.js',
    ],
    'oui-tabs': [
      './tabs/src/index.js',
    ],
    'oui-progress': [
      './progress/src/index.js',
    ],
    'oui-field': [
      './field/src/index.js',
    ],
    'oui-dropdown': [
      './dropdown/src/index.js',
    ],
    'oui-action-menu': [
      './action-menu/src/index.js',
    ],
    'oui-guide-menu': [
      './guide-menu/src/index.js',
    ],
    'oui-back-button': [
      './back-button/src/index.js',
    ],
    'oui-chips': [
      './chips/src/index.js',
    ],
    'oui-calendar': [
      './calendar/src/index.js',
    ],
    'oui-timepicker': [
      './timepicker/src/index.js',
    ],
    'oui-popover': [
      './popover/src/index.js',
    ],
    'oui-collapsible': [
      './collapsible/src/index.js',
    ],
    'oui-tile': [
      './tile/src/index.js',
    ],
    'oui-inline-adder': [
      './inline-adder/src/index.js',
    ],
    'oui-autocomplete': [
      './autocomplete/src/index.js',
    ],
    // Organisms
    'oui-navbar': [
      './navbar/src/index.js',
    ],
    'oui-datagrid': [
      './datagrid/src/index.js',
    ],
    'oui-modal': [
      './modal/src/index.js',
    ],
    'oui-pagination': [
      './pagination/src/index.js',
    ],
    'oui-criteria': [
      './criteria/src/index.js',
    ],
    'oui-stepper': [
      './stepper/src/index.js',
    ],
    'oui-slideshow': [
      './slideshow/src/index.js',
    ],
    'oui-header': [
      './header/src/index.js',
    ],
    'oui-dual-list': [
      './dual-list/src/index.js',
    ],
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist/js'),
  },

});
