export default class NumberComparators {
  static is(subject, value) {
    return subject === value;
  }

  static smaller(subject, value) {
    return subject < value;
  }

  static bigger(subject, value) {
    return subject > value;
  }
}
