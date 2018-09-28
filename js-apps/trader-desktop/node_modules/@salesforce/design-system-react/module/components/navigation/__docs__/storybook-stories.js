import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { NAVIGATION } from '../../../utilities/constants';
import Default from '../__examples__/default';
import Shade from '../__examples__/shade';
import SnaphotDefault from '../__examples__/snapshot-default';
storiesOf(NAVIGATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Default', function () {
  return React.createElement(Default, {
    action: action
  });
}).add('Inverse', function () {
  return React.createElement(Shade, {
    action: action
  });
}).add('DOM Snapshot', function () {
  return React.createElement(SnaphotDefault, null);
});
//# sourceMappingURL=storybook-stories.js.map