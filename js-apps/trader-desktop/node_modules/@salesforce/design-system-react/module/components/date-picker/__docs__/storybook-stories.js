import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import Datepicker from '../../date-picker';
import { DATE_PICKER } from '../../../utilities/constants';
import Default from '../__examples__/default';
import IsoWeekdays from '../__examples__/iso-weekday';
import CustomInput from '../__examples__/custom-input';
import SnaphotDefault from '../__examples__/snapshot-default';
import WeekdayPicker from '../__examples__/weekday-picker';
storiesOf(DATE_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Default', function () {
  return React.createElement(Default, {
    action: action
  });
}).add('ISO weekdays', function () {
  return React.createElement(IsoWeekdays, {
    action: action
  });
}).add('Custom Input', function () {
  return React.createElement(CustomInput, {
    action: action
  });
}).add('Inline menu', function () {
  return React.createElement(Datepicker, {
    menuPosition: "relative"
  });
}).add('DOM Snapshot', function () {
  return React.createElement(SnaphotDefault, null);
}).add('Weekday picker', function () {
  return React.createElement(WeekdayPicker, null);
});
//# sourceMappingURL=storybook-stories.js.map