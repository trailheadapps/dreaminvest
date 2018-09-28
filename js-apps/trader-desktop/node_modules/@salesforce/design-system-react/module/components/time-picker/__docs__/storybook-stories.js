/* eslint-disable indent */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { TIME_PICKER } from '../../../utilities/constants';
import Timepicker from '../../time-picker';

var getTimepicker = function getTimepicker(props) {
  return React.createElement(Timepicker, props);
};

storiesOf(TIME_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getTimepicker({
    label: 'Time',
    required: true,
    stepInMinutes: 30,
    onDateChange: action('onDateChange')
  });
});
//# sourceMappingURL=storybook-stories.js.map