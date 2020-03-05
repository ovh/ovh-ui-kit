import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Tabs from '@ovh-ux/ui-kit.tabs';

import readme from '@ovh-ux/ui-kit.tabs/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'tabs-webcomponent.stories';
angular.module(moduleName, [Tabs]);

export default {
  title: 'Design System/Components/Tabs/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-tabs>
      <oui-tabs-item heading="Lorem ipsum">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet congue urna. Praesent ultricies id ex convallis dictum. Pellentesque malesuada faucibus consectetur. Quisque vehicula tincidunt leo, quis auctor nisi luctus quis. Etiam purus lectus, placerat vitae vehicula at, molestie nec erat. Duis enim odio, maximus at laoreet in, finibus nec mi. Nam ultrices, lacus vitae egestas volutpat, libero odio gravida turpis, vitae dapibus ex mi nec quam. Pellentesque a tempor nibh.</p>
      </oui-tabs-item>
      <oui-tabs-item heading="Dolor sit amet">
        <p>Proin egestas fermentum lectus nec euismod. Vivamus eu congue dui. Pellentesque sit amet pellentesque quam. Morbi posuere sem nec rutrum placerat. Vestibulum porttitor arcu eu risus tempor consectetur. Fusce aliquam bibendum aliquet. Morbi semper egestas iaculis. Ut sit amet sem et neque porta cursus pellentesque nec augue. Nullam semper in metus et luctus. Nunc molestie non ipsum a consequat. Etiam pellentesque laoreet lectus ut luctus. Nulla maximus, leo a mattis gravida, ligula felis vulputate libero, vitae fringilla nibh mauris nec dui. Fusce sed massa at arcu euismod dictum id sit amet lorem. Aliquam sed viverra sem, quis vehicula ligula. Vivamus blandit varius condimentum.</p>
      </oui-tabs-item>
      <oui-tabs-item heading="Consectetur adipiscing elit">
        <p>Duis egestas nulla at euismod semper. Nullam bibendum auctor viverra. Sed posuere neque nulla, id cursus nisi molestie vel. Nulla ornare elit sit amet congue faucibus. Aliquam eget lorem id justo ornare pretium in sit amet lectus. Sed maximus odio id porttitor rhoncus. Quisque pulvinar mauris ut sapien dictum, ultrices fermentum orci efficitur. Cras nec auctor ante. Aliquam ornare eleifend neque, at condimentum lacus aliquet elementum. Mauris mattis porttitor tortor vel vehicula. Phasellus venenatis nibh nec viverra sollicitudin. Ut lobortis mattis mauris, vel euismod nibh faucibus a.</p>
      </oui-tabs-item>
    </oui-tabs>`,
    {
      $ctrl: {
        activeTab: text('Active tab', 'basic1'),
      },
    },
  ),
);

export const WithSubheadings = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-tabs>
      <oui-tabs-item heading="Lorem ipsum">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet congue urna. Praesent ultricies id ex convallis dictum. Pellentesque malesuada faucibus consectetur. Quisque vehicula tincidunt leo, quis auctor nisi luctus quis. Etiam purus lectus, placerat vitae vehicula at, molestie nec erat. Duis enim odio, maximus at laoreet in, finibus nec mi. Nam ultrices, lacus vitae egestas volutpat, libero odio gravida turpis, vitae dapibus ex mi nec quam. Pellentesque a tempor nibh.</p>
      </oui-tabs-item>
      <oui-tabs-item heading="Dolor sit amet" subheading="Proin egestas">
        <p>Proin egestas fermentum lectus nec euismod. Vivamus eu congue dui. Pellentesque sit amet pellentesque quam. Morbi posuere sem nec rutrum placerat. Vestibulum porttitor arcu eu risus tempor consectetur. Fusce aliquam bibendum aliquet. Morbi semper egestas iaculis. Ut sit amet sem et neque porta cursus pellentesque nec augue. Nullam semper in metus et luctus. Nunc molestie non ipsum a consequat. Etiam pellentesque laoreet lectus ut luctus. Nulla maximus, leo a mattis gravida, ligula felis vulputate libero, vitae fringilla nibh mauris nec dui. Fusce sed massa at arcu euismod dictum id sit amet lorem. Aliquam sed viverra sem, quis vehicula ligula. Vivamus blandit varius condimentum.</p>
      </oui-tabs-item>
      <oui-tabs-item heading="Consectetur adipiscing elit" subheading="Promotion" variant="promotion">
        <p>Duis egestas nulla at euismod semper. Nullam bibendum auctor viverra. Sed posuere neque nulla, id cursus nisi molestie vel. Nulla ornare elit sit amet congue faucibus. Aliquam eget lorem id justo ornare pretium in sit amet lectus. Sed maximus odio id porttitor rhoncus. Quisque pulvinar mauris ut sapien dictum, ultrices fermentum orci efficitur. Cras nec auctor ante. Aliquam ornare eleifend neque, at condimentum lacus aliquet elementum. Mauris mattis porttitor tortor vel vehicula. Phasellus venenatis nibh nec viverra sollicitudin. Ut lobortis mattis mauris, vel euismod nibh faucibus a.</p>
      </oui-tabs-item>
    </oui-tabs>`,
    {
      $ctrl: {
        activeTab: text('Active tab', 'basic1'),
      },
    },
  ),
);

WithSubheadings.story = {
  name: 'With subheadings',
};
