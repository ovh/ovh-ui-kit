import decisions from "@ovh/ui-kit-documentation/docs/decisions.md";
import introduction from "@ovh/ui-kit-documentation/docs/readme.md";

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
            url: "/readme",
            friendlyName: "Introduction",
            template: introduction
        })
        .state("showcase.documentation.decisions", {
            url: "/decisions",
            friendlyName: "Decisions",
            template: decisions
        });
}
