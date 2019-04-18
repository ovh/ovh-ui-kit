import controller from './datagrid-topbar.controller';

export default {
  controller,
  require: {
    datagridCtrl: '^^ouiDatagrid',
  },
  bindings: {
    selectedItems: '<',
  },
};
