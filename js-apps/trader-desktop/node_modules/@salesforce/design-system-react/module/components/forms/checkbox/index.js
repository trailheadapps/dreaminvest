function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react'; // Alias

import Checkbox from '../../checkbox';

var OldCheckbox = function OldCheckbox(props) {
  return React.createElement(Checkbox, _extends({
    oldEventParameterOrder: true
  }, props));
};

export default OldCheckbox;
//# sourceMappingURL=index.js.map