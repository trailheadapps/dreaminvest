function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import isBoolean from 'lodash.isboolean';
import ToggleButton, { TOGGLE_BUTTON_WIDTH } from './private/toggle-button';
import { SPLIT_VIEW } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `toggleButtonOpen`: The button used to open the split view.
   * * `toggleButtonClose`: The button used to close the split view.
   */
  assistiveText: PropTypes.shape({
    toggleButtonOpen: PropTypes.string,
    toggleButtonClose: PropTypes.string
  }),

  /**
   * HTML Id for the component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to the root `div` tag. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Sets the split view to be open or closed.
   */
  isOpen: PropTypes.bool,

  /**
   * Event Callbacks
   * * `onClose`: Triggered when the split view has closed.
   * * `onOpen`: Triggered when the split view has opened.
   */
  events: PropTypes.shape({
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }),

  /**
   * The React component that is rendered in the master section.
   * You need to pass in an array of elements in order for the scrolling to in the SplitViewList to work correctly.
   * React requires that you also supply a unique `key` for each element [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  master: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,

  /**
   * The width of the master section.
   */
  masterWidth: PropTypes.string,

  /**
   * The React component that is rendered in the detail section.
   */
  detail: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired
};
var defaultProps = {
  assistiveText: {
    toggleButtonOpen: 'Close split view',
    toggleButtonClose: 'Open split view'
  },
  events: {},
  masterWidth: '20rem'
};
/**
 * Split view is used to navigate between records in a list while staying on the same screen.
 */

var SplitView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SplitView, _React$Component);

  function SplitView(props) {
    var _this;

    _classCallCheck(this, SplitView);

    _this = _possibleConstructorReturn(this, (SplitView.__proto__ || Object.getPrototypeOf(SplitView)).call(this, props));
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  _createClass(SplitView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
      this.setIsOpen(this.props.isOpen);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setIsOpen(nextProps.isOpen);
      }
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getMasterViewId",
    value: function getMasterViewId() {
      return "master_view_".concat(this.getId());
    }
  }, {
    key: "setIsOpen",
    value: function setIsOpen(isOpen) {
      if (isBoolean(isOpen)) {
        this.setState({
          isOpen: isOpen
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      this.setIsOpen(!this.state.isOpen);

      if (this.state.isOpen && this.props.events.onClose) {
        this.props.events.onClose(event);
      } else if (!this.state.isOpen && this.props.events.onOpen) {
        this.props.events.onOpen(event);
      }
    }
  }, {
    key: "masterContent",
    value: function masterContent() {
      return this.state.isOpen ? React.createElement("article", {
        id: this.getMasterViewId(),
        className: "slds-split-view slds-grid slds-grid_vertical slds-grow slds-scrollable_none"
      }, this.props.master) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        id: this.getId(),
        className: classNames('slds-grid', this.props.className),
        style: {
          height: '100%'
        }
      }, React.createElement("div", {
        style: {
          maxWidth: this.state.isOpen ? this.props.masterWidth : '0'
        },
        className: classNames('slds-split-view_container', {
          'slds-is-open': this.state.isOpen
        }, {
          'slds-is-closed': !this.state.isOpen
        })
      }, React.createElement(ToggleButton, {
        assistiveText: this.props.assistiveText,
        ariaControls: this.getMasterViewId(),
        isOpen: this.state.isOpen,
        events: {
          onClick: function onClick(event) {
            return _this2.toggle(event);
          }
        }
      }), this.masterContent()), React.createElement("div", {
        style: {
          marginLeft: TOGGLE_BUTTON_WIDTH
        },
        className: "slds-grow slds-scrollable_y"
      }, this.props.detail));
    }
  }]);

  return SplitView;
}(React.Component);

Object.defineProperty(SplitView, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: SPLIT_VIEW
});
Object.defineProperty(SplitView, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: propTypes
});
Object.defineProperty(SplitView, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: defaultProps
});
export default SplitView;
//# sourceMappingURL=index.js.map