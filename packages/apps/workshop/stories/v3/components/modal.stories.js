import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Modal from '@ovh-ux/ui-kit.modal';

import readme from '@ovh-ux/ui-kit.modal/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-modal-stories';
angular.module(moduleName, [Modal]);

export default {
  title: 'Version 3/Components/Modal',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-modal
      heading="Modal title"
      loading="$ctrl.isLoading"
      on-dismiss="$ctrl.onDismiss()">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
      Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu.
      Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus.
      Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate
      rhoncus vitae ut justo. Ut dignissim varius est in consequat.
      Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu.
      In et elit ipsum.
    </oui-modal>`,
    {
      $ctrl: {
        isLoading: boolean('Loading state', false),
        onDismiss: action('onDismiss'),
      },
    },
  ),
);

export const WithActions = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-modal
      heading="Modal title"
      loading="$ctrl.isLoading"
      primary-action="$ctrl.onPrimaryAction()"
      primary-disabled="$ctrl.primaryDisabled"
      primary-label="Ok"
      secondary-action="$ctrl.onSecondaryAction()"
      secondary-disabled="$ctrl.secondaryDisabled"
      secondary-label="Cancel"
      on-dismiss="$ctrl.onDismiss()">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu.
        Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus.
        Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate
        rhoncus vitae ut justo. Ut dignissim varius est in consequat.
        Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu.
        In et elit ipsum.
      </p>
    </oui-modal>`,
    {
      $ctrl: {
        isLoading: boolean('Loading state', false),
        primaryDisabled: boolean('Primary disabled', false),
        secondaryDisabled: boolean('Secondary disabled', false),
        onDismiss: action('onDismiss'),
        onPrimaryAction: action('onPrimaryAction'),
        onSecondaryAction: action('onSecondaryAction'),
      },
    },
  ),
);

WithActions.story = {
  name: 'With actions',
};

export const WithIcons = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-modal
      heading="Modal title"
      type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus.
      </p>
    </oui-modal>

    <oui-modal
      heading="Modal title"
      type="help">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus.
      </p>
    </oui-modal>

    <oui-modal
      heading="Modal title"
      type="success">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus.
      </p>
    </oui-modal>

    <oui-modal
      heading="Modal title"
      type="warning">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus.
      </p>
    </oui-modal>

    <oui-modal
      heading="Modal title"
      type="error">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
        Phasellus vel ipsum vitae neque varius luctus.
      </p>
    </oui-modal>`,
  ),
);

WithIcons.story = {
  name: 'With icons',
};
