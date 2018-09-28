function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { BUTTON_STATEFUL } from '../../../utilities/constants';
import ButtonStateful from '../../button-stateful';

var getButtonStateful = function getButtonStateful(props) {
  return React.createElement(ButtonStateful, _extends({}, props, {
    onClick: action('click')
  }));
};

storiesOf(BUTTON_STATEFUL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getButtonStateful();
}).add('Disabled', function () {
  return getButtonStateful({
    disabled: true
  });
}).add('Icon', function () {
  return getButtonStateful({
    variant: 'icon',
    label: 'Neutral Icon',
    iconName: 'check',
    onFocus: action('hover'),
    onMouseEnter: function onMouseEnter(e) {
      console.log('target is ', e.target);
    }
  });
});
//# sourceMappingURL=storybook-stories.js.map