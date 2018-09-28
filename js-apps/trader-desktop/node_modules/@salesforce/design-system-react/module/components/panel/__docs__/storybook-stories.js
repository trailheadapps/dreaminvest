import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { PANEL } from '../../../utilities/constants';
import Filtering from '../__examples__/filtering';
import FilteringLocked from '../__examples__/filtering-locked';
import FilteringError from '../__examples__/filtering-error';
storiesOf(PANEL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-grid",
    style: {
      backgroundColor: '#ccc',
      padding: '20px'
    }
  }, React.createElement("div", {
    className: "slds-col--bump-left",
    style: {
      width: '420px'
    }
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory())));
}).add('Filters', function () {
  return React.createElement(Filtering, null);
}).add('Filters Locked', function () {
  return React.createElement(FilteringLocked, null);
}).add('Filters Error', function () {
  return React.createElement(FilteringError, null);
});
//# sourceMappingURL=storybook-stories.js.map