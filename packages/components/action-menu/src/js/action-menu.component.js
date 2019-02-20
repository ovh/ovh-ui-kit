import controller from './action-menu.controller';
import template from './action-menu.html';

export default {
  template,
  controller,
  require: {
    tile: '?^^ouiTile',
    datagrid: '?^^ouiDatagrid',
  },
  bindings: {
    text: '@',
    placement: '@?',
    ariaLabel: '@?',
    compact: '<?',
    disabled: '<?',
  },
  transclude: true,
};
