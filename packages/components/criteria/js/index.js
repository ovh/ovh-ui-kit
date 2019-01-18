import angular from "angular";
import Chips from "@ovh/ui-kit.chips";
import Criteria from "./criteria.component";
import CriteriaAdder from "./adder/criteria-adder.component";
import CriteriaAdderProvider from "./adder/criteria-adder.provider";
import Dropdown from "@ovh/ui-kit.dropdown";
import Field from "@ovh/ui-kit.field";
import Search from "@ovh/ui-kit.search";
import Select from "@ovh/ui-kit.select";

const moduleName = "oui.criteria";

angular
    .module(moduleName, [
        Chips,
        Dropdown,
        Field,
        Search,
        Select
    ])
    .component("ouiCriteria", Criteria)
    .component("ouiCriteriaAdder", CriteriaAdder)
    .provider("ouiCriteriaAdderConfiguration", CriteriaAdderProvider);

export default moduleName;
