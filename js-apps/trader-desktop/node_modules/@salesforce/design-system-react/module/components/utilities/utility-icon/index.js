function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import Svg from './svg';
import SLDS_ICONS_UTILITY from '../../../icons/utility';
import SLDS_ICONS_ACTION from '../../../icons/action';
import SLDS_ICONS_CUSTOM from '../../../icons/custom';
import SLDS_ICONS_DOCTYPE from '../../../icons/doctype';
import SLDS_ICONS_STANDARD from '../../../icons/standard';
/*
 * If inline icons are present and icon bundle imports are not just an empty object, then inline icons will be used instead of external icons that require HTTP access.
 */

var UtilityIcon = function UtilityIcon(_ref, context) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      assistiveText = _ref.assistiveText,
      category = _ref.category,
      icon = _ref.icon,
      path = _ref.path,
      rest = _objectWithoutProperties(_ref, ["name", "assistiveText", "category", "icon", "path"]);

  checkProps('UtilityIcon', {
    name: name,
    category: category,
    path: path,
    context: context
  });
  var inlineIcons = {
    action: SLDS_ICONS_ACTION,
    custom: SLDS_ICONS_CUSTOM,
    doctype: SLDS_ICONS_DOCTYPE,
    standard: SLDS_ICONS_STANDARD,
    utility: SLDS_ICONS_UTILITY
  };
  var inlineData;

  if (icon) {
    // Use SVG data passed in with `icon` prop
    inlineData = icon;
  } else if (Object.keys(inlineIcons[category]).length) {
    // Use inline icon data if it exists. ENV variables will have to set to allow this.
    inlineData = inlineIcons[category][name.toLowerCase()];
    inlineData.viewBox = inlineIcons[category].viewBox;
  }

  var modifiedPath;

  if (path) {
    // Use `path` prop of Icon if present
    modifiedPath = path;
  } else if (context["".concat(category, "Sprite")]) {
    // Use category sprite file from IconSettings if present
    modifiedPath = "".concat(context["".concat(category, "Sprite")], "#").concat(name);
  } else {
    // Otherwise, use external URLs for icons
    modifiedPath = context.iconPath && "".concat(context.iconPath, "/").concat(category, "-sprite/svg/symbols.svg#").concat(name);
  }

  return inlineData ? React.createElement(Svg, _extends({
    data: inlineData,
    name: name
  }, rest)) : React.createElement("svg", rest, React.createElement("use", {
    xlinkHref: modifiedPath
  }));
};

UtilityIcon.displayName = 'UtilityIcon';
UtilityIcon.propTypes = {
  assistiveText: PropTypes.string,
  category: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),

  /**
   * An SVG object to use instead of name / category, look in `design-system-react/icons` for examples
   */
  icon: PropTypes.object,

  /**
   * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to reference icon names.
   */
  name: PropTypes.string,

  /**
   * Path to the icon. This will override any global icon settings.
   */
  path: PropTypes.string
};
UtilityIcon.defaultProps = {
  category: 'utility'
};
UtilityIcon.contextTypes = {
  iconPath: PropTypes.string,
  actionSprite: PropTypes.string,
  customSprite: PropTypes.string,
  doctypeSprite: PropTypes.string,
  standardSprite: PropTypes.string,
  utilitySprite: PropTypes.string
};
export default UtilityIcon;
//# sourceMappingURL=index.js.map