import controller from './select.controller';
import template from './select.html';

export default () => ({
  require: {
    fieldCtrl: '?^^ouiField',
    selectCtrl: 'ouiSelect',
  },
  controller,
  controllerAs: '$ctrl',
  bindToController: true,
  scope: {
    disabled: '<?',
    disableItems: '&',
    groupBy: '<?',
    inline: '<?',
    items: '<?',
    load: '@?',
    loadOptions: '<?',
    match: '@?',
    valueProperty: '@?',
    model: '=',
    multiple: '<?',
    name: '@?',
    onBeforeLoad: '&?',
    onBlur: '&',
    onChange: '&',
    onConfirmRemove: '&?',
    onError: '&?',
    onFocus: '&',
    onLoad: '&?',
    placeholder: '@?',
    required: '<?',
    searchable: '<?',
    title: '@?',
  },
  compile: ($element, $attrs) => {
    const itemTemplate = $element.html().trim();
    const $template = angular.element(template);
    const choicesElement = $template.find('ui-select-choices');

    if (itemTemplate) {
      choicesElement.html(itemTemplate);
    }
    if ($attrs.groupBy) {
      choicesElement.attr('group-by', '$ctrl.groupBy');
    }

    const htmlContent = $template[0].outerHTML;
    $element.empty();

    return (scope, elem, attrs, { selectCtrl }) => {
      const ctrl = selectCtrl;
      ctrl.htmlContent = htmlContent;
      return ctrl;
    };
  },
});
