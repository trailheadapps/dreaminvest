function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Navigation Bar Button Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### Button

import Button from '../button'; // ## Constants

import { GLOBAL_NAVIGATION_BAR_BUTTON } from '../../utilities/constants';
/**
 * A helper component that renders a Button as an item in the Global Navigation Bar. All props are passed onto `Button` except `active` and `dividerPosition`.
 */

var GlobalNavigationButton = function GlobalNavigationButton(_ref) {
  var active = _ref.active,
      dividerPosition = _ref.dividerPosition,
      props = _objectWithoutProperties(_ref, ["active", "dividerPosition"]);

  return React.createElement("li", {
    className: classNames('slds-context-bar__item', _defineProperty({
      'slds-is-active': active
    }, "slds-context-bar__item--divider-".concat(dividerPosition), dividerPosition))
  }, React.createElement(Button, props));
};

GlobalNavigationButton.displayName = GLOBAL_NAVIGATION_BAR_BUTTON; // ### Prop Types

GlobalNavigationButton.propTypes = {
  /**
   * Whether the item is active or not.
   */
  active: PropTypes.bool,

  /**
   * Determines position of separating bar.
   */
  dividerPosition: PropTypes.oneOf(['left', 'right'])
}; // ### Default Props

GlobalNavigationButton.defaultProps = {
  className: 'slds-context-bar__label-action slds-text-body--regular',
  // This is a hack since buttons are not supported by Global Navigation
  // Bar and have different `font-size` and `line-height` than links or
  // dropdowns.
  style: {
    lineHeight: 'inherit'
  },
  variant: 'base'
};
export default GlobalNavigationButton;
//# sourceMappingURL=button.js.map