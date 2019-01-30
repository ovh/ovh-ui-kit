import introduction from "@ovh/ui-kit-documentation/docs/README.md";

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("root", {
            url: "",
            redirectTo: "showcase"
        })
        .state("showcase", {
            redirectTo: "showcase.documentation",
            template: "<oui-showcase></oui-showcase>"
        })
        .state("showcase.documentation", {
            url: "/documentation",
            friendlyName: "Documentation",
            groupName: "Getting started",
            redirectTo: "showcase.documentation.introduction",
            template: "<div ui-view></div>",
            weight: 9000
        })
        .state("showcase.documentation.introduction", {
            url: "/introduction",
            friendlyName: "Introduction",
            template: introduction
        });
}
