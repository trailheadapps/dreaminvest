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

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PopoverTooltip from '../../popover-tooltip';
var displayName = 'PageHeaderDetailRow';
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.string,

  /**
   * label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The content property can be a string or a React element
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Sets whether the fields truncate
   */
  truncate: PropTypes.bool,
  flavor: PropTypes.string
};
var defaultProps = {
  label: '',
  content: ''
};

var DetailBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailBlock, _Component);

  function DetailBlock(props) {
    var _this;

    _classCallCheck(this, DetailBlock);

    _this = _possibleConstructorReturn(this, (DetailBlock.__proto__ || Object.getPrototypeOf(DetailBlock)).call(this, props));
    _this.state = {
      showTooltip: false
    };
    return _this;
  }

  _createClass(DetailBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._renderFieldTruncation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.content !== prevProps.content) {
        this._renderFieldTruncation();
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "_getClassNames",
    value: function _getClassNames(className, flavor) {
      return classnames('slds-page-header__detail-block', className, _defineProperty({}, "slds-size--".concat(flavor), flavor));
    }
  }, {
    key: "_renderFieldTruncation",
    value: function _renderFieldTruncation() {
      var fieldContent = this.fieldContentRef;
      var isTruncated = fieldContent && fieldContent.scrollWidth > fieldContent.offsetWidth;

      if (isTruncated) {
        this.setState({
          showTooltip: true
        });
      } else {
        this.setState({
          showTooltip: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          content = _props.content,
          flavor = _props.flavor,
          label = _props.label,
          truncate = _props.truncate;

      var classes = this._getClassNames(className, flavor);
      /**
       * Render the label
       */


      var renderLabel = function renderLabel() {
        var type = _typeof(label);

        if (type === 'string') {
          var labelClasses = classnames('slds-text-title', {
            'slds-truncate': truncate
          });
          return React.createElement("p", {
            className: labelClasses,
            title: label
          }, label);
        }

        return label;
      };
      /**
       * Render the content
       */


      var renderContent = function renderContent() {
        var type = _typeof(content);

        if (type === 'string') {
          var labelClasses = classnames('slds-text-body--regular', {
            'slds-truncate': truncate
          });
          return React.createElement("p", {
            ref: function ref(field) {
              _this2.fieldContentRef = field;
            },
            className: labelClasses,
            content: content
          }, content);
        }

        return content;
      };
      /**
       * Render the content with a tooltip (for content that truncates)
       */


      var renderContentWithTooltip = function renderContentWithTooltip() {
        var labelClasses = classnames('slds-text-body--regular', {
          'slds-truncate': truncate
        });
        return React.createElement(PopoverTooltip, {
          align: "top",
          content: content
        }, React.createElement("p", {
          tabIndex: "0",
          className: labelClasses
        }, content));
      };

      return React.createElement("li", {
        className: classes
      }, renderLabel(), this.state.showTooltip ? renderContentWithTooltip() : renderContent());
    }
  }]);

  return DetailBlock;
}(Component);

DetailBlock.displayName = displayName;
DetailBlock.propTypes = propTypes;
DetailBlock.defaultProps = defaultProps;
export default DetailBlock;
//# sourceMappingURL=detail-block.js.map