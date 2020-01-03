import { storiesOf } from '@storybook/html';
import { number } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.progress/README.md';
import { compileTemplate } from '../../src/utils';

const moduleName = 'oui-progress-stories';
angular.module(moduleName, ['oui.progress']);

storiesOf('Components/Progress', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Variants',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-progress>
      <oui-progress-bar type="info" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <oui-progress>
      <oui-progress-bar type="success" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <oui-progress>
      <oui-progress-bar type="warning" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <oui-progress>
      <oui-progress-bar type="error" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>
    `, {
      $ctrl: {
        percentage: number('Value', 50),
      },
    })),
  )
  .add(
    'Stacked',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-progress>
      <oui-progress-bar type="success" value="30"></oui-progress-bar>
      <oui-progress-bar type="error" value="15"></oui-progress-bar>
    </oui-progress>
    `)),
  )
  .add(
    'With thresholds',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-progress max-value="200">
      <oui-progress-bar type="success"
        value="139">
        Installing components: 139/200
      </oui-progress-bar>
      <oui-progress-threshold value="25"></oui-progress-threshold>
      <oui-progress-threshold value="50"></oui-progress-threshold>
      <oui-progress-threshold value="75"></oui-progress-threshold>
      <oui-progress-threshold value="100"></oui-progress-threshold>
      <oui-progress-threshold value="125"></oui-progress-threshold>
      <oui-progress-threshold value="150"></oui-progress-threshold>
      <oui-progress-threshold value="175"></oui-progress-threshold>
    </oui-progress>

    <oui-progress>
      <oui-progress-bar type="error" value="60"></oui-progress-bar>
      <oui-progress-threshold value="20"></oui-progress-threshold>
      <oui-progress-threshold value="50"></oui-progress-threshold>
      <oui-progress-threshold value="80"></oui-progress-threshold>
    </oui-progress>
    `)),
  )
  .add(
    'With custom label',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-progress>
      <oui-progress-bar type="info"
        value="$ctrl.percentage">
        Progress: {{$ctrl.percentage}}%
      </oui-progress-bar>
    </oui-progress>
    `, {
      $ctrl: {
        percentage: number('Value', 50),
      },
    })),
  )
  .add(
    'Compact',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-progress compact>
      <oui-progress-bar type="info"
        value="$ctrl.percentage">
        {{$ctrl.percentage}}% complete
      </oui-progress-bar>
    </oui-progress>

    <oui-progress compact>
      <oui-progress-bar type="success"
        value="$ctrl.percentage">
      </oui-progress-bar>
    </oui-progress>

    <oui-progress compact>
      <oui-progress-bar type="warning"
        value="$ctrl.percentage">
      </oui-progress-bar>
    </oui-progress>

    <oui-progress compact>
      <oui-progress-bar type="error"
        value="$ctrl.percentage">
        {{$ctrl.percentage}}% complete
      </oui-progress-bar>
    </oui-progress>
    `, {
      $ctrl: {
        percentage: number('Value', 50),
      },
    })),
  );
