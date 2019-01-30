import capitalize from "lodash/capitalize";

class TemplateUtils {
    static loadLessReadme () {
        const req = requireLess();
        return loadAll(req);
    }

    static loadAngularJSReadme () {
        const req = requireAngularJS();
        return loadAll(req);
    }

    static addLessComponentStates ($stateProvider, templates, config) {
        Object.keys(templates).forEach(templateName => {
            const templateConfig = {
                url: `/${templateName}`,
                friendlyName: capitalize(templateName),
                ...config[templateName]
            };

            // Create showcase route
            $stateProvider.state(`showcase.styles.${templateName}`, {
                ...templateConfig,
                template: templates[templateName]
            });
        });
    }

    static addAngularJSComponentStates ($stateProvider, templates, config) {
        Object.keys(templates).forEach(templateName => {
            const templateConfig = {
                url: `/${templateName}`,
                friendlyName: capitalize(templateName),
                ...config[templateName]
            };

            if (templateConfig.controller) {
                templateConfig.controllerAs = "$ctrl";
            }

            // Create showcase route
            $stateProvider.state(`showcase.components.${templateName}`, {
                ...templateConfig,
                template: templates[templateName]
            });
        });
    }
}

function loadAll (req) {
    const templates = [];
    req.keys().forEach(file => {
        // Get filename without extension from path
        const filename = file.replace(/^.*[\\\/]/, "").replace(/.md/, "");
        templates[filename] = req(file);
    });
    return templates;
}

function requireLess () {
    return require.context("@ovh/ui-kit-documentation/docs/styles", true, /.*\.md$/);
}

function requireAngularJS () {
    return require.context("@ovh/ui-kit-documentation/docs/components", true, /.*\.md$/);
}

export default TemplateUtils;
