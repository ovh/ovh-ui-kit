import config from "./index.config.json";
import templateUtils from "./utils/template-utils";

const rootName = "showcase";
const states = templateUtils.loadDocumentationStates(rootName);

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";

    $stateProvider
        .state(rootName, {
            template: "<oui-showcase></oui-showcase>"
        });

    // $stateProvider
    //     .state("showcase", {
    //         redirectTo: "showcase.index",
    //         template: "<oui-showcase></oui-showcase>"
    //     })
    //     .state("showcase.components", {
    //         template: "<div ui-view></div>"
    //     })
    //     .state("showcase.styles", {
    //         template: "<div ui-view></div>"
    //     })
    //     .state("root", {
    //         url: "",
    //         redirectTo: "showcase"
    //     });

    $urlRouterProvider.otherwise("/");

    templateUtils.addDocumentationStates($stateProvider, states, config);
}
