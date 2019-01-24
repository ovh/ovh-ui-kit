import "@ovh/ui-kit.core/src/js/test-utils";

loadTests(require.context("../src/js/", true, /.*((\.spec)|(index))$/));

function loadTests (context) {
    context.keys().forEach(context);
}
