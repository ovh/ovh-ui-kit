import zxcvbn from 'zxcvbn';

export default class {
  constructor() {
    this.minLength = 8;
    this.maxLength = 30;
  }

  getPasswordScore(password) {
    const result = zxcvbn(password);
    this.passwordFeedback = result.feedback.suggestions.join(' ');
    this.passwordScore = result.score;
  }

  checkPasswordLength(password) {
    return angular.isString(password)
      && password.length >= this.minLength
      && password.length <= this.maxLength;
  }
}
