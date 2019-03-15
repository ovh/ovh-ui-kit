import 'angular-sanitize';
import 'ui-select';
import angular from 'angular';
import Select from './js/select.directive';

const choicesTpl = require('./js/templates/choices.html');
const headerTpl = require('./js/templates/header.html');
const footerTpl = require('./js/templates/footer.html');
const matchTpl = require('./js/templates/match.html');
const matchMultipleTpl = require('./js/templates/match-multiple.html');
const noChoiceTpl = require('./js/templates/no-choice.html');
const selectTpl = require('./js/templates/select.html');
const selectMultipleTpl = require('./js/templates/select-multiple.html');

const moduleName = 'oui.select';

angular
  .module(moduleName, [
    'ngSanitize',
    'ui.select',
  ])
  .run(['$templateCache', ($templateCache) => {
    $templateCache.put('oui-ui-select/choices.tpl.html', choicesTpl);
    $templateCache.put('oui-ui-select/footer.tpl.html', footerTpl);
    $templateCache.put('oui-ui-select/header.tpl.html', headerTpl);
    $templateCache.put('oui-ui-select/match.tpl.html', matchTpl);
    $templateCache.put('oui-ui-select/match-multiple.tpl.html', matchMultipleTpl);
    $templateCache.put('oui-ui-select/no-choice.tpl.html', noChoiceTpl);
    $templateCache.put('oui-ui-select/select.tpl.html', selectTpl);
    $templateCache.put('oui-ui-select/select-multiple.tpl.html', selectMultipleTpl);
  }])
  .directive('ouiSelect', Select);

export default moduleName;
