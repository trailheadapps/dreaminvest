/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { BUTTON_GROUP } from '../../../utilities/constants';
import MoreIcon from '../__examples__/more-icon';
import IconGroup from '../__examples__/icon-group';
import Checkbox from '../__examples__/checkbox';
import CheckboxError from '../__examples__/checkbox-error';
storiesOf(BUTTON_GROUP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('More Icon', function () {
  return React.createElement(MoreIcon, null);
}).add('Icon Group', function () {
  return React.createElement(IconGroup, null);
}).add('Checkbox', function () {
  return React.createElement(Checkbox, null);
}).add('Checkbox Error', function () {
  return React.createElement(CheckboxError, null);
});
//# sourceMappingURL=storybook-stories.js.map