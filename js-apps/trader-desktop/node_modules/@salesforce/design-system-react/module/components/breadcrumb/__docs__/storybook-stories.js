import React from 'react';
import { storiesOf } from '@storybook/react';
import { BREADCRUMB } from '../../../utilities/constants';
import Base from '../__examples__/base';
import OneItem from '../__examples__/one-item';
storiesOf(BREADCRUMB, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('2 Items', function () {
  return React.createElement(Base, null);
}).add('1 Item', function () {
  return React.createElement(OneItem, null);
});
//# sourceMappingURL=storybook-stories.js.map