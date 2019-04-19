export default class DatagridService {
  constructor() {
    this.datagrids = {};
  }

  registerDatagrid(datagridController) {
    const datagridId = datagridController.id;

    if (this.datagrids[datagridId]) {
      throw new Error(`Duplicated datagrid: id="${datagridId}".`);
    }

    if (datagridId) {
      this.datagrids[datagridId] = datagridController;
    }
  }

  unregisterDatagrid(datagridId) {
    delete this.datagrids[datagridId];
  }

  /**
   * Refresh the content of a datagrid that has a specific `id`.
   * @param  string  datagridId  the `id` of the datagrid
   * @param  boolean showSpinner if you want to show the spinner
   * while `rows-loader` is executed (like a first load)
   */
  refresh(datagridId, showSpinner) {
    const datagridController = this.datagrids[datagridId];

    if (datagridController) {
      datagridController.refreshData(false, false, !showSpinner, true);
    }
  }
}
