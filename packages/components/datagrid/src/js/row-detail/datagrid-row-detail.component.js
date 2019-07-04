import controller from './datagrid-row-detail.controller';

export default {
  controller,
  require: {
    datagridCtrl: '^^ouiDatagrid',
  },
  bindings: {
    row: '<',
  },
};
