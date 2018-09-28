function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { BUTTON } from '../../../utilities/constants';
import Button from '../../button';

var getButton = function getButton(props) {
  return React.createElement(Button, _extends({}, props, {
    onClick: action('click')
  }));
};

var getIconButton = function getIconButton(props) {
  return getButton(_objectSpread({
    variant: 'icon'
  }, props));
};

storiesOf(BUTTON, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getButton({
    label: 'Base',
    variant: 'base'
  });
}).add('Neutral', function () {
  return getButton({
    label: 'Neutral'
  });
}).add('Neutral with id', function () {
  return getButton({
    label: 'Neutral',
    id: 'custom-id'
  });
}).add('Neutral Icon', function () {
  return getButton({
    label: 'Neutral Icon',
    iconCategory: 'utility',
    iconName: 'download',
    iconPosition: 'left',
    onFocus: action('focus'),
    onKeyDown: action('keyDown')
  });
}).add('Disabled', function () {
  return getButton({
    label: 'Disabled',
    disabled: true
  });
}).add('Icon large', function () {
  return getIconButton({
    assistiveText: 'Icon',
    iconSize: 'large',
    iconCategory: 'utility',
    iconName: 'answer',
    title: 'chat'
  });
}).add('Icon with external path', function () {
  return getIconButton({
    assistiveText: 'Icon',
    iconSize: 'large',
    iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
    title: 'announcement'
  });
}).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium slds-hint-parent",
    style: {
      backgroundColor: '#16325c'
    }
  }, getStory());
}).add('Icon Container Small', function () {
  return getIconButton({
    assistiveText: 'Icon border container small',
    iconCategory: 'utility',
    iconName: 'settings',
    iconSize: 'large',
    iconVariant: 'border',
    inverse: true
  });
}).add('Dropdown Icon inverse', function () {
  return getIconButton({
    'aria-haspopup': true,
    assistiveText: 'Dropdown Icon inverse',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    inverse: true
  });
}).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-hint-parent",
    style: {
      backgroundColor: '#16325c'
    }
  }, getStory());
}).add('Small Icon Hint inverse', function () {
  return getIconButton({
    assistiveTest: 'Hint',
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border',
    iconSize: 'small',
    hint: true,
    inverse: true
  });
});
//# sourceMappingURL=storybook-stories.js.map