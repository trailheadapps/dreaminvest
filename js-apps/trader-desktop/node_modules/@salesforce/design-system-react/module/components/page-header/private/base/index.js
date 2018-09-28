/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import MediaObject from '../../../media-object';
var displayName = 'PageHeaderBase';
var propTypes = {
  /**
   * Icon node passed by PageHeader
   */
  icon: PropTypes.node,

  /**
   * Title node passed by PageHeader
   */
  title: PropTypes.node,

  /**
   * Info node passed by PageHeader
   */
  info: PropTypes.node
};

var Base = function Base(props) {
  return React.createElement(MediaObject, {
    body: React.createElement("div", null, props.title, props.info),
    figure: props.icon,
    verticalCenter: true
  });
};

Base.displayName = displayName;
Base.propTypes = propTypes;
export default Base;
//# sourceMappingURL=index.js.map