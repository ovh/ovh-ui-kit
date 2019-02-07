import capitalize from "lodash/capitalize";
import toLower from "lodash/toLower";

class TemplateUtils {
    static loadDocumentationStates (rootName) {
        const req = require.context("@ovh/ui-kit-documentation/pages", true, /.*\.(html|md)$/);
        const defaultName = "index";
        const states = [];

        req.keys().forEach(file => {
            const path = toLower(file).replace(/^.\/|(index|readme)?.(html|md)$/g, "");
            const pathArray = path.split("/");
            const url = `/${path}`;
            const stateName = `${rootName}.${url}`;

            // TODO: Manage "readme"||"index" files as priority (eg. weight)
            const level = pathArray.length - 1;
            const fileName = pathArray.pop();
            const groupName = pathArray.pop();
            const friendlyName = capitalize(fileName || groupName || defaultName);

            states[stateName] = {
                template: req(file),
                level,
                fileName,
                groupName,
                friendlyName,
                url
            };
        });

        console.log("files", states);
        return states;
    }

    static addDocumentationStates ($stateProvider, states, config) {
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
