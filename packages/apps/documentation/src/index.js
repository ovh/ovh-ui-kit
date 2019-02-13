/* eslint-disable sort-imports */
import angular from "angular";
import ngAria from "angular-aria";
import ngMessages from "angular-messages";
import ngSanitize from "angular-sanitize";

import "@uirouter/angularjs";
import "@ovh/ui-kit";

import "./styles/index.less";

import Components from "./components";
import Controllers from "./controllers";
import Routes from "./index.routes";
/* eslint-enable sort-imports */

const moduleName = "documentation";

angular
    .module(moduleName, [
        ngAria,
        ngMessages,
        ngSanitize,
        "ui.router",
        "oui",
        Components,
        Controllers
    ])
    .config(Routes);

export default moduleName;
