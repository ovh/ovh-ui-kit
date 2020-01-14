import find from 'lodash/find';
import get from 'lodash/get';
import ComparatorResolver from './comparator-resolver';
import StringComparators from './string';

export default class Filter {
  constructor(criteria, columns) {
    this.criteria = criteria;
    this.columns = columns;
    this.searchableColumns = this.getSearchableColumns();
  }

  /**
     * Apply all filter criteria on a collection.
     *
     * @param  {Array}   collection input array
     * @return {Array}              output array
     */
  applyFilter(collection) {
    let filtered = collection;
    this.criteria.forEach((criterion) => {
      filtered = this.applyCriteria(filtered, criterion);
    });
    return filtered;
  }

  /**
     * Apply a criterion on a collection.
     *
     * @param  {Array}   collection input array
     * @param  {Object}  criterion  a criterion object
     * @return {Array}              output array
     */
  applyCriteria(collection, criterion) {
    // Text search
    if (criterion.property === null && criterion.operator === 'contains') {
      return collection.filter((item) => this.itemContainsText(item, criterion.value));
    }

    const propertyMeta = find(this.columns, ['name', criterion.property]);

    if (!propertyMeta) {
      return collection;
    }

    const comparatorFn = ComparatorResolver.resolveComparator(criterion, propertyMeta.type);

    if (!criterion.property
            || !criterion.operator
            || criterion.value === undefined
            || !propertyMeta.type
            || !comparatorFn) {
      return collection;
    }

    return collection.filter((item) => {
      const subject = get(item, criterion.property);
      return comparatorFn(subject, criterion.value);
    });
  }

  /**
     * Find a text in a string.
     *
     * @param  {Object} item subject of search
     * @param  {String} text text to search
     * @return {Boolean}     true if text has been found in item
     */
  itemContainsText(item, text) {
    return this.searchableColumns
      .reduce((aggregator, name) => {
        const value = get(item, name);
        return aggregator || StringComparators.contains(value, text);
      }, false);
  }

  getSearchableColumns() {
    return this.columns
      .filter((column) => column.searchable)
      .map((column) => column.name);
  }
}
