function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Header Button Component
// ## Dependencies
// ### React
import React from 'react'; // ### Button

import Button from '../button'; // ## Constants

import { GLOBAL_HEADER_TOOL } from '../../utilities/constants';
/**
 * A helper component that renders a Button in the tools area of the Global Header. Currently defaults to a bare icon, but this can be overriden if text-based buttons are required.
 */

var GlobalHeaderButton = function GlobalHeaderButton(props) {
  return React.createElement("li", null, React.createElement(Button, _extends({
    iconVariant: "global-header",
    variant: "icon"
  }, props)));
};

GlobalHeaderButton.displayName = GLOBAL_HEADER_TOOL;
export default GlobalHeaderButton;
//# sourceMappingURL=button.js.map