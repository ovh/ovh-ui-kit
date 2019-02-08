import toLower from "lodash/toLower";

class TemplateUtils {
    static loadStates (rootState) {
        const req = require.context("@ovh/ui-kit-documentation/src/pages", true, /.*\.(html|md)$/);
        const states = [];

        req.keys().forEach(file => {
            const path = toLower(file).replace(/^.\/|.(html|md)$/g, "");
            const state = `${rootState}./${path}`;
            const url = `/${path.replace(/(index|readme)?/, "")}`;

            states[state] = {
                template: req(file),
                url
            };
        });

        console.log("files", states);
        return states;
    }

    static addStates ($stateProvider, states, config) {
        Object.keys(states).forEach(templateName => {
            const stateConfig = {
                ...states[templateName],
                ...config[templateName]
            };

            if (stateConfig.controller) {
                stateConfig.controllerAs = "$ctrl";
            }

            // Create showcase route
            $stateProvider.state(templateName, stateConfig);
        });
    }
}

export default TemplateUtils;
