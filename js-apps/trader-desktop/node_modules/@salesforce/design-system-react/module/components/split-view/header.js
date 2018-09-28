function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import classNames from 'classnames';
import PageHeader from '../page-header';
import { SPLIT_VIEW_HEADER } from '../../utilities/constants';
var propTypes = {};
var defaultProps = {};
/**
 * The Split View Header takes the same properties as the [PageHeader](https://react.lightningdesignsystem.com/components/page-headers/) component.
 */

var SplitViewHeader = function SplitViewHeader(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(PageHeader, _extends({
    className: classNames('slds-split-view__header slds-has-bottom-magnet', className)
  }, rest));
};

SplitViewHeader.displayName = SPLIT_VIEW_HEADER;
SplitViewHeader.propTypes = propTypes;
SplitViewHeader.defaultProps = defaultProps;
export default SplitViewHeader;
//# sourceMappingURL=header.js.map