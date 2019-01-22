import { addDefaultParameter } from "@ovh/ui-kit.core/js/component-utils";
import get from "lodash/get";

export default class {
    constructor ($attrs, $element, $scope, $timeout, ouiCriteriaAdderConfiguration) {
        "ngInject";

        this.$attrs = $attrs; // For 'addDefaultParameter'
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.operators = ouiCriteriaAdderConfiguration.operatorsByType;
        this.translations = ouiCriteriaAdderConfiguration.translations;
        this.valueModel = {};
    }

    getOperatorsByType (type) {
        const operators = this.operators[type] || [];
        return operators.map((operator) => ({
            name: operator,
            title: this.translations[`operator_${type}_${operator}`]
        }));
    }

    onColumnChange () {
        this.resetValueModel();
        this.selectableOperators = this.filterSelectableOperators();
        this.operatorModel = this.selectableOperators[0];
    }

    onFormSubmit () {
        if (this.valueModel[this.columnModel.type] !== undefined) {
            const modelValue = {
                title: `${this.columnModel.title} ${this.operatorModel.title} ${this.getCriterionValueLabel()}`,
                property: this.columnModel.name,
                operator: this.operatorModel.name,
                value: this.getCriterionValue()
            };

            this.onSubmit({ modelValue });
            this.resetValueModel();

            if (this.criteriaContainer) {
                this.criteriaContainer.add(modelValue);
            }
        }
    }

    getCriterionValue () {
        if (["boolean", "options"].indexOf(this.columnModel.type) < 0) {
            return this.valueModel[this.columnModel.type];
        }

        return this.valueModel[this.columnModel.type].value;
    }

    getCriterionValueLabel () {
        switch (this.columnModel.type) {
        case "boolean":
            return this.getBooleanLabel(this.valueModel[this.columnModel.type].value);

        case "options":
            return this.getOptionsLabel(this.valueModel[this.columnModel.type].value);

        default:
            return this.valueModel[this.columnModel.type];
        }
    }

    getBooleanLabel (value) {
        if (value) {
            return get(this.columnModel, "typeOptions.trueValue") || this.translations.true_label;
        }

        return get(this.columnModel, "typeOptions.falseValue") || this.translations.false_label;
    }

    initBooleanCriterion () {
        this.booleanChoices = [true, false].map(value => ({
            name: this.getBooleanLabel(value),
            value
        }));
        this.valueModel[this.columnModel.type] = this.booleanChoices[0];
    }

    getOptionsLabel (value) {
        const options = get(this.columnModel, "typeOptions.values");
        return options && options[value] ? options[value] : value;
    }

    initOptionsCriterion () {
        const options = get(this.columnModel, "typeOptions.values");
        if (!options) {
            return;
        }

        this.optionsChoices = Object.keys(options)
            .map(key => ({
                name: options[key],
                value: key
            }))
            .sort((a, b) => String(a.name).localeCompare(String(b.name)));

        this.valueModel[this.columnModel.type] = this.optionsChoices[0];
    }

    resetValueModel () {
        Object.keys(this.valueModel).forEach(key => {
            this.valueModel[key] = undefined;
        });

        if (this.columnModel.type === "boolean") {
            this.initBooleanCriterion();
        } else if (this.columnModel.type === "options") {
            this.initOptionsCriterion();
        }
    }

    filterSelectableOperators () {
        const type = this.columnModel.type;
        const customOperatorsList = get(this.columnModel, "typeOptions.operators");
        const operators = customOperatorsList || this.operators[type] || [];
        return operators.map((operator) => ({
            name: operator,
            title: this.translations[`operator_${type}_${operator}`]
        }));
    }

    $onInit () {
        // Deprecated: Support for `align` attribute
        // Will become addDefaultParameter(this, "placement", "center");
        this.placement = this.placement || this.$attrs.align || "center";

        addDefaultParameter(this, "id", `ouiCriteriaAdder${this.$scope.$id}`);
        addDefaultParameter(this, "name", `ouiCriteriaAdder${this.$scope.$id}`);

        this.$timeout(() => {
            this.dropdownContent = this.$element[0];
        });

        // Auto select first column
        if (this.properties) {
            this.columnModel = this.properties[0];
        }

        this.selectableOperators = this.filterSelectableOperators();
        this.operatorModel = this.selectableOperators[0];

        this.resetValueModel();
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() => {
            this.$element
                .addClass("oui-criteria-adder")
                .removeAttr("id")
                .removeAttr("name");
        });
    }
}
