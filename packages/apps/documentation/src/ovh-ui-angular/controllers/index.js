import autocompleteController from "./autocomplete.controller";
import calendarController from "./calendar.controller";
import chipsController from "./chips.controller";
import criteriaController from "./criteria.controller";
import datagridController from "./datagrid.controller";
import dualListController from "./dual-list.controller";
import fieldController from "./field.controller";
import inlineAdderController from "./inline-adder.controller";
import navbarController from "./navbar.controller";
import paginationController from "./pagination.controller";
import passwordController from "./password.controller";
import progressController from "./progress.controller";
import searchController from "./search.controller";
import selectController from "./select.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";
import stepperController from "./stepper.controller";
import timepickerController from "./timepicker.controller";

angular.module("app")
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
