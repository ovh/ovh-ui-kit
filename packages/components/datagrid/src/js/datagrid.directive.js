import controller from './datagrid.controller';

export default () => {
  'ngInject';

  return {
    controller,
    controllerAs: '$ctrl',
    bindToController: true,
    scope: {
      id: '@?',
      columnsDescription: '<?columns',
      columnsParameters: '<?',
      criteria: '<?',
      customizable: '<?',
      page: '@?',
      pageSize: '@?',
      pageSizeMax: '@?',
      rows: '<?',
      rowsLoader: '&?',
      rowLoader: '&?',
      emptyPlaceholder: '@?',
      onColumnsParametersChange: '&',
      onCriteriaChanged: '&onCriteriaChange',
      onPageChange: '&',
      onRowSelect: '&',
      onSortChange: '&',
      paginationMode: '@?',
    },
    compile: (elm) => {
      // Transclude can't be used here otherwise transcluded
      // components would be compiled before we can read it.
      const htmlContent = elm.html();
      elm.empty();

      return (scope, elem, attrs, ctrl) => {
        const tableCtrl = ctrl;
        tableCtrl.htmlContent = htmlContent;
      };
    },
  };
};
