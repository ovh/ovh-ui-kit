import '@ovh/ui-kit.checkbox/src/js/index';
import '@ovh/ui-kit.core/src/js/test-utils';
import '@ovh/ui-kit.radio/src/js/index';
import '@ovh/ui-kit.select/src/js/index';

function loadTests(context) {
  context.keys().forEach(context);
}

loadTests(require.context('../src/js/', true, /.*((\.spec)|(index))$/));
