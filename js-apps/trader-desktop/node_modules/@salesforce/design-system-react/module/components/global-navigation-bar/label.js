function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # GlobalNavigationBar Label Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ## Constants

import { GLOBAL_NAVIGATION_BAR_LABEL } from '../../utilities/constants';
/**
 * Wraps text in the proper markup and removes link styling to support use in the GlobalNavigationBar.
 */

var GlobalNavigationBarLabel = function GlobalNavigationBarLabel(props) {
  // Separate props we care about in order to pass others along passively to the `span` tag
  var className = props.className,
      dividerPosition = props.dividerPosition,
      id = props.id,
      label = props.label;
  return React.createElement("li", {
    className: "slds-context-bar__item slds-no-hover"
  }, React.createElement("span", {
    id: id // inline style override
    ,
    style: {
      color: '#16325c'
    },
    className: classNames('slds-context-bar__label-action', _defineProperty({}, "slds-context-bar__item--divider-".concat(dividerPosition), dividerPosition), className)
  }, React.createElement("span", {
    className: "slds-truncate"
  }, label)));
};

GlobalNavigationBarLabel.displayName = GLOBAL_NAVIGATION_BAR_LABEL; // ### Prop Types

GlobalNavigationBarLabel.propTypes = {
  /**
   * Class names to be added to the `span` element
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Determines position of separating bar.
   */
  dividerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Id string applied to first <span> inside of <li>
   */
  id: PropTypes.string,

  /**
   * Text to show
   */
  label: PropTypes.string
};
export default GlobalNavigationBarLabel;
//# sourceMappingURL=label.js.map