import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { ACCORDION } from '../../../utilities/constants';
import Base from '../__examples__/base';
storiesOf(ACCORDION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map