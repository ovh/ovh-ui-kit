import './index';

function loadTests(context) {
  context.keys().forEach(context);
}

loadTests(require.context('./js/', true, /.*((\.spec)|(index))$/));
