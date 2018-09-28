function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var DISPLAY_NAME = 'SLDSSplitViewListItemWithContent';
var propsTypes = {
  /**
   * **Assistive text for accessibility**
   * * `unreadItem`: The unread indicator.
   */
  assistiveText: PropTypes.shape({
    unreadItem: PropTypes.string
  }),

  /**
   * Item to be displayed
   */
  item: PropTypes.object.isRequired,

  /**
   * Allows multiple item to be selection
   */
  multiple: PropTypes.bool,

  /**
   * Shows the item as `focused`.
   */
  isFocused: PropTypes.bool.isRequired,

  /**
   * Shows the item as `selected`.
   */
  isSelected: PropTypes.bool.isRequired,

  /**
   * Shows the item as `unread`.
   */
  isUnread: PropTypes.bool,

  /**
   * **Event Callbacks**
   * * `onClick`: Called when the item is clicked.
   * * * Event
   * * * Meta data
   * * * * `item`: The original item.
   * * * * `isSelected`: Is the item selected.
   * * * * `isUnread`: Is the item unread.
   */
  events: PropTypes.shape({
    onClick: PropTypes.func.isRequired
  }),

  /**
   * Reference to the list item component
   */
  listItemRef: PropTypes.func
};
var defaultProps = {
  assistiveText: {
    unreadItem: 'Unread Item'
  },
  events: {}
};
/**
 * HOC that wraps the list item content with selection and unread functionality.
 * @param ListItemContent {node} A React component
 * @returns {ListItemWithContent} A React component
 */

var listItemWithContent = function listItemWithContent(ListItemContent) {
  var ListItemWithContent =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ListItemWithContent, _React$Component);

    function ListItemWithContent() {
      _classCallCheck(this, ListItemWithContent);

      return _possibleConstructorReturn(this, (ListItemWithContent.__proto__ || Object.getPrototypeOf(ListItemWithContent)).apply(this, arguments));
    }

    _createClass(ListItemWithContent, [{
      key: "onClick",
      value: function onClick(event) {
        this.props.events.onClick(event, {
          item: this.props.item,
          isSelected: this.props.isSelected,
          isUnread: this.props.isUnread
        });
      }
    }, {
      key: "unread",
      value: function unread() {
        return this.props.isUnread ? React.createElement("abbr", {
          className: "slds-indicator_unread",
          title: this.props.assistiveText.unreadItem,
          "aria-label": this.props.assistiveText.unreadItem
        }, React.createElement("span", {
          className: "slds-assistive-text"
        }, "\u25CF")) : null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        return React.createElement("li", {
          className: classNames('slds-split-view__list-item', {
            'slds-is-unread': this.props.isUnread
          }),
          role: "presentation"
        }, React.createElement("a", {
          className: "slds-split-view__list-item-action slds-grow slds-has-flexi-truncate",
          role: "option",
          ref: this.props.listItemRef,
          "aria-selected": this.props.multiple ? !!this.props.isSelected : this.props.isSelected,
          tabIndex: this.props.isFocused ? 0 : -1,
          href: "javascript:void(0);" // eslint-disable-line no-script-url
          ,
          onClick: function onClick(e) {
            return _this.onClick(e);
          }
        }, this.unread(), React.createElement(ListItemContent, this.props)));
      }
    }]);

    return ListItemWithContent;
  }(React.Component);

  Object.defineProperty(ListItemWithContent, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "".concat(DISPLAY_NAME, "(").concat(ListItemContent.displayName || ListItemContent.name || 'Component', ")")
  });
  Object.defineProperty(ListItemWithContent, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: propsTypes
  });
  Object.defineProperty(ListItemWithContent, "defaultProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: defaultProps
  });
  return ListItemWithContent;
};

export default listItemWithContent;
//# sourceMappingURL=list-item-with-content.js.map