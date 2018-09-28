import React from 'react';
import { storiesOf } from '@storybook/react';
import { ALERT } from '../../../utilities/constants';
import Info from '../__examples__/info';
import Warning from '../__examples__/warning';
import ErrorAlert from '../__examples__/error';
import Offline from '../__examples__/offline';
import Dismissable from '../__examples__/dismissable';
import CloseAlert from '../__examples__/close-alert';
import CustomClassNames from '../__examples__/custom-class-name';
/* eslint-disable react/display-name */

storiesOf(ALERT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Info', function () {
  return React.createElement(Info, null);
}).add('Warning', function () {
  return React.createElement(Warning, null);
}).add('Error', function () {
  return React.createElement(ErrorAlert, null);
}).add('Offline', function () {
  return React.createElement(Offline, null);
}).add('Dismissable', function () {
  return React.createElement(Dismissable, null);
}).add('Close alert', function () {
  return React.createElement(CloseAlert, null);
}).add('Custom Class Names', function () {
  return React.createElement(CustomClassNames, null);
});
//# sourceMappingURL=storybook-stories.js.map