import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

export default class {
  constructor($attrs, $element, $timeout, ouiCriteriaAdderConfiguration) {
    'ngInject';

    this.$attrs = $attrs; // For 'addBooleanParameter'
    this.$element = $element;
    this.$timeout = $timeout;

    this.operators = ouiCriteriaAdderConfiguration.operatorsByType;
    this.translations = ouiCriteriaAdderConfiguration.translations;

    this.minLength = 2;
    this.debounceDelay = 500;
  }

  triggerChange(preview) {
    this.onChange({
      modelValue: angular.copy(this.model),
      preview,
    });

    this.criteria = this.model
      .filter((criterion) => !criterion.preview)
      .map((criterion) => ({
        title: this.buildTitle(criterion),
        ...criterion,
      }));
  }

  indexOfCriterion(criterion) {
    return findIndex(this.model, (crit) => crit.operator === criterion.operator
      && crit.value === criterion.value
      && crit.property === criterion.property
      && crit.preview === criterion.preview);
  }

  setPreviewCriterion(_previewCriterion_) {
    const previewCriterion = _previewCriterion_;
    const criterionIndex = findIndex(this.model, ['preview', true]);
    previewCriterion.preview = true;
    if (criterionIndex > -1) {
      this.model[criterionIndex] = previewCriterion;
    } else {
      this.model.push(previewCriterion);
    }
    this.triggerChange(true);
  }

  deletePreviewCriterion(preview) {
    const previewCriterionIndex = findIndex(this.model, ['preview', true]);
    if (previewCriterionIndex > -1) {
      this.model.splice(previewCriterionIndex, 1);

      // We set the search reset as a preview
      this.triggerChange(preview);
    }
  }

  static getCriterion(modelValue) {
    return {
      title: modelValue,
      property: null, // any property
      operator: 'contains',
      value: modelValue,
    };
  }

  add(criterion) {
    // Delete same preview criterion if it exists.
    const previewCriterion = angular.copy(criterion);
    previewCriterion.preview = true;

    const previewCriterionIndex = this.indexOfCriterion(previewCriterion);
    if (previewCriterionIndex > -1) {
      this.model.splice(previewCriterionIndex, 1);
    }

    // Add the criterion if it does not exist.
    if (this.indexOfCriterion(criterion) < 0) {
      this.model.push(criterion);
      this.triggerChange();
    }
  }

  remove(criterion) {
    const criterionIndex = this.indexOfCriterion(criterion);
    if (criterionIndex > -1) {
      this.model.splice(criterionIndex, 1);
    }
    this.triggerChange();
  }

  set(criteria) {
    this.model = criteria;
    this.triggerChange();
  }

  clear() {
    this.model = [];
    this.triggerChange();
  }

  onCriterionChange(modelValue) {
    if (modelValue && modelValue.length >= this.minLength) {
      this.setPreviewCriterion(this.constructor.getCriterion(modelValue), true);
    } else {
      this.deletePreviewCriterion(true);
    }
  }

  onCriterionReset() {
    this.deletePreviewCriterion(true);
  }

  onCriterionSubmit(modelValue) {
    if (modelValue && modelValue.length >= this.minLength) {
      this.add(this.constructor.getCriterion(modelValue));
      this.deletePreviewCriterion();
    }
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-criteria'));
  }

  $onInit() {
    addBooleanParameter(this, 'searchable');

    this.model = this.model || [];

    this.criteria = this.model
      .filter((criterion) => !criterion.preview)
      .map((criterion) => ({
        title: this.buildTitle(criterion),
        ...criterion,
      }));
  }

  $doCheck() {
    if (this.previousModel !== this.model) {
      this.criteria = this.model
        .filter((criterion) => !criterion.preview)
        .map((criterion) => ({
          title: this.buildTitle(criterion),
          ...criterion,
        }));
      this.previousModel = this.model;
    }
  }

  buildTitle(criterion) {
    if (isEmpty(this.properties)) {
      return '';
    }

    // Support for search field
    if (isNil(criterion.property)) {
      return criterion.value;
    }

    const columnModel = find(this.properties, (column) => column.name === criterion.property);
    const operator = this.translations[`operator_${columnModel.type}_${criterion.operator}`];
    return `${columnModel.title} ${operator} ${criterion.value}`;
  }
}
