function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
var displayName = 'PageHeaderTitle';
var propTypes = {
  /**
   * Sets whether the title will truncate its content responsively.
   */
  truncate: PropTypes.bool,

  /**
   * Sets the vertical alignment on the title
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),

  /**
   * The title string (required)
   */
  title: PropTypes.string.isRequired,

  /**
   * Optional class name
   */
  className: PropTypes.string
};
var defaultProps = {
  truncate: true,
  align: 'middle',
  title: 'Page Header Title',
  className: ''
};

var Title =
/*#__PURE__*/
function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "_getClassNames",
    // eslint-disable-next-line class-methods-use-this
    value: function _getClassNames(truncate, align, className) {
      return classnames('slds-page-header__title slds-m-right--small', className, _defineProperty({
        'slds-truncate': truncate
      }, "slds-align-".concat(align), align));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          truncate = _props.truncate,
          align = _props.align,
          className = _props.className;

      var classes = this._getClassNames(truncate, align, className);

      return React.createElement("h1", {
        className: classes,
        title: title
      }, title, children);
    }
  }]);

  return Title;
}(Component);

Title.displayName = displayName;
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
//# sourceMappingURL=title.js.map