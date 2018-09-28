import React from 'react';
import { storiesOf } from '@storybook/react';
import { TOAST } from '../../../utilities/constants';
import Info from '../__examples__/info';
import Success from '../__examples__/success';
import Warning from '../__examples__/warning';
import ErrorAlert from '../__examples__/error';
import ErrorWithDetailsAlert from '../__examples__/error-with-details';
import CloseToast from '../__examples__/close-toast';
import DurationToast from '../__examples__/duration-toast';
import CustomClassNames from '../__examples__/custom-class-name';
/* eslint-disable react/display-name */

storiesOf(TOAST, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Info', function () {
  return React.createElement(Info, null);
}).add('Success', function () {
  return React.createElement(Success, null);
}).add('Warning', function () {
  return React.createElement(Warning, null);
}).add('Error', function () {
  return React.createElement(ErrorAlert, null);
}).add('Error With Details', function () {
  return React.createElement(ErrorWithDetailsAlert, null);
}).add('Close Toast', function () {
  return React.createElement(CloseToast, null);
}).add('Duration Toast', function () {
  return React.createElement(DurationToast, null);
}).add('Custom Class Names', function () {
  return React.createElement(CustomClassNames, null);
});
//# sourceMappingURL=storybook-stories.js.map