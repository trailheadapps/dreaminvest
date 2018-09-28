import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { NOTIFICATION } from '../../../utilities/constants';
import Notification from '../../notification';
storiesOf(NOTIFICATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base: Alert', function () {
  return React.createElement(Notification, {
    content: ['Your new contact ', React.createElement("a", {
      href: "javascript:void(0);",
      key: "0123"
    }, "Sara Smith"), ' was successfully created.'],
    iconName: "notification",
    isOpen: true,
    onDismiss: function onDismiss() {
      console.log('dismiss alert');
    },
    texture: true,
    theme: "success",
    variant: "alert"
  });
}).add('Base: Toast', function () {
  return React.createElement(Notification, {
    content: "toast notification",
    inverse: true,
    isOpen: true,
    name: "account",
    onDismiss: function onDismiss() {
      console.log('dismiss toast');
    },
    theme: "error",
    variant: "toast"
  });
});
//# sourceMappingURL=storybook-stories.js.map