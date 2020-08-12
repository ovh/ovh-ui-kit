import { getAttribute, hasAttribute } from '@ovh-ux/ui-kit.core/src/js/component-utils';

const searchableTypes = [
  'number',
  'string',
];
const filterableTypes = [
  'boolean',
  'date',
  'number',
  'options',
  'string',
];

export default class DatagridColumnBuilder {
  constructor($parse, $compile) {
    'ngInject';

    this.$parse = $parse;
    this.$compile = $compile;
  }

  parseColumns(_columnElements_, _columnDescription_, $scope) {
    // Set columns number from arrays length
    const columnElements = _columnElements_ || [];
    const columnDescription = _columnDescription_ || [];
    const columnsLength = Math.max(columnElements.length, columnDescription.length);
    const columns = [];

    let hasFooter = false;
    const currentSorting = {
      columnName: undefined,
      dir: 0,
    };

    for (let i = 0; i < columnsLength; i += 1) {
      const element = columnElements[i] || document.createElement('oui-datagrid-column');
      const description = columnDescription[i] || {};

      const column = {
        footer: description.footer || getAttribute(element, 'footer'),
        hidden: description.hidden || hasAttribute(element, 'hidden'),
        name: description.name || getAttribute(element, 'name'),
        preventCustomization: description.preventCustomization || hasAttribute(element, 'prevent-customization'),
        type: description.type || getAttribute(element, 'type') || 'string',
        typeOptions: JSON.stringify(description.typeOptions) || description['type-options'] || getAttribute(element, 'type-options'),
      };

      const propertyValue = description.property || getAttribute(element, 'property');
      if (propertyValue) {
        column.name = column.name || propertyValue;
        column.getValue = this.$parse(propertyValue);

        // A column can be sorted only if it has a "property" attribute.
        const sortableValue = description.sortable || getAttribute(element, 'sortable') || hasAttribute(element, 'sortable');
        if (sortableValue) {
          column.sortable = !!sortableValue;

          const sorting = DatagridColumnBuilder.defineDefaultSorting(column, sortableValue);
          Object.assign(currentSorting, sorting);
        }
      }

      column.filterable = DatagridColumnBuilder.isFilterable(column)
        && (description.filterable || hasAttribute(element, 'filterable'));
      column.searchable = DatagridColumnBuilder.isSearchable(column)
        && (description.searchable || hasAttribute(element, 'searchable'));

      if (column.typeOptions) {
        column.typeOptions = this.$parse(column.typeOptions)($scope);
      }

      if (description.title) {
        column.title = description.title;
      } else if (hasAttribute(element, 'title')) {
        column.rawTitle = description.title || getAttribute(element, 'title');
        column.title = this.buildTitle(column.rawTitle, $scope);
      }

      // If one column has a footer, we set true for all
      if (column.footer) {
        hasFooter = true;
      }

      if (!column.sortProperty) {
        column.sortProperty = column.name;
      }

      column.template = description.template
        ? description.template.trim()
        : element.innerHTML.trim();

      column.compiledTemplate = this.getColumnTemplate(column);

      columns.push(column);
    }

    return {
      columns,
      currentSorting,
      hasFooter,
    };
  }

  buildTitle(titleValue, $scope) {
    return this.$parse(titleValue)($scope);
  }

  buildActionColumn(actionColumnElement) {
    const column = {
      template: actionColumnElement.outerHTML,
    };
    column.compiledTemplate = this.getColumnTemplate(column);
    column.alwaysVisible = true;
    return column;
  }

  static defineDefaultSorting(_column_, sortableValue) {
    const column = _column_;
    column.sortable = sortableValue !== undefined;

    if (sortableValue && sortableValue.length) {
      column.defaultSortDir = sortableValue === 'asc' ? 1 : -1;
      return {
        columnName: column.name,
        dir: column.defaultSortDir,
      };
    }

    return {};
  }

  static isSearchable(column) {
    return searchableTypes.indexOf(column.type) > -1;
  }

  static isFilterable(column) {
    return filterableTypes.indexOf(column.type) > -1;
  }

  getColumnTemplate(_column_) {
    const column = _column_;
    if (!column.compiledTemplate) {
      column.compiledTemplate = this.$compile(`<div>${column.template}</div>`);
    }
    return column.compiledTemplate;
  }
}
