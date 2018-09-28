function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import checkProps from './check-props';
var displayName = 'Notification';
var propTypes = {
  iconCategory: PropTypes.string,

  /**
   * Custom classes applied to Notification element.
   */
  className: PropTypes.string,

  /**
   * Message for Notification.
   */
  content: PropTypes.node.isRequired,

  /**
   * If true, close button appears for users to dismiss Notification.
   */
  dismissible: PropTypes.bool,

  /**
   * If duration exists, the Notification will disappear after that amount of time.
   */
  duration: PropTypes.number,

  /**
   * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lighning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,

  /**
   * Styling for Notification background.
   */
  texture: PropTypes.bool,

  /**
   * Styling for Notification background color. Please reference <a href='http://www.lightningdesignsystem.com/components/utilities/themes/#color'>Lighning Design System Themes > Color</a>.
   */
  theme: PropTypes.oneOf(['success', 'warning', 'error', 'offline']),
  variant: PropTypes.oneOf(['alert', 'toast']).isRequired
};
var defaultProps = {
  iconCategory: 'utility',
  dismissible: true,
  isOpen: false,
  texture: false
};
/**
 * The Notification component is the Alert and Toast variants of the Lightning Design System Notification component. For prompt notifications, use the <a href='#/modal'>Modal</a> component with <code>prompt={true}</code>.
 * The Notification opens from a state change outside of the component itself (pass this state to the <code>isOpen</code> prop).
 */

var Notification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onDismiss", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.timeout) {
          clearTimeout(_this.timeout);
          _this.timeout = null;
        }

        if (_this.props.onDismiss) _this.props.onDismiss();

        if (_this.state.returnFocusTo && _this.state.returnFocusTo.focus) {
          _this.state.returnFocusTo.focus();
        }
      }
    });
    _this.state = {};
    _this.timeout = null;
    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      checkProps('Notification', this.props);

      if (this.props.duration) {
        this.timeout = setTimeout(function () {
          _this2.onDismiss();
        }, this.props.duration);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (nextProps.duration) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        if (nextProps.isOpen) {
          this.timeout = setTimeout(function () {
            _this3.onDismiss();
          }, this.props.duration);
        }
      }

      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({
          returnFocusTo: document.activeElement
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        var btn = this.dismissBtnRef;
        if (btn) btn.focus();
      }
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var _classNames;

      return classNames(this.props.className, 'slds-notify', (_classNames = {}, _defineProperty(_classNames, "slds-notify--".concat(this.props.variant), this.props.variant), _defineProperty(_classNames, "slds-theme--".concat(this.props.theme), this.props.theme), _defineProperty(_classNames, 'slds-theme--alert-texture', this.props.texture), _classNames));
    }
    /*
     * The parent container with role='alert' only announces its content if there is a change inside of it.
     * Because React renders the entire element to the DOM, we must switch out a blank div for the real content.
     * Bummer, I know.
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "blankContent",
    value: function blankContent() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderAlertContent",
    value: function renderAlertContent() {
      return React.createElement("h2", {
        id: "dialogTitle"
      }, this.renderIcon(), this.props.content);
    }
  }, {
    key: "renderClose",
    value: function renderClose() {
      var _this4 = this;

      if (this.props.dismissible) {
        var size = null;
        if (this.props.variant === 'toast') size = 'large'; // i18n

        return React.createElement(Button, {
          assistiveText: "Dismiss Notification",
          iconCategory: "utility",
          iconName: "close",
          iconSize: size,
          inverse: true,
          className: "slds-notify__close",
          onClick: this.onDismiss,
          buttonRef: function buttonRef(dismissBtn) {
            _this4.dismissBtnRef = dismissBtn;
          },
          variant: "icon"
        });
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return React.createElement("div", null, React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.theme), this.renderClose(), this.props.variant === 'toast' ? this.renderToastContent() : null, this.props.variant === 'alert' ? this.renderAlertContent() : null);
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      if (this.props.iconName) {
        var classes = '';

        if (this.props.variant === 'alert') {
          classes = 'slds-m-right--x-small';
        } else if (this.props.variant === 'toast') {
          classes = 'slds-m-right--small slds-col slds-no-flex';
        }

        return React.createElement(Icon, {
          category: this.props.iconCategory,
          className: classes,
          inverse: true,
          name: this.props.iconName,
          size: "small"
        });
      }

      return null;
    }
  }, {
    key: "renderToastContent",
    value: function renderToastContent() {
      return React.createElement("section", {
        className: "notify__content slds-grid"
      }, this.renderIcon(), React.createElement("div", {
        className: "slds-col slds-align-middle"
      }, React.createElement("h2", {
        id: "dialogTitle",
        className: "slds-text-heading--small"
      }, this.props.content)));
    }
  }, {
    key: "render",
    value: function render() {
      // TODO: If there are multiple notifications on a page, we must 'hide' the ones that aren't open.
      // Need to find a better way to do this than using width:0 to override slds-notify-container.
      var styles;

      if (!this.props.isOpen) {
        styles = {
          width: '0px'
        };
      } else {
        styles = this.props.variant === 'toast' ? {
          width: 'auto',
          left: '50%',
          transform: 'translateX(-50%)'
        } : {
          width: '100%'
        };
      }

      var alertStyles = !this.props.isOpen ? {
        display: 'none'
      } : null;
      return React.createElement("div", {
        className: "slds-notify-container",
        style: styles
      }, React.createElement("div", {
        className: this.getClassName(),
        role: "alertdialog",
        "aria-labelledby": "dialogTitle",
        style: alertStyles
      }, this.props.isOpen ? this.renderContent() : this.blankContent()));
    }
  }]);

  return Notification;
}(React.Component);

Notification.displayName = displayName;
Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
export default Notification;
//# sourceMappingURL=index.js.map