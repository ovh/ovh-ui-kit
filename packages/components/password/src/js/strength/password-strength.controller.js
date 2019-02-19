export default class {
  constructor($attrs, $element, $scope, $timeout, ouiPasswordConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.translations = ouiPasswordConfiguration.translations;
  }

  updateStrength(score) {
    // By default, use zxcvbn score scale (from 0 to 4)
    // Convert input score to this scale for the result
    let currentScore = !angular.isNumber(score) ? 0 : Math.round(score);
    currentScore = Math.max(currentScore, this.minScore);
    currentScore = Math.min(currentScore, this.maxScore);

    switch (currentScore) {
      case this.scale.strong:
        this.classname = 'oui-progress_success';
        this.feedback = this.translations.strongPasswordLabel;
        break;
      case this.scale.good:
        this.classname = 'oui-progress_success';
        this.feedback = this.translations.goodPasswordLabel;
        break;
      case this.scale.weak:
        this.classname = 'oui-progress_warning';
        this.feedback = this.translations.weakPasswordLabel;
        break;
      case this.scale.bad:
        this.classname = 'oui-progress_error';
        this.feedback = this.translations.badPasswordLabel;
        break;
      default:
        this.classname = 'oui-progress_error';
        this.feedback = this.translations.riskyPasswordLabel;
        break;
    }
  }

  $onInit() {
    this.scale = {
      strong: 4,
      good: 3,
      weak: 2,
      bad: 1,
    };
    this.minScore = 0;
    this.maxScore = Object.keys(this.scale).length;

    // Avoid idle animation on Windows when undefined
    this.score = this.score || this.minScore;
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-password-strength'));

    this.$scope.$watch(
      () => this.score,
      score => this.updateStrength(score),
    );
  }
}
