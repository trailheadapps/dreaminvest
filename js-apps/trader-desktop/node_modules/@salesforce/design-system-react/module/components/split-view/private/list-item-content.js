/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
export var DISPLAY_NAME = 'SLDSSplitViewListItemContent';
var propTypes = {
  /**
   * **Item to be displayed**
   * * `label`: The main label displayed on the top left.
   * * `topRightText`: The text displayed on the top right.
   * * `bottomLeftText`: The text displayed on the bottom left.
   * * `bottomRightText`: The text displayed on the bottom right.
   */
  item: PropTypes.shape({
    label: PropTypes.string,
    topRightText: PropTypes.string,
    bottomLeftText: PropTypes.string,
    bottomRightText: PropTypes.string
  })
};
var defaultProps = {};

var SplitViewListItemContent = function SplitViewListItemContent(_ref) {
  var item = _ref.item;
  return React.createElement("div", null, React.createElement("div", {
    className: "slds-grid slds-wrap"
  }, React.createElement("span", {
    className: "slds-truncate slds-text-body_regular slds-text-color_default",
    title: item.label
  }, item.label), React.createElement("span", {
    className: "slds-truncate slds-col_bump-left",
    title: item.topRightText
  }, item.topRightText)), React.createElement("div", {
    className: "slds-grid slds-wrap"
  }, React.createElement("span", {
    className: "slds-truncate",
    title: item.bottomLeftText
  }, item.bottomLeftText), React.createElement("span", {
    className: "slds-truncate slds-col_bump-left",
    title: item.bottomLeftText
  }, item.bottomRightText)));
};

SplitViewListItemContent.displayName = DISPLAY_NAME;
SplitViewListItemContent.propTypes = propTypes;
SplitViewListItemContent.defaultProps = defaultProps;
export default SplitViewListItemContent;
//# sourceMappingURL=list-item-content.js.map