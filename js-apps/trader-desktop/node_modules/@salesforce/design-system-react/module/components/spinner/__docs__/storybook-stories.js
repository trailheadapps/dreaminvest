/* eslint-disable indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { SPINNER } from '../../../utilities/constants';
import Spinner from '../../spinner';

var getSpinner = function getSpinner(props) {
  return React.createElement(Spinner, props);
};

var inverseContainer = {
  backgroundColor: '#4bca81',
  position: 'absolute',
  width: '100%',
  height: '100%'
};
storiesOf(SPINNER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'base'
  });
}).add('Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'base'
  });
}).add('Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'base'
  });
}).add('Brand Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'brand'
  });
}).add('Brand Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'brand'
  });
}).add('Brand Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'brand',
    containerClassName: 'my-custom-classname'
  });
}).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium",
    style: inverseContainer
  }, getStory());
}).add('Inverse Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'inverse'
  });
}).add('Inverse Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'inverse'
  });
}).add('Inverse Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'inverse'
  });
});
//# sourceMappingURL=storybook-stories.js.map