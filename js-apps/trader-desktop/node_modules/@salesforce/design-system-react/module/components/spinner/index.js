function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Spinner Component --- SLDS for React
// Implements the [Spinner design pattern - 2.1.0-beta.3 (204)](https://latest-204.lightningdesignsystem.com/components/spinners) in React.
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ## Constants

import { SPINNER } from '../../utilities/constants'; // ### Prop Types

var PROP_TYPES = {
  /**
   * Assistive text that is read out loud to screen readers.
   */
  assistiveText: PropTypes.string,

  /**
   * Custom css classes applied to Spinner container
   */
  containerClassName: PropTypes.string,

  /**
   * Unique html id placed on div with role="status".
   */
  id: PropTypes.string,

  /**
   * Determines if spinner is inside input field
   */
  isInput: PropTypes.bool,

  /**
   * Determines the size of the spinner
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * Determines the color of the spinner: `base` is gray, `brand` is blue, and `inverse` is white.
   */
  variant: PropTypes.oneOf(['base', 'brand', 'inverse'])
};
var DEFAULT_PROPS = {
  assistiveText: 'Loading...',
  size: 'medium',
  variant: 'base'
}; // ## Spinner

var Spinner = function Spinner(props) {
  var assistiveText = props.assistiveText,
      containerClassName = props.containerClassName,
      id = props.id,
      isInput = props.isInput,
      size = props.size,
      variant = props.variant;
  var spinnerClassName = classNames('slds-spinner', _defineProperty({
    'slds-input__spinner': isInput,
    'slds-spinner_brand': variant === 'brand',
    'slds-spinner_inverse': variant === 'inverse'
  }, "slds-spinner_".concat(size), size));
  return React.createElement("div", {
    className: classNames(containerClassName, 'slds-spinner_container')
  }, React.createElement("div", {
    "aria-hidden": "false",
    className: spinnerClassName,
    id: id,
    role: "status"
  }, assistiveText && React.createElement("span", {
    className: "slds-assistive-text"
  }, assistiveText), React.createElement("div", {
    className: "slds-spinner__dot-a"
  }), React.createElement("div", {
    className: "slds-spinner__dot-b"
  })));
};

Spinner.displayName = SPINNER;
Spinner.propTypes = PROP_TYPES;
Spinner.defaultProps = DEFAULT_PROPS;
export default Spinner;
//# sourceMappingURL=index.js.map