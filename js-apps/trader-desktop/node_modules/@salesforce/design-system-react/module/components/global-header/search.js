function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Header Search Component
// ## Dependencies
// ### React
import React from 'react'; // ### Lookup

import Lookup from '../lookup'; // ## Constants

import { GLOBAL_HEADER_SEARCH } from '../../utilities/constants';
/**
 * The Global Header Search component is currently a Lookup. In the future this wrapper may provide additional presets or features.
 */

var GlobalHeaderSearch = function GlobalHeaderSearch(props) {
  return React.createElement("div", {
    className: "slds-global-header__item slds-global-header__item--search"
  }, React.createElement(Lookup, _extends({
    iconPosition: "left"
  }, props)));
};

GlobalHeaderSearch.displayName = GLOBAL_HEADER_SEARCH;
export default GlobalHeaderSearch;
//# sourceMappingURL=search.js.map