var _THEME_CLASSES;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Progress Ring design pattern](https://lightningdesignsystem.com/components/progress-ring/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PROGRESS_RING } from '../../utilities/constants';
import Icon from '../icon';
import ProgressRingShape from './private/ring-shape';
/**
 * The themes available for the progress ring
 */

export var THEME_OPTIONS = Object.freeze({
  WARNING: 'warning',
  EXPIRED: 'expired',
  COMPLETE: 'complete'
});
/**
 * The CSS classes associated with each theme
 */

var THEME_CLASSES = (_THEME_CLASSES = {}, _defineProperty(_THEME_CLASSES, THEME_OPTIONS.COMPLETE, 'slds-progress-ring_complete'), _defineProperty(_THEME_CLASSES, THEME_OPTIONS.WARNING, 'slds-progress-ring_warning'), _defineProperty(_THEME_CLASSES, THEME_OPTIONS.EXPIRED, 'slds-progress-ring_expired'), _THEME_CLASSES);
var propTypes = {
  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to tag with `.slds-progress-ring`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The theme applied to the ring.
   */
  theme: PropTypes.oneOf(['warning', 'expired', 'complete']),

  /**
   * Overrides the icon to be displayed.
   */
  icon: PropTypes.node,

  /**
   * Display the icon associated with the theme.
   */
  hasIcon: PropTypes.bool,

  /**
   * Percentage of progress completion, ranging [0, 100].
   */
  value: PropTypes.number.isRequired
};
var defaultProps = {};
/**
 * Customizable and configurable progress ring. Will display progress in a circular progress bar factor, and is capable of displaying iconography inside of the ring structure.
 */

var ProgressRing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressRing, _React$Component);

  function ProgressRing() {
    _classCallCheck(this, ProgressRing);

    return _possibleConstructorReturn(this, (ProgressRing.__proto__ || Object.getPrototypeOf(ProgressRing)).apply(this, arguments));
  }

  _createClass(ProgressRing, [{
    key: "icon",

    /**
     * Gets the icon to display
     * @returns {node} Icon
     */
    value: function icon() {
      var icon = '';

      if (this.props.hasIcon) {
        if (this.props.icon) {
          icon = this.props.icon;
        } else if (this.props.theme === THEME_OPTIONS.WARNING) {
          icon = React.createElement(Icon, {
            category: "utility",
            name: "warning",
            title: "Warning"
          });
        } else if (this.props.theme === THEME_OPTIONS.EXPIRED) {
          icon = React.createElement(Icon, {
            category: "utility",
            name: "error",
            title: "Expired"
          });
        } else if (this.props.theme === THEME_OPTIONS.COMPLETE) {
          icon = React.createElement(Icon, {
            category: "utility",
            name: "check",
            title: "complete"
          });
        }
      }

      return icon;
    }
    /**
     * Percentage as a decimal
     * @returns {decimal} Percentage
     */

  }, {
    key: "percentDecimal",
    value: function percentDecimal() {
      return this.props.value / 100;
    }
    /**
     * Gets the theme CSS class
     * @returns {string} Class name
     */

  }, {
    key: "themeClass",
    value: function themeClass() {
      return THEME_CLASSES[this.props.theme] || '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ProgressRingShape, {
        id: this.props.id,
        className: classNames(this.props.className, this.themeClass()),
        fillPercentDecimal: this.percentDecimal()
      }, this.icon());
    }
  }]);

  return ProgressRing;
}(React.Component);

ProgressRing.displayName = PROGRESS_RING;
ProgressRing.propTypes = propTypes;
ProgressRing.defaultProps = defaultProps;
export default ProgressRing;
//# sourceMappingURL=index.js.map