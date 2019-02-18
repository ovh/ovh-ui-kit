import '@ovh/ui-kit.core/src/js/test-utils';

function loadTests(context) {
  context.keys().forEach(context);
}

loadTests(require.context('../src/js/', true, /.*((\.spec)|(index))$/));
