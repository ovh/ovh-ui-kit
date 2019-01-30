/* eslint-disable sort-imports */
import angular from "angular";
import ngAria from "angular-aria";
import ngMessages from "angular-messages";
import ngSanitize from "angular-sanitize";

import "@uirouter/angularjs";
import "bloodhound-js";
import "clipboard";
import "flatpickr";
import "popper.js";
import "ui-select";
import "zxcvbn";

import "@ovh/ui-kit"; // Why `import oui from "@ovh/ui-kit";` doesn't work ?

import "./index.less";

import Components from "./components";
import Routes from "./index.routes";

import ComponentsRoutes from "./ovh-ui-angular/ovh-ui-angular.routes";
import StylesRoutes from "./ovh-ui-kit/ovh-ui-kit.routes";

/* eslint-enable sort-imports */

const app = angular
    .module("app", [
        ngAria,
        ngMessages,
        ngSanitize,
        "ui.router",
        "oui",
        Components
    ])
    .config(Routes)
    .config(ComponentsRoutes)
    .config(StylesRoutes);

require("./ovh-ui-angular/controllers/index");

export default app;
