import pages from "./pages.data.json";

const rootState = "showcase";
const req = require.context("@ovh/ui-kit-documentation/src/pages", true, /.*\.(html|md)$/);

function loadDirectory ($stateProvider, items) {
    items.forEach(item => {
        // Load state template
        if (item.type === "file") {
            // Dynamic imports doesn't work
            // This is a workaround using require.context
            item.template = req(item.path);
        }

        $stateProvider.state(item.state, item);

        // Load children if directory
        if (item.type === "directory") {
            loadDirectory($stateProvider, item.children);
        }
    });
}

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";

    $stateProvider
        .state(rootState, {
            template: "<doc-showcase></doc-showcase>"
        });

    $urlRouterProvider.otherwise("/");

    loadDirectory($stateProvider, pages.children);
}
