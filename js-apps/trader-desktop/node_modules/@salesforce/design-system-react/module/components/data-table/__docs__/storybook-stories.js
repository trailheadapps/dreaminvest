import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { DATA_TABLE } from '../../../utilities/constants';
import Advanced from '../__examples__/advanced';
import Basic from '../__examples__/basic';
storiesOf(DATA_TABLE, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Basic (Fluid Layout)', function () {
  return React.createElement(Basic, null);
}).add('Advanced (Fixed Layout)', function () {
  return React.createElement(Advanced, {
    log: action
  });
});
//# sourceMappingURL=storybook-stories.js.map