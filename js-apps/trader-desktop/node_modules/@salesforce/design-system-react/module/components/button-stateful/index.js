function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Button Stateful design pattern](https://lightningdesignsystem.com/components/buttons/#flavor-stateful) in React.
// Based on SLDS v2.1.1
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### isBoolean

import isBoolean from 'lodash.isboolean'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ## Children

import ButtonIcon from '../icon/button-icon';
import { BUTTON_STATEFUL } from '../../utilities/constants';
var propTypes = {
  /**
   * Specifies the current state of the button. If set, the button will act as a ['controlled' component](https://facebook.github.io/react/docs/forms.html#controlled-components).
   */
  active: PropTypes.bool,

  /**
   * Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. This should also include the state of the button.
   * If the button has an icon and a visible label, you can omit the <code>assistiveText</code> prop and use the <code>label</code> prop.
   */
  assistiveText: PropTypes.string,

  /**
   * Disables the button and adds disabled styling.
   */
  disabled: PropTypes.bool,

  /**
   * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,

  /**
   * Determines the size of the icon.
   */
  iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * If true, button/icon is white. Meant for buttons or utility icons on dark backgrounds.
   */
  inverse: PropTypes.bool,

  /**
   * Triggered when focus is removed.
   */
  onBlur: PropTypes.func,

  /**
   * Triggered when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Triggered when component is focused.
   */
  onFocus: PropTypes.func,

  /**
   * Triggered when a key is pressed down
   */
  onKeyDown: PropTypes.func,

  /**
   * Triggered when a key is pressed and released
   */
  onKeyPress: PropTypes.func,

  /**
   * Triggered when a key is released
   */
  onKeyUp: PropTypes.func,

  /**
   * Triggered when a mouse button is pressed down
   */
  onMouseDown: PropTypes.func,

  /**
   * Triggered when a mouse arrow hovers
   */
  onMouseEnter: PropTypes.func,

  /**
   * Triggered when a mouse arrow no longer hovers
   */
  onMouseLeave: PropTypes.func,

  /**
   * If true, button scales to 100% width on small form factors.
   */
  responsive: PropTypes.bool,

  /**
   * Initial label and icon (optional) of button.
   */
  stateOne: PropTypes.object,

  /**
   * Selected label and icon (optional) of button.
   */
  stateTwo: PropTypes.object,

  /**
   * Deselect label and icon (optional) of button.
   */
  stateThree: PropTypes.object,

  /**
   * Write "-1" if you don't want the user to tab to the button.
   */
  tabIndex: PropTypes.string,

  /**
   * [Deprecated] Tooltip on button. Button should be a child of `Tooltip` instead.
   */
  tooltip: PropTypes.node,

  /**
   * Different types of buttons
   */
  variant: PropTypes.oneOf(['base', 'neutral', 'brand', 'destructive', 'icon'])
}; // i18n

var defaultProps = {
  disabled: false,
  iconSize: 'medium',
  responsive: false,
  stateOne: {
    iconName: 'add',
    label: 'Follow'
  },
  stateTwo: {
    iconName: 'check',
    label: 'Following'
  },
  stateThree: {
    iconName: 'close',
    label: 'Unfollow'
  }
};
/**
 * The ButtonStateful component is a variant of the Lightning Design System Button component. It is used for buttons that have a state of unselected or selected.
 * For icon buttons, use <code>variant='icon'</code>. For buttons with labels or buttons with labels and icons, pass data to the state props (ie. <code>stateOne={{iconName: 'add', label: 'Join'}}</code>).
 */

var ButtonStateful =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonStateful, _React$Component);

  function ButtonStateful(props) {
    var _this;

    _classCallCheck(this, ButtonStateful);

    _this = _possibleConstructorReturn(this, (ButtonStateful.__proto__ || Object.getPrototypeOf(ButtonStateful)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.props.onBlur) _this.props.onBlur(e);
        e.currentTarget.blur();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (isFunction(_this.props.onClick)) _this.props.onClick(e);

        if (!isBoolean(_this.props.active)) {
          _this.setState({
            active: !_this.state.active
          });
        }
      }
    });
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(ButtonStateful, [{
    key: "getClassName",
    value: function getClassName(active) {
      return classNames(this.props.className, 'slds-button', {
        'slds-button--neutral': this.props.variant !== 'icon',
        'slds-button--inverse': this.props.variant === 'inverse',
        'slds-not-selected': !active,
        'slds-is-selected': active,
        'slds-max-small-button--stretch': this.props.responsive,
        'slds-button--icon-border': this.props.variant === 'icon'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          assistiveText = _props.assistiveText,
          disabled = _props.disabled,
          iconName = _props.iconName,
          iconSize = _props.iconSize,
          id = _props.id,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onKeyPress = _props.onKeyPress,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseEnter = _props.onMouseEnter,
          stateOne = _props.stateOne,
          stateTwo = _props.stateTwo,
          stateThree = _props.stateThree,
          tabIndex = _props.tabIndex,
          variant = _props.variant;
      var isActive = isBoolean(active) ? active : this.state.active;

      if (variant === 'icon') {
        return React.createElement("button", {
          "aria-live": "polite",
          className: this.getClassName(isActive),
          disabled: disabled,
          id: id,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onFocus: onFocus,
          onKeyDown: onKeyDown,
          onKeyPress: onKeyPress,
          onKeyUp: onKeyUp,
          onMouseDown: onMouseDown,
          onMouseEnter: onMouseEnter,
          onMouseLeave: this.handleBlur,
          tabIndex: tabIndex
        }, React.createElement(ButtonIcon, {
          disabled: disabled,
          name: iconName,
          size: iconSize,
          className: "slds-button__icon--stateful"
        }), assistiveText ? React.createElement("span", {
          className: "slds-assistive-text"
        }, assistiveText) : null);
      }

      return React.createElement("button", {
        "aria-live": "assertive",
        className: this.getClassName(isActive),
        disabled: disabled,
        id: id,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onKeyUp: onKeyUp,
        onMouseEnter: onMouseEnter,
        onMouseLeave: this.handleBlur,
        tabIndex: tabIndex
      }, React.createElement("span", {
        className: "slds-text-not-selected"
      }, React.createElement(ButtonIcon, {
        disabled: disabled,
        name: stateOne.iconName,
        size: "small",
        position: "left",
        className: "slds-button__icon--stateful"
      }), stateOne.label), React.createElement("span", {
        className: "slds-text-selected"
      }, React.createElement(ButtonIcon, {
        disabled: disabled,
        name: stateTwo.iconName,
        size: "small",
        position: "left",
        className: "slds-button__icon--stateful"
      }), stateTwo.label), React.createElement("span", {
        className: "slds-text-selected-focus"
      }, React.createElement(ButtonIcon, {
        disabled: disabled,
        name: stateThree.iconName,
        size: "small",
        position: "left",
        className: "slds-button__icon--stateful"
      }), stateThree.label));
    }
  }]);

  return ButtonStateful;
}(React.Component);

ButtonStateful.displayName = BUTTON_STATEFUL;
ButtonStateful.propTypes = propTypes;
ButtonStateful.defaultProps = defaultProps;
export default ButtonStateful;
//# sourceMappingURL=index.js.map