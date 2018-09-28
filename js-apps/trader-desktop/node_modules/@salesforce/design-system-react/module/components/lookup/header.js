function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Lookup design pattern](https://latest-204.lightningdesignsystem.com/components/lookups) in React.
// Based on SLDS v2.1.0-dev
import React from 'react';
import Icon from '../icon';
import EventUtil from '../../utilities/event';
var displayName = 'LookupDefaultHeader';
var propTypes = {};
var defaultProps = {};

var DefaultHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DefaultHeader, _React$Component);

  function DefaultHeader() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DefaultHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DefaultHeader.__proto__ || Object.getPrototypeOf(DefaultHeader)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.onClose) {
          _this.props.onClose();
        }
      }
    }), _temp));
  }

  _createClass(DefaultHeader, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isActive !== this.props.isActive && nextProps.isActive === true) {
        this.props.setFocus('searchRecords');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = 'slds-lookup__item-action slds-lookup__item-action--label';
      if (this.props.isActive) className += ' slds-theme--shade';
      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        React.createElement("div", {
          className: "js-slds-lookup__item",
          onMouseDown: EventUtil.trapImmediate,
          onClick: this.handleClick
        }, React.createElement("a", {
          id: "searchRecords",
          href: "javascript:void(0);",
          className: className
        }, React.createElement("span", {
          className: "lookup__item-action-label"
        }, React.createElement(Icon, {
          name: "search",
          category: "utility",
          size: "x-small",
          className: "slds-icon-text-default"
        }), React.createElement("span", {
          className: "slds-truncate"
        }, this.props.searchTerm))))
      );
    }
  }]);

  return DefaultHeader;
}(React.Component);

DefaultHeader.displayName = displayName;
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
export default DefaultHeader;
//# sourceMappingURL=header.js.map