/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
var displayName = 'PageHeaderInfo';
var propTypes = {
  /**
   * Contents of info section
   */
  children: PropTypes.node,

  /**
   * Optional class name
   */
  className: PropTypes.string
};

var Info = function Info(props) {
  return React.createElement("p", {
    className: classnames('slds-page-header__info', props.className)
  }, props.children);
};

Info.displayName = displayName;
Info.propTypes = propTypes;
export default Info;
//# sourceMappingURL=info.js.map