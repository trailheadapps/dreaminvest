/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import MediaObject from '../../../media-object';
var displayName = 'PageHeaderObjectHome';
var propTypes = {
  /**
   * Content to appear on the right hand side of the page header
   */
  contentRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Icon node passed by PageHeader
   */
  icon: PropTypes.node,

  /**
   * Info node passed by PageHeader
   */
  info: PropTypes.node,

  /**
   * Heading above title
   */
  label: PropTypes.node,

  /**
   * Nav content which appears in the upper right hand corner.
   */
  navRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Title node passed by PageHeader
   */
  title: PropTypes.node
};

var ObjectHome = function ObjectHome(props) {
  return React.createElement("div", null, React.createElement("div", {
    className: "slds-grid"
  }, React.createElement("div", {
    className: "slds-col slds-has-flexi-truncate"
  }, React.createElement(MediaObject, {
    body: React.createElement("div", null, props.label, props.title),
    className: "slds-no-space slds-grow",
    figure: props.icon
  })), React.createElement("div", {
    className: "slds-col slds-no-flex slds-grid slds-align-top slds-p-bottom--xx-small"
  }, props.navRight)), React.createElement("div", {
    className: "slds-grid"
  }, React.createElement("div", {
    className: "slds-col slds-align-bottom"
  }, props.info), React.createElement("div", {
    className: "slds-col slds-no-flex slds-grid slds-align-bottom"
  }, props.contentRight)));
};

ObjectHome.displayName = displayName;
ObjectHome.propTypes = propTypes;
export default ObjectHome;
//# sourceMappingURL=index.js.map