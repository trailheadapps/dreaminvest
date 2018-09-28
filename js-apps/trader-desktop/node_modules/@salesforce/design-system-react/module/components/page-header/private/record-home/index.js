/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import DetailRow from '../detail-row';
import MediaObject from '../../../media-object';
var displayName = 'PageHeaderRecordHome';
var propTypes = {
  /**
   * Content to appear on the right hand side of the page header
   */
  contentRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * An array of detail blocks
   */
  details: PropTypes.array,

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
   * Title node passed by PageHeader
   */
  title: PropTypes.node
};

var RecordHome = function RecordHome(props) {
  return React.createElement("div", null, React.createElement("div", {
    className: "slds-grid"
  }, React.createElement("div", {
    className: "slds-col slds-has-flexi-truncate"
  }, React.createElement(MediaObject, {
    body: React.createElement("div", null, props.label, props.title, props.info),
    className: "slds-no-space slds-grow",
    figure: props.icon
  })), React.createElement("div", {
    className: "slds-col slds-no-flex slds-grid slds-align-top"
  }, props.contentRight)), React.createElement(DetailRow, {
    details: props.details
  }));
};

RecordHome.displayName = displayName;
RecordHome.propTypes = propTypes;
export default RecordHome;
//# sourceMappingURL=index.js.map