function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import DetailBlock from './detail-block';
var displayName = 'PageHeaderDetailRow';
var propTypes = {
  children: PropTypes.node,

  /**
   * Optional class name
   */
  className: PropTypes.string,

  /**
   * An array of detail blocks
   */
  details: PropTypes.array
};
var defaultProps = {};

var DetailRow =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailRow, _Component);

  function DetailRow() {
    _classCallCheck(this, DetailRow);

    return _possibleConstructorReturn(this, (DetailRow.__proto__ || Object.getPrototypeOf(DetailRow)).apply(this, arguments));
  }

  _createClass(DetailRow, [{
    key: "_getClassNames",
    // eslint-disable-next-line class-methods-use-this
    value: function _getClassNames(className) {
      return classnames('slds-grid slds-page-header__detail-row', className);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          details = _props.details;

      var classes = this._getClassNames(className);
      /**
       * Render the deets
       */


      var renderDetails = function renderDetails() {
        if (children !== undefined) {
          return children;
        }

        return details.map(function (detail, i) {
          var key = "PageHeader.detailBlock.".concat(i);
          return React.createElement(DetailBlock, {
            key: key,
            flavor: detail.flavor,
            label: detail.label,
            content: detail.content,
            truncate: detail.truncate
          });
        });
      };

      return React.createElement("ul", {
        className: classes
      }, renderDetails());
    }
  }]);

  return DetailRow;
}(Component);

DetailRow.displayName = displayName;
DetailRow.propTypes = propTypes;
DetailRow.defaultProps = defaultProps;
export default DetailRow;
//# sourceMappingURL=detail-row.js.map