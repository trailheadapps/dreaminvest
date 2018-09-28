import React from 'react';
import { storiesOf } from '@storybook/react';
import { SPLIT_VIEW } from '../../../utilities/constants';
import Base from '../__examples__/base';
import BaseMultiple from '../__examples__/base-multiple';
import ExternalState from '../__examples__/external-state';
import CustomItemList from '../__examples__/custom-Item-list';
storiesOf(SPLIT_VIEW, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base: Open', function () {
  return React.createElement(Base, null);
}).add('Base: Closed', function () {
  return React.createElement(Base, {
    isOpen: false
  });
}).add('Base: Multiple', function () {
  return React.createElement(BaseMultiple, null);
}).add('External State', function () {
  return React.createElement(ExternalState, null);
}).add('Custom List', function () {
  return React.createElement(CustomItemList, null);
});
//# sourceMappingURL=storybook-stories.js.map