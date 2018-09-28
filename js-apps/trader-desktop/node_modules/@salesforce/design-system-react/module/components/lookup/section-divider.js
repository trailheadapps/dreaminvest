/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
var displayName = 'LookupDefaultSectionDivider';
var propTypes = {
  data: PropTypes.object
};

var DefaultSectionDivider = function DefaultSectionDivider(props) {
  return React.createElement("li", {
    className: "slds-p-around--x-small slds-lookup__divider",
    tabIndex: "-1"
  }, React.createElement("span", {
    className: "slds-m-left--x-small"
  }, React.createElement("strong", null, props.data.label)));
};

DefaultSectionDivider.displayName = displayName;
DefaultSectionDivider.propTypes = propTypes;
export default DefaultSectionDivider;
//# sourceMappingURL=section-divider.js.map