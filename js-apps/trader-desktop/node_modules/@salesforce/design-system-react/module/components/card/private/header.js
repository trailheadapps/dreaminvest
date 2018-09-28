function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classnames from 'classnames'; // ## Children

import MediaObject from '../../media-object';
import { CARD_HEADER } from '../../../utilities/constants'; // Allow for predicatable DOM queries with `querySelectorAll(cssClasses.base)`

var idSuffixes = {
  headerActions: '__header-actions',
  heading: '__heading',
  filter: '__filter-input'
};

var renderFilter = function renderFilter(filter, id) {
  // allow id to be set by custom header component passed in
  var clonedFilter = React.cloneElement(filter, {
    id: filter.props.id || id
  });
  return React.createElement("div", {
    className: "slds-input-has-icon slds-input-has-icon--left slds-size--1-of-3"
  }, clonedFilter);
};

renderFilter.displayName = 'renderFilter';
/**
 * Card Header is a private component and is not meant to be imported or used for Card's `header` prop. It just happens to have the same file name.
 */

var CardHeader = function CardHeader(props) {
  var title = null;

  if (typeof props.heading === 'string' || props.heading instanceof String) {
    title = props.heading;
  }

  var heading = React.createElement("h2", {
    id: props.headingId,
    className: "slds-text-heading--small slds-truncate",
    title: title
  }, props.heading);
  var Header;

  if (props.header) {
    Header = React.cloneElement(props.header, _objectSpread({
      figure: props.icon,
      body: heading,
      verticalCenter: true,
      canTruncate: true
    }, props.header.props));
  } else {
    Header = React.createElement(MediaObject, {
      figure: props.icon,
      body: heading,
      verticalCenter: true,
      canTruncate: true
    });
  }

  var hasFilter = props.filter ? true : null;
  return React.createElement("div", {
    className: classnames('slds-card__header', 'slds-grid')
  }, Header, props.filter ? renderFilter(props.filter, props.filterId) : null, React.createElement("div", {
    id: props.headerActionsId,
    className: classnames('slds-no-flex', {
      'slds-size--1-of-3': hasFilter,
      'slds-text-align--right': hasFilter
    })
  }, props.headerActions));
}; // ### Display Name
// Always use the canonical component name as the React display name.


CardHeader.displayName = CARD_HEADER; // ### Prop Types

CardHeader.propTypes = {
  /**
   * Adds a filter input to the card header
   */
  filter: PropTypes.node,

  /**
   * Set the HTML `id` of the card filter.
   */
  filterId: PropTypes.string,

  /**
   * Allows a custom header (the media object with the icon in the first column). `icon`, `heading` and other props are passed in the media object from Card. Use `design-system-react/components/media-object` to create your own.
   */
  header: PropTypes.node,

  /**
   * Actions performed on selected items or that relate to the entire group of items such as "Add Item.""
   */
  headerActions: PropTypes.node,

  /**
   * Set the HTML `id` of the card header actions.
   */
  headerActionsId: PropTypes.string,

  /**
   * The heading is the name of the related item group.
   */
  heading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,

  /**
   * Set the HTML `id` of the card heading.
   */
  headingId: PropTypes.string,

  /**
   * Icon associated with grouped items
   */
  icon: PropTypes.node
};
export default CardHeader;
export { idSuffixes };
//# sourceMappingURL=header.js.map