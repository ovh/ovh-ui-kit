import controller from './datagrid-expanded-row.controller';

export default {
  controller,
  require: {
    datagridCtrl: '^^ouiDatagrid',
  },
  bindings: {
    row: '<',
  },
};
