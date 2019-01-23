import "angular-aria";
import angular from "angular";
import Cell from "./cell/cell.component";
import Checkbox from "@ovh/ui-kit.checkbox";
import Criteria from "@ovh/ui-kit.criteria";
import Datagrid from "./datagrid.directive";
import DatagridColumnBuilder from "./datagrid-column-builder.service";
import DatagridExtraTop from "./extra-top/extra-top.component";
import DatagridPaging from "./paging/datagrid-paging.service";
import DatagridParameters from "./parameters/datagrid-parameters.component";
import DatagridProvider from "./datagrid.provider";
import DatagridService from "./datagrid.service";
import Pagination from "@ovh/ui-kit.pagination";
import Spinner from "@ovh/ui-kit.spinner";

const moduleName = "oui.datagrid";

angular
    .module(moduleName, [
        "ngAria",
        Checkbox,
        Criteria,
        Pagination,
        Spinner
    ])
    .service("ouiDatagridColumnBuilder", DatagridColumnBuilder)
    .directive("ouiDatagrid", Datagrid)
    .component("ouiDatagridCell", Cell)
    .component("ouiDatagridExtraTop", DatagridExtraTop)
    .service("ouiDatagridPaging", DatagridPaging)
    .provider("ouiDatagridConfiguration", DatagridProvider)
    .service("ouiDatagridService", DatagridService)
    .component("ouiDatagridParameters", DatagridParameters);

export default moduleName;
