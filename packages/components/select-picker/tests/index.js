import "@ovh/ui-kit.utils/js/test-utils";

loadTests(require.context("../js/", true, /.*((\.spec)|(index))$/));

function loadTests (context) {
    context.keys().forEach(context);
}
