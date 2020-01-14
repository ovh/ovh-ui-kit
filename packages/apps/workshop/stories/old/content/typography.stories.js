import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-typography-stories';
angular.module(moduleName, ['oui.tooltip']);

storiesOf('Old/Content/Typography', module)
  .add(
    'Headings',
    () => `
    <h1>h1. Where no man has gone before</h1>
    <h2>h2. Where no man has gone before</h2>
    <h3>h3. Where no man has gone before</h3>
    <h4>h4. Where no man has gone before</h4>
    <h5>h5. Where no man has gone before</h5>
    <h6>h6. Where no man has gone before</h6>

    <p class="oui-heading_1">h1. Where no man has gone before</p>
    <p class="oui-heading_2">h2. Where no man has gone before</p>
    <p class="oui-heading_3">h3. Where no man has gone before</p>
    <p class="oui-heading_4">h4. Where no man has gone before</p>
    <p class="oui-heading_5">h5. Where no man has gone before</p>
    <p class="oui-heading_6">h6. Where no man has gone before</p>
    `, {
      notes: 'There is also a class helper `oui-heading_*` if needed',
    },
  )
  .add(
    'Headings (underlined)',
    () => `
    <h1 class="oui-heading_underline">h1. Where no man has gone before</h1>
    <h2 class="oui-heading_underline">h2. Where no man has gone before</h2>
    <h3 class="oui-heading_underline">h3. Where no man has gone before</h3>
    <h4 class="oui-heading_underline">h4. Where no man has gone before</h4>
    <h5 class="oui-heading_underline">h5. Where no man has gone before</h5>
    <h6 class="oui-heading_underline">h6. Where no man has gone before</h6>

    <p class="oui-heading_1 oui-heading_underline">h1. Where no man has gone before</p>
    <p class="oui-heading_2 oui-heading_underline">h2. Where no man has gone before</p>
    <p class="oui-heading_3 oui-heading_underline">h3. Where no man has gone before</p>
    <p class="oui-heading_4 oui-heading_underline">h4. Where no man has gone before</p>
    <p class="oui-heading_5 oui-heading_underline">h5. Where no man has gone before</p>
    <p class="oui-heading_6 oui-heading_underline">h6. Where no man has gone before</p>
    `, {
      notes: 'There is also a class helper `oui-heading_*` if needed',
    },
  )
  .add(
    'Paragraphs',
    () => `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel.
      Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus.
      Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
    </p>

    <div class="oui-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel.
      Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus.
      Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
    </div>
    `, {
      notes: 'There is also a class helper `oui-paragraph` if needed',
    },
  )
  .add(
    'Links',
    () => `
    <p>
      <a href="#">The quick brown fox jumps over the lazy dog</a>
    </p>

    <p>
      <span class="oui-link">The quick brown fox jumps over the lazy dog</span>
    </p>
    `, {
      notes: 'There is also a class helper `oui-link` if needed',
    },
  )
  .add(
    'Links (with icon)',
    () => `
    <p>
      <a href="#" class="oui-link oui-link_icon">
        The quick brown fox jumps over the lazy dog
        <span class="oui-icon oui-icon-external-link" aria-hidden="true"></span>
      </a>
    </p>
    `,
  )
  .add(
    'Abreviations and Acronyms',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>Praesent in congue purus, at <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">elementum sem</abbr>. Curabitur porta eros volutpat, sodales justo eu, congue metus.</p>

    <p>Praesent in congue purus, at elementum sem. <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" oui-tooltip>Curabitur porta</abbr> eros volutpat, sodales justo eu, congue metus.</p>
    `)), {
      notes: 'You can use also the `tooltip` directive to replace the native tooltip.',
    },
  )
  .add(
    'Description',
    () => `
      <dl class="oui-description">
          <dt>Disk space</dt>
          <dd>250 GB (HDD)</dd>
          <dt>E-mail account</dt>
          <dd>100 + 5 GB</dd>
          <dt>Language</dt>
          <dd>PHP</dd>
          <dt>Shared DB</dt>
          <dd>MySQL Personal 3 x 400 MB</dd>
          <dd>MySQL Professional 3 x 400 MB</dd>
          <dt>Private SQL</dt>
          <dd>optional</dd>
      </dl>
    `,
  )
  .add(
    'Description (horizontal)',
    () => `
        <dl class="oui-description oui-description_horizontal">
            <dt>Disk space</dt>
            <dd>250 GB (HDD)</dd>
            <dt>E-mail account</dt>
            <dd>100 + 5 GB</dd>
            <dt>Language</dt>
            <dd>PHP</dd>
            <dt>Shared DB</dt>
            <dd>MySQL Personal 3 x 400 MB</dd>
            <dd>MySQL Professional 3 x 400 MB</dd>
            <dt>Private SQL</dt>
            <dd>optional</dd>
        </dl>
    `,
  );
