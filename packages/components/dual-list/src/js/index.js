import angular from "angular";
import Button from "@ovh/ui-kit.button";
import DualList from "./dual-list.component";
import DualListProvider from "./dual-list.provider";
import DualListSource from "./source/dual-list-source.component";
import DualListTarget from "./target/dual-list-target.component";
import Search from "@ovh/ui-kit.search";
import Spinner from "@ovh/ui-kit.spinner";

const moduleName = "oui.dual-list";

angular
    .module(moduleName, [
        Button,
        Search,
        Spinner
    ])
    .component("ouiDualList", DualList)
    .component("ouiDualListSource", DualListSource)
    .component("ouiDualListTarget", DualListTarget)
    .provider("ouiDualListConfiguration", DualListProvider);

export default moduleName;
