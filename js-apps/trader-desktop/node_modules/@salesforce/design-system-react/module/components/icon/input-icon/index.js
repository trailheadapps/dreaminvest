function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ## Children

import UtilityIcon from '../../utilities/utility-icon';
import Button from '../../button'; // ## Constants

import { ICON_INPUT } from '../../../utilities/constants';
/**
 * A wrapper for icons that will be rendered inside of an Input
 *
 * If the `onClick` function prop is provided, the `design-system-react/components/button` component is used.
 * If not, the icon will be an instance of `design-system-react/components/utilities/utility-icon`.
 * Checkout out the appropriate component to see what props can be passed along via the `{...props}` rest operator
 */

var InputIcon = function InputIcon(props) {
  var category = props.category,
      iconPosition = props.iconPosition,
      name = props.name,
      path = props.path,
      onClick = props.onClick,
      variant = props.variant,
      rest = _objectWithoutProperties(props, ["category", "iconPosition", "name", "path", "onClick", "variant"]); // need to pass click event up on SVG


  var variants = {
    combobox: React.createElement("span", {
      className: "slds-icon_container slds-input__icon slds-input__icon_right"
    }, React.createElement(UtilityIcon, _extends({
      "aria-hidden": true,
      category: category,
      className: classNames('slds-icon slds-icon_x-small slds-icon-text-default'),
      name: name,
      path: path
    }, rest))),
    base: React.createElement(UtilityIcon, _extends({
      "aria-hidden": true,
      category: category,
      className: classNames('slds-input__icon slds-icon-text-default', _defineProperty({}, "slds-input__icon--".concat(iconPosition), iconPosition)),
      name: name,
      path: path
    }, rest))
  };
  return isFunction(onClick) ? React.createElement(Button, _extends({
    className: classNames('slds-input__icon', _defineProperty({}, "slds-input__icon_".concat(iconPosition), iconPosition)),
    iconCategory: category,
    iconName: name,
    iconPath: path,
    onClick: onClick,
    variant: "icon"
  }, rest)) : variants[variant];
};

InputIcon.displayName = ICON_INPUT;
InputIcon.propTypes = {
  /**
   * Icon category from [lightningdesignsystem.com/icons/](https://www.lightningdesignsystem.com/icons/)
   */
  category: PropTypes.string,

  /**
   * This is only needed if an input contains two icons, the Input component handles this prop for you.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to reference icon names.
   */
  name: PropTypes.string,

  /**
   * Path to the icon. This will override any global icon settings.
   */
  path: PropTypes.string,

  /**
   * This event fires when the icon is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Changes styles of the InputIcon.
   */
  variant: PropTypes.oneOf(['base', 'combobox'])
};
InputIcon.defaultProps = {
  category: 'utility',
  variant: 'base'
};
export default InputIcon;
//# sourceMappingURL=index.js.map