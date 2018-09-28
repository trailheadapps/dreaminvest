import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICON_SETTINGS } from '../../../utilities/constants';
import Sprite from '../__examples__/sprite';
import IconPath from '../__examples__/icon-path';
storiesOf(ICON_SETTINGS, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base: Icon path', function () {
  return React.createElement(IconPath, null);
}).add('Base: Sprite imports', function () {
  return React.createElement(Sprite, null);
});
//# sourceMappingURL=storybook-stories.js.map