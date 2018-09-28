function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Alert Component
// Implements the [Alert design pattern](https://lightningdesignsystem.com/components/alert/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import classNames from '../../utilities/class-names';
import Button from '../button';
import Icon from '../icon';
import checkProps from './check-props';
import { ALERT } from '../../utilities/constants';
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
   * CSS classes to be added to tag with `.slds-notify_alert`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   * _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Allows user to click a close button. Banners should be dismissible only if they communicate future impact to the system,
   * _Tested with snapshot testing._
   */
  dismissible: PropTypes.bool,

  /**
   * Icon of type `~/components/icon`. This icon will be cloned and additional props appended. The default icons are:
   * * info variant: `utility:info`
   * * error variant: `utility:error`
   * * offline variant: `utility:offline`
   * * warning variant: `utility:warning`
   *
   * _Tested with snapshot testing._
   */
  icon: PropTypes.node,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `heading`: text within heading tag
   * * `headingLink`: Text of link that triggers `onClickHeadingLink`. Inline links should pass a keyed array of React components into `labels.heading`.
   *
   * _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    headingLink: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }),

  /**
   * Triggered by link. _Tested with Mocha testing._
   */
  onClickHeadingLink: PropTypes.func,

  /**
   * Triggered by close button. This is a controlled component. _Tested with Mocha testing._
   */
  onRequestClose: PropTypes.func,

  /**
   * The type of alert. _Tested with snapshot testing._
   */
  variant: PropTypes.oneOf(['error', 'info', 'offline', 'warning']).isRequired
};
var defaultProps = {
  assistiveText: {
    closeButton: 'Close'
  },
  labels: {},
  variant: 'info'
};
/**
 * Alert banners communicate a state that affects the entire system, not just a feature or page. It persists over a session and appears without the user initiating the action. View [banner guidelines](https://www.lightningdesignsystem.com/guidelines/messaging/components/banners/).
 */

var Alert =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));
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
    return _this;
  }

  _createClass(Alert, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      checkProps(ALERT, this.props);
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
      var labels = assign({}, defaultProps.labels, this.props.labels); // BACKWARD COMPATIBILITY WITH NOTIFICATION

      var heading = labels.heading || this.props.content; // eslint-disable-line react/prop-types

      var onRequestClose = this.props.onRequestClose || this.props.onDismiss; // eslint-disable-line react/prop-types

      var assistiveTextVariant = {
        info: 'info',
        warning: 'warning',
        error: 'error',
        offline: 'offline'
      };
      var defaultIcons = {
        info: React.createElement(Icon, {
          category: "utility",
          name: "info"
        }),
        offline: React.createElement(Icon, {
          category: "utility",
          name: "offline"
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
      var icon = this.props.icon ? this.props.icon : defaultIcons[this.props.variant]; // BACKWARD COMPATIBILITY WITH NOTIFICATION

      if (this.props.iconName && this.props.iconCategory) {
        // eslint-disable-line react/prop-types
        icon = React.createElement(Icon, {
          category: this.props.iconCategory,
          name: this.props.iconName
        });
      }

      var clonedIcon = React.cloneElement(icon, {
        containerClassName: 'slds-m-right--x-small',
        inverse: true,
        size: 'x-small'
      });
      /* eslint-disable no-script-url */

      return React.createElement("div", {
        className: classNames('slds-notify slds-notify_alert slds-theme_alert-texture', {
          'slds-theme_info': this.props.variant === 'info',
          'slds-theme_warning': this.props.variant === 'warning',
          'slds-theme_error': this.props.variant === 'error',
          'slds-theme_offline': this.props.variant === 'offline'
        }, this.props.className),
        role: "alert"
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveTextVariant[this.props.variant]), clonedIcon, React.createElement("h2", null, heading, ' ', labels.headingLink ? React.createElement("a", {
        onClick: this.props.onClickHeadingLink,
        href: "javascript:void(0);"
      }, labels.headingLink) : null), this.props.dismissible ? React.createElement(Button, {
        assistiveText: assistiveText.closeButton,
        buttonRef: this.saveButtonRef,
        className: "slds-notify__close",
        iconCategory: "utility",
        iconName: "close",
        iconSize: "medium",
        inverse: true,
        onClick: onRequestClose,
        title: assistiveText.closeButton,
        variant: "icon"
      }) : null);
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = defaultProps;
Alert.displayName = ALERT;
Alert.propTypes = propTypes;
export default Alert;
//# sourceMappingURL=index.js.map