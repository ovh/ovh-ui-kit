import autocompleteController from "./controllers/autocomplete.controller";
import calendarController from "./controllers/calendar.controller";
import chipsController from "./controllers/chips.controller";
import criteriaController from "./controllers/criteria.controller";
import datagridController from "./controllers/datagrid.controller";
import dualListController from "./controllers/dual-list.controller";
import fieldController from "./controllers/field.controller";
import inlineAdderController from "./controllers/inline-adder.controller";
import navbarController from "./controllers/navbar.controller";
import paginationController from "./controllers/pagination.controller";
import passwordController from "./controllers/password.controller";
import progressController from "./controllers/progress.controller";
import searchController from "./controllers/search.controller";
import selectController from "./controllers/select.controller";
import showCurrentValueInPopupController from "./controllers/show-current-value-in-popup.controller";
import stepperController from "./controllers/stepper.controller";
import timepickerController from "./controllers/timepicker.controller";

const moduleName = "documentation.ovh-ui-angular";

angular.module(moduleName, [])
    .controller("AutocompleteCtrl", autocompleteController)
    .controller("CalendarCtrl", calendarController)
    .controller("CriteriaCtrl", criteriaController)
    .controller("ChipsCtrl", chipsController)
    .controller("DatagridCtrl", datagridController)
    .controller("DualListCtrl", dualListController)
    .controller("FieldCtrl", fieldController)
    .controller("InlineAdderCtrl", inlineAdderController)
    .controller("NavbarCtrl", navbarController)
    .controller("PaginationCtrl", paginationController)
    .controller("PasswordCtrl", passwordController)
    .controller("ProgressCtrl", progressController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController)
    .controller("SearchCtrl", searchController)
    .controller("SelectCtrl", selectController)
    .controller("StepperCtrl", stepperController)
    .controller("TimepickerCtrl", timepickerController);

export default moduleName;
