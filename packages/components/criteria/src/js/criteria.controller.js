import { addBooleanParameter } from "@ovh/ui-kit.core/src/js/component-utils";
import findIndex from "lodash/findIndex";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs; // For 'addBooleanParameter'

        this.minLength = 2;
        this.debounceDelay = 500;
    }

    triggerChange () {
        if (this.onChange) {
            this.onChange({ modelValue: angular.copy(this.model) });
            this.criteria = this.model.filter(criterion => !criterion.preview);
        }
    }

    indexOfCriterion (criterion) {
        let criterionIndex = this.model.length - 1;
        while (criterionIndex >= 0 && !angular.equals(this.model[criterionIndex], criterion)) {
            --criterionIndex;
        }
        return criterionIndex;
    }

    setPreviewCriterion (previewCriterion) {
        const criterionIndex = findIndex(this.model, ["preview", true]);
        previewCriterion.preview = true;
        if (criterionIndex > -1) {
            this.model[criterionIndex] = previewCriterion;
        } else {
            this.model.push(previewCriterion);
        }
        this.triggerChange();
    }

    deletePreviewCriterion () {
        const previewCriterionIndex = findIndex(this.model, ["preview", true]);
        if (previewCriterionIndex > -1) {
            this.model.splice(previewCriterionIndex, 1);
            this.triggerChange();
        }
    }


    static getCriterion (modelValue) {
        return {
            title: modelValue,
            property: null, // any property
            operator: "contains",
            value: modelValue
        };
    }

    add (criterion) {
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

    remove (criterion) {
        const criterionIndex = this.indexOfCriterion(criterion);
        if (criterionIndex > -1) {
            this.model.splice(criterionIndex, 1);
        }
        this.triggerChange();
    }

    set (criteria) {
        this.model = criteria;
        this.triggerChange();
    }

    clear () {
        this.model = [];
        this.triggerChange();
    }

    onCriterionChange (modelValue) {
        if (modelValue && modelValue.length >= this.minLength) {
            this.setPreviewCriterion(this.constructor.getCriterion(modelValue), true);
        } else {
            this.deletePreviewCriterion();
        }
    }

    onCriterionReset () {
        this.deletePreviewCriterion();
    }

    onCriterionSubmit (modelValue) {
        if (modelValue && modelValue.length >= this.minLength) {
            this.add(this.constructor.getCriterion(modelValue));
            this.deletePreviewCriterion();
        }
    }

    $onInit () {
        addBooleanParameter(this, "searchable");

        this.model = this.model || [];
    }
}
