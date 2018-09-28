import React from 'react';
import { storiesOf } from '@storybook/react';
import { SLIDER } from '../../../utilities/constants';
import Base from '../__examples__/base';
import Disabled from '../__examples__/disabled';
import Error from '../__examples__/error';
import Vertical from '../__examples__/vertical';
import SizesExtraSmall from '../__examples__/sizes-x-small';
import SizesSmall from '../__examples__/sizes-small';
import SizesMedium from '../__examples__/sizes-medium';
import SizesLarge from '../__examples__/sizes-large';
storiesOf(SLIDER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Slider', function () {
  return React.createElement(Base, null);
}).add('Disabled', function () {
  return React.createElement(Disabled, null);
}).add('Error', function () {
  return React.createElement(Error, null);
}).add('Vertical', function () {
  return React.createElement(Vertical, null);
}).add('Size: X-Small', function () {
  return React.createElement(SizesExtraSmall, null);
}).add('Size: Small', function () {
  return React.createElement(SizesSmall, null);
}).add('Size: Medium', function () {
  return React.createElement(SizesMedium, null);
}).add('Size: Large', function () {
  return React.createElement(SizesLarge, null);
});
//# sourceMappingURL=storybook-stories.js.map