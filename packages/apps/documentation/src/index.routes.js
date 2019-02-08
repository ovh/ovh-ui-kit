import config from "./pages.config.json";
import templateUtils from "./utils/template-utils";

const rootState = "showcase";
const states = templateUtils.loadStates(rootState);

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";

    $stateProvider
        .state(rootState, {
            template: "<oui-showcase></oui-showcase>"
        });

    $urlRouterProvider.otherwise("/");

    templateUtils.addStates($stateProvider, states, config);
}
