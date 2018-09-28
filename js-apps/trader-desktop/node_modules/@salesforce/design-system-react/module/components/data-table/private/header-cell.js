function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ## Children

import Icon from '../../icon'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from '../column-check-props'; // ## Constants

import { DATA_TABLE_HEADER_CELL, DATA_TABLE_COLUMN } from '../../../utilities/constants';
/**
 * Used internally, renders each individual column heading.
 */

var DataTableHeaderCell = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: DATA_TABLE_HEADER_CELL,
  // ### Prop Types
  propTypes: {
    /**
     * Text for sort action on table column header
     *
     */
    assistiveTextForColumnSort: PropTypes.string,

    /**
     * Text announced once a column is sorted in ascending order
     */
    assistiveTextForColumnSortedAscending: PropTypes.string,

    /**
     * Text announced once a column is sorted in descending order
     */
    assistiveTextForColumnSortedDescending: PropTypes.string,
    id: PropTypes.string.isRequired,

    /**
     * Indicates if column is sorted.
     */
    isSorted: PropTypes.bool,

    /**
     * The column label.
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * The function to execute on sort.
     */
    onSort: PropTypes.func,

    /**
     * The property which corresponds to this column.
     */
    property: PropTypes.string,

    /**
     * Whether or not the column is sortable.
     */
    sortable: PropTypes.bool,

    /**
     * The current sort direction.
     */
    sortDirection: PropTypes.oneOf(['desc', 'asc']),

    /**
     * Width of column. This is required for advanced/fixed layout tables. Please provide units. (`rems` are recommended)
     */
    width: PropTypes.string
  },
  getInitialState: function getInitialState() {
    return {
      sortDirection: null
    };
  },
  componentDidMount: function componentDidMount() {
    checkProps(DATA_TABLE_COLUMN, this.props);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    // reset sort state when another column is sorted
    if (prevProps.isSorted === true && this.props.isSorted === false) {
      this.setState({
        sortDirection: null
      }); // eslint-disable-line react/no-did-update-set-state
    }
  },
  handleSort: function handleSort(e) {
    var oldSortDirection = this.props.sortDirection || this.state.sortDirection;
    var sortDirection = oldSortDirection === 'asc' ? 'desc' : 'asc';
    var data = {
      property: this.props.property,
      sortDirection: sortDirection
    };
    this.setState({
      sortDirection: sortDirection
    });

    if (isFunction(this.props.onSort)) {
      this.props.onSort(data, e);
    }
  },
  // ### Render
  render: function render() {
    var _classNames;

    var _props = this.props,
        isSorted = _props.isSorted,
        label = _props.label,
        sortable = _props.sortable,
        width = _props.width;

    var labelType = _typeof(label);

    var sortDirection = this.props.sortDirection || this.state.sortDirection;
    var expandedSortDirection = sortDirection === 'desc' ? 'descending' : 'ascending';
    var ariaSort = isSorted ? expandedSortDirection : 'none';
    var fixedLayoutSubRenders = {
      sortable: React.createElement("a", {
        href: "javascript:void(0)" // eslint-disable-line no-script-url
        ,
        className: "slds-th__action slds-text-link_reset",
        onClick: this.handleSort,
        role: "button",
        tabIndex: "0"
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.assistiveTextForColumnSort, ' '), React.createElement("span", {
        className: "slds-truncate",
        title: labelType === 'string' ? label : undefined
      }, label), React.createElement(Icon, {
        className: "slds-is-sortable__icon",
        category: "utility",
        name: sortDirection === 'desc' ? 'arrowdown' : 'arrowup',
        size: "x-small"
      }), sortDirection ? React.createElement("span", {
        className: "slds-assistive-text",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, sortDirection === 'asc' ? this.props.assistiveTextForColumnSortedAscending : this.props.assistiveTextForColumnSortedDescending) : null),
      notSortable: React.createElement("span", {
        className: "slds-p-horizontal_x-small",
        style: {
          display: 'flex'
        }
      }, React.createElement("span", {
        className: "slds-truncate",
        title: labelType === 'string' ? label : undefined
      }, label))
    };
    return React.createElement("th", {
      "aria-label": labelType === 'string' ? label : undefined,
      "aria-sort": ariaSort,
      className: classNames((_classNames = {
        'slds-is-sortable': sortable,
        'slds-is-sorted': isSorted
      }, _defineProperty(_classNames, "slds-is-sorted_".concat(sortDirection), sortDirection), _defineProperty(_classNames, 'slds-is-sorted_asc', isSorted && !sortDirection), _classNames), 'slds-text-title_caps'),
      scope: "col",
      style: {
        width: width ? {
          width: width
        } : null
      }
    }, this.props.fixedLayout ? fixedLayoutSubRenders[sortable ? 'sortable' : 'notSortable'] : React.createElement("div", {
      className: "slds-truncate",
      title: labelType === 'string' ? label : undefined
    }, label));
  }
});
export default DataTableHeaderCell;
//# sourceMappingURL=header-cell.js.map