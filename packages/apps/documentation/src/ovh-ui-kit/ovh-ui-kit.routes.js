import config from "./ovh-ui-kit.config.json";
import templateUtils from "../utils/template-utils";

const templates = templateUtils.loadLessReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.styles", {
            url: "/styles",
            friendlyName: "Styles",
            groupName: "Getting started",
            redirectTo: "showcase.styles.readme",
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
        });

    templateUtils.addLessComponentStates($stateProvider, templates, config);
}
