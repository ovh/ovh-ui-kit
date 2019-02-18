import isDate from 'lodash/isDate';
import isNaN from 'lodash/isNaN';

export default class DateComparators {
  static is(subject, value) {
    return DateComparators.transformDate(subject) === value;
  }

  static isBefore(subject, value) {
    return DateComparators.transformDate(subject) < value;
  }

  static isAfter(subject, value) {
    return DateComparators.transformDate(subject) > value;
  }

  static normalizeDate(date) {
    let daydate = date.getDate();
    let month = date.getMonth() + 1;

    if (daydate < 10) { // eslint-disable-line no-magic-numbers
      daydate = `0${daydate}`;
    }

    if (month < 10) { // eslint-disable-line no-magic-numbers
      month = `0${month}`;
    }

    return `${date.getFullYear()}-${month}-${daydate}`;
  }

  static transformDate(rawDate) {
    let date = rawDate;

    if (!isDate(date)) {
      date = new Date(date);
      if (isNaN(date.valueOf())) {
        throw new Error(`ovh-ui-angular: date ${rawDate} cannot be parsed.`);
      }
    }

    return DateComparators.normalizeDate(date);
  }
}
