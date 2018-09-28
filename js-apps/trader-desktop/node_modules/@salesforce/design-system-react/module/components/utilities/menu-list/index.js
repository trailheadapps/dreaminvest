function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # List Component
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ## Children

import ListItem from './item'; // ## Constants

import { LIST } from '../../../utilities/constants';
/**
 * Component description.
 */

var List = createReactClass({
  displayName: LIST,
  propTypes: {
    /**
     * Determines whether or not to show a checkmark for selected items.
     */
    checkmark: PropTypes.bool,

    /**
     * CSS classes to be added to `<ul />`.
     */
    className: PropTypes.string,

    /**
     * Used internally to determine the id that will be used for list items.
     */
    getListItemId: PropTypes.func,

    /**
     * Used internally to pass references to the individual menu items back up for focusing / scrolling.
     */
    itemRefs: PropTypes.func,

    /**
     * If provided, this function will be used to render the contents of each menu item.
     */
    itemRenderer: PropTypes.func,

    /**
     * Sets the height of the list based on the numeber of items.
     */
    length: PropTypes.oneOf([null, '5', '7', '10']),

    /**
     * Triggered when a list item is selected (via mouse or keyboard).
     */
    onSelect: PropTypes.func,

    /**
     * An array of items to render in the list.
     */
    options: PropTypes.array,

    /**
     * The index of the currently selected item in the list.
     */
    selectedIndex: PropTypes.number,

    /**
     * The id of the element which triggered this list (in a menu context).
     */
    triggerId: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      length: '5',
      options: [],
      selectedIndex: -1
    };
  },
  render: function render() {
    var _this = this;

    var lengthClassName;

    if (this.props.length) {
      lengthClassName = "slds-dropdown--length-".concat(this.props.length);
    }

    return React.createElement("ul", {
      "aria-labelledby": this.props.triggerId,
      className: classNames('dropdown__list', lengthClassName, this.props.className),
      role: "menu"
    }, this.props.options.map(function (option, index) {
      var id = _this.props.getListItemId(index);

      var isSingleSelected = index === _this.props.selectedIndex;
      var isMultipleSelected = !!_this.props.selectedIndices && _this.props.selectedIndices.indexOf(index) !== -1;
      return React.createElement(ListItem, _extends({}, option, {
        "aria-disabled": option.disabled,
        checkmark: _this.props.checkmark && (isSingleSelected || isMultipleSelected),
        data: option,
        id: id,
        index: index,
        isSelected: isSingleSelected || isMultipleSelected,
        key: "".concat(id, "-").concat(option.value),
        labelRenderer: _this.props.itemRenderer,
        onSelect: _this.props.onSelect,
        ref: function ref(listItem) {
          return _this.props.itemRefs(listItem, index);
        }
      }));
    }));
  }
});
export default List;
//# sourceMappingURL=index.js.map