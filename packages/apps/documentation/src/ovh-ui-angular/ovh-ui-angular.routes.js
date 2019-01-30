import config from "./ovh-ui-angular.config.json";
import introduction from "@ovh/ui-kit-documentation/docs/components/README.md";
import templateUtils from "../utils/template-utils";

const templates = templateUtils.loadAngularJSReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.components", {
            url: "/components",
            friendlyName: "Components",
            groupName: "Getting started",
            redirectTo: "showcase.components.introduction",
            template: "<div ui-view></div>",
            weight: 9000,
            groups: {
                layout: {
                    name: "Layout",
                    weight: 9000
                },
                content: {
                    name: "Content",
                    weight: 8000
                },
                components: {
                    name: "Components",
                    weight: 7000
                },
                utilities: {
                    name: "Utilities",
                    weight: 6000
                }
            }
        })
        .state("showcase.components.introduction", {
            url: "/introduction",
            friendlyName: "Introduction",
            template: introduction
        });

    templateUtils.addAngularJSComponentStates($stateProvider, templates, config);
}
