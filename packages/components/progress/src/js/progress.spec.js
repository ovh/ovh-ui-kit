describe('ouiProgress', () => {
  let TestUtils;
  let $timeout;

  const progressClass = 'oui-progress';
  const progressBarClass = `${progressClass}__bar`;
  const progressLabelClass = `${progressClass}__label`;
  const progressThresholdClass = `${progressClass}__threshold`;

  beforeEach(angular.mock.module('oui.progress'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('ouiProgress Component', () => {
    function getProgressBarComponent(element, type) {
      if (type) {
        return angular.element(element[0].querySelector(`.${progressBarClass}_${type}`));
      }

      return angular.element(element[0].querySelector(`.${progressBarClass}`));
    }

    function getProgressBarLabel(element) {
      return angular.element(element[0].querySelector(`.${progressLabelClass}`));
    }

    function getProgressThreshold(element) {
      return angular.element(element[0].querySelector(`.${progressThresholdClass}`));
    }

    it('should display a progress', () => {
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar value="50"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(element.hasClass(progressClass)).toBeTruthy();
      expect(getProgressBarComponent(element).length).toBe(1);
    });

    it('should display a compact progress bar', () => {
      const element = TestUtils.compileTemplate(`
                <oui-progress compact>
                    <oui-progress-bar value="50"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(element.hasClass(`${progressClass}_compact`)).toBeTruthy();
    });

    it('should display a progress bar without labels', () => {
      const element = TestUtils.compileTemplate(`
                <oui-progress compact>
                    <oui-progress-bar value="50"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(element.hasClass(`${progressClass}_no-labels`)).toBeTruthy();
    });

    it('should set type info by default', () => {
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar value="50"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarComponent(element, 'info').length).toBe(1);
    });

    it('should display a progress bar of each type', () => {
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar type="info" value="5"></oui-progress-bar>
                    <oui-progress-bar type="success" value="10"></oui-progress-bar>
                    <oui-progress-bar type="warning" value="15"></oui-progress-bar>
                    <oui-progress-bar type="error" value="20"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarComponent(element, 'info').length).toBe(1);
      expect(getProgressBarComponent(element, 'success').length).toBe(1);
      expect(getProgressBarComponent(element, 'warning').length).toBe(1);
      expect(getProgressBarComponent(element, 'error').length).toBe(1);
    });

    it('should have the correct width set', () => {
      const value = 5;
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar value="${value}"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarComponent(element).css('width')).toBe(`${value}%`);
    });

    it('should have the correct width when max-value is used', () => {
      const value = 10;
      const expectedWidth = value / 2;
      const element = TestUtils.compileTemplate(`
                <oui-progress max-value="200">
                    <oui-progress-bar value="${value}"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarComponent(element).css('width')).toBe(`${expectedWidth}%`);
    });

    it('should have the correct default label', () => {
      const value = 5;
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar value="${value}"></oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarLabel(element).text()).toBe(`${value}%`);
    });

    it('should have the correct label', () => {
      const value = 5;
      const text = `Progress: ${value}%`;
      const element = TestUtils.compileTemplate(`
                <oui-progress>
                    <oui-progress-bar value="${value}">${text}</oui-progress-bar>
                </oui-progress>`);

      $timeout.flush();

      expect(getProgressBarLabel(element).text()).toBe(text);
    });

    describe('ouiProgressThreshold Component', () => {
      it('should have the correct position according to value', () => {
        const value = 10;
        const maxValue = 200;
        const leftPosition = value / (maxValue / 100);
        const element = TestUtils.compileTemplate(`
                    <oui-progress max-value="${maxValue}">
                        <oui-progress-threshold value="${value}"></oui-progress-threshold>
                    </oui-progress>`);

        $timeout.flush();

        const thresholdEl = getProgressThreshold(element);
        expect(thresholdEl.length).toBe(1);
        expect(thresholdEl.css('left')).toBe(`${leftPosition}%`);
      });
    });
  });
});
