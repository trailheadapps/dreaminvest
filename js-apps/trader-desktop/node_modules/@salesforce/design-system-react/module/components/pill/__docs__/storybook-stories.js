import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PILL } from "../../../../utilities/constants";
import IconSettings from "../../../../components/icon-settings";
import BaseExample from '../__examples__/base';
import IconExample from '../__examples__/icon';
import ContainerExample from '../__examples__/container';
import BarePillListboxExample from '../__examples__/listbox-bare';
import ListboxExample from '../__examples__/listbox';
import IconListboxExample from '../__examples__/listbox-icon';
import AvatarListboxExample from '../__examples__/listbox-avatar';
storiesOf(PILL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Linked, Unlinked, Truncated', function () {
  return React.createElement(BaseExample, {
    action: action
  });
}).add('Icon, Avatar, Error', function () {
  return React.createElement(IconExample, {
    action: action
  });
}).add('Bare', function () {
  return React.createElement(BarePillListboxExample, {
    action: action
  });
}).add('Pill Container', function () {
  return React.createElement(ContainerExample, {
    action: action
  });
}).add('Listbox Of Pill Options', function () {
  return React.createElement(ListboxExample, {
    action: action
  });
}).add('Listbox Of Pill Options With Icon', function () {
  return React.createElement(IconListboxExample, {
    action: action
  });
}).add('Listbox Of Pill Options With Avatar', function () {
  return React.createElement(AvatarListboxExample, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map