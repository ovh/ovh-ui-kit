const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

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
    path: path.resolve('.', 'dist', 'js'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        'oui-button': {
          test: 'oui-button',
          chunks: 'all',
          name: 'oui-button',
          enforce: true,
        },
        'oui-radio': {
          test: 'oui-radio',
          chunks: 'all',
          name: 'oui-radio',
          enforce: true,
        },
        'oui-checkbox': {
          test: 'oui-checkbox',
          chunks: 'all',
          name: 'oui-checkbox',
          enforce: true,
        },
        'oui-tooltip': {
          test: 'oui-tooltip',
          chunks: 'all',
          name: 'oui-tooltip',
          enforce: true,
        },
        'oui-spinner': {
          test: 'oui-spinner',
          chunks: 'all',
          name: 'oui-spinner',
          enforce: true,
        },
        'oui-skeleton': {
          test: 'oui-skeleton',
          chunks: 'all',
          name: 'oui-skeleton',
          enforce: true,
        },
        'oui-switch': {
          test: 'oui-switch',
          chunks: 'all',
          name: 'oui-switch',
          enforce: true,
        },
        'oui-textarea': {
          test: 'oui-textarea',
          chunks: 'all',
          name: 'oui-textarea',
          enforce: true,
        },
        'oui-select': {
          test: 'oui-select',
          chunks: 'all',
          name: 'oui-select',
          enforce: true,
        },
        'oui-dropdown': {
          test: 'oui-dropdown',
          chunks: 'all',
          name: 'oui-dropdown',
          enforce: true,
        },
        'oui-autocomplete': {
          test: 'oui-autocomplete',
          chunks: 'all',
          name: 'oui-autocomplete',
          enforce: true,
        },
        'oui-calendar': {
          test: 'oui-calendar',
          chunks: 'all',
          name: 'oui-calendar',
          enforce: true,
        },
        'oui-popover': {
          test: 'oui-popover',
          chunks: 'all',
          name: 'oui-popover',
          enforce: true,
        },
        'oui-criteria': {
          test: 'oui-criteria',
          chunks: 'all',
          name: 'oui-criteria',
          enforce: true,
        },
        'oui-pagination': {
          test: 'oui-pagination',
          chunks: 'all',
          name: 'oui-pagination',
          enforce: true,
        },
        'oui-chips': {
          test: 'oui-chips',
          chunks: 'all',
          name: 'oui-chips',
          enforce: true,
        },
        'oui-field': {
          test: 'oui-field',
          chunks: 'all',
          name: 'oui-field',
          enforce: true,
        },
        'oui-search': {
          test: 'oui-search',
          chunks: 'all',
          name: 'oui-search',
          enforce: true,
        },
      },
    },
  },
});
