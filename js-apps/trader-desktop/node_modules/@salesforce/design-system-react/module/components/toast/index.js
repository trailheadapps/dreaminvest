function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Toast Component
// Implements the [Toast design pattern](https://lightningdesignsystem.com/components/toasts/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import classNames from '../../utilities/class-names';
import Button from '../button';
import Icon from '../icon';
import checkProps from './check-props';
import { TOAST } from '../../utilities/constants';
import DOMElementFocus from '../../utilities/dom-element-focus';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `closeButton`: This is a visually hidden label for the close button.
   * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    closeButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }),

  /**
   * CSS classes to be added to tag with `.slds-notify_toast`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   * _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * If duration exists, the Toast will disappear after that amount of time. Time in milliseconds. _Tested with Mocha testing._
   */
  duration: PropTypes.number,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `details`: Secondary text below heading
   * * `heading`: text within heading tag
   * * `headingLink`: Text of link that triggers `onClickHeadingLink`. Inline links should pass a keyed array of React components into `labels.heading`.
   *
   * _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    details: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    headingLink: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }),

  /**
   * Triggered by link. _Tested with Mocha testing._
   */
  onClickHeadingLink: PropTypes.func,

  /**
   * Icon of type `~/components/icon`. This icon will be cloned and additional props appended. The default icons are:
   * * info variant: `utility:info`
   * * error variant: `utility:error`
   * * success variant: `utility:success`
   * * warning variant: `utility:warning`
   *
   * _Tested with snapshot testing._
   */
  icon: PropTypes.node,

  /**
   * Triggered by close button. _Tested with Mocha testing._
   */
  onRequestClose: PropTypes.func,

  /**
   * The type of Toast. _Tested with snapshot testing._
   */
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired
};
var defaultProps = {
  assistiveText: {
    closeButton: 'Close'
  },
  variant: 'info'
};
/**
 * Toast serves as a feedback & confirmation mechanism after the user takes an action. View [banner guidelines](https://www.lightningdesignsystem.com/guidelines/messaging/components/banners/).
 */

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast(props) {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.timeout) {
          clearTimeout(_this.timeout);
          _this.timeout = null;
        }

        if (_this.props.onRequestClose) {
          _this.props.onRequestClose();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "saveButtonRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(component) {
        _this.closeButton = component;

        if (_this.state.isInitialRender) {
          DOMElementFocus.storeActiveElement();

          if (_this.closeButton) {
            _this.closeButton.focus();
          }

          _this.setState({
            isInitialRender: false
          });
        }
      }
    });
    _this.state = {
      isInitialRender: true
    };
    _this.timeout = null;
    return _this;
  }

  _createClass(Toast, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      checkProps(TOAST, this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.duration) {
        this.timeout = setTimeout(function () {
          _this2.onClose();
        }, this.props.duration);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      DOMElementFocus.returnFocusToStoredElement();
    }
  }, {
    key: "render",
    value: function render() {
      // Merge objects of strings with their default object
      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var heading = labels.heading || this.props.content; // eslint-disable-line react/prop-types

      var assistiveTextVariant = {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error'
      };
      var defaultIcons = {
        info: React.createElement(Icon, {
          category: "utility",
          name: "info"
        }),
        success: React.createElement(Icon, {
          category: "utility",
          name: "success"
        }),
        warning: React.createElement(Icon, {
          category: "utility",
          name: "warning"
        }),
        error: React.createElement(Icon, {
          category: "utility",
          name: "error"
        })
      };
      var icon = this.props.icon ? this.props.icon : defaultIcons[this.props.variant];
      var clonedIcon = React.cloneElement(icon, {
        containerClassName: 'slds-m-right_small slds-no-flex slds-align-top',
        inverse: true,
        size: 'small'
      });
      /* eslint-disable no-script-url */

      return React.createElement("div", {
        className: classNames('slds-notify slds-notify_toast', {
          'slds-theme_info': this.props.variant === 'info',
          'slds-theme_success': this.props.variant === 'success',
          'slds-theme_warning': this.props.variant === 'warning',
          'slds-theme_error': this.props.variant === 'error'
        }, this.props.className),
        role: "alert"
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveTextVariant[this.props.variant]), clonedIcon, React.createElement("div", {
        className: "slds-notify__content"
      }, React.createElement("h2", {
        className: "slds-text-heading_small"
      }, heading, ' ', labels.headingLink ? React.createElement("a", {
        onClick: this.props.onClickHeadingLink,
        href: "javascript:void(0);"
      }, labels.headingLink) : null), labels.details ? React.createElement("p", null, labels.details) : null), React.createElement(Button, {
        assistiveText: assistiveText.closeButton,
        buttonRef: this.saveButtonRef,
        className: "slds-notify__close",
        iconCategory: "utility",
        iconName: "close",
        iconSize: "large",
        inverse: true,
        onClick: this.props.onRequestClose,
        title: assistiveText.closeButton,
        variant: "icon"
      }));
    }
  }]);

  return Toast;
}(React.Component);

Toast.defaultProps = defaultProps;
Toast.displayName = TOAST;
Toast.propTypes = propTypes;
export default Toast;
//# sourceMappingURL=index.js.map