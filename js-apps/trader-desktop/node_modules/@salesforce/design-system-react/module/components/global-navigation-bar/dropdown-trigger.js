function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// # Global Navigation Dropdown Component
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames';
import Button from '../button'; // ## Constants

import { MENU_DROPDOWN_TRIGGER } from '../../utilities/constants';
/**
 *  The Dropdown Button Trigger renders the default trigger button for the dropdown menu. If this component has children, it does not render itself to the DOM. Instead, it renders its child element, `Button`, and all that child's properties. This component may be used as a template to create custom triggers that do not use `Button`.
 */

var GlobalNavigationDropdownTrigger = createReactClass({
  // ### Display Name
  // Always use the canonical component name (set in the core) as the React
  // display name.
  displayName: MENU_DROPDOWN_TRIGGER,
  // ### Prop Types
  propTypes: {
    /**
     * Whether the item is active or not.
     */
    active: PropTypes.bool,

    /**
     * Allows alignment of active item with active application background color.
     */
    activeBackgroundColor: PropTypes.string,

    /**
     * Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means.
     * If the button has an icon and a visible label, you can omit the <code>assistiveText</code> prop and use the <code>label</code> prop.
     */
    assistiveText: PropTypes.string.isRequired,

    /**
     * CSS classes to be added to the 'li'.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Determines position of separating bar.
     */
    dividerPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
     */
    id: PropTypes.string,

    /**
     * Allows the dropdown menu to style itself accordingly when open since CSS hover rules cannot take effect if the menu is not inline.
     */
    isOpen: PropTypes.bool,

    /**
     * Visible label on the dropdown menu trigger button.
     */
    label: PropTypes.string,

    /**
     * The dropdown menu.
     */
    menu: PropTypes.node,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering li loses focus.
     */
    onBlur: PropTypes.func,

    /**
     * This prop is passed onto the triggering `li`. Triggered when the trigger li is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering li gains focus.
     */
    onFocus: PropTypes.func,

    /**
     * Called when a key pressed.
     */
    onKeyDown: PropTypes.func,

    /**
     * Called when mouse clicks down on the trigger `li`.
     */
    onMouseDown: PropTypes.func,

    /**
     * Called when mouse hovers over the trigger `li`.
     */
    onMouseEnter: PropTypes.func,

    /**
     * Called when mouse leaves trigger `li` or the menu.
     */
    onMouseLeave: PropTypes.func,

    /**
     * The ref of the actual triggering button.
     */
    triggerRef: PropTypes.func
  },
  // ### Render
  render: function render() {
    var _props = this.props,
        active = _props.active,
        activeBackgroundColor = _props.activeBackgroundColor,
        className = _props.className,
        dividerPosition = _props.dividerPosition,
        id = _props.id,
        isOpen = _props.isOpen,
        label = _props.label,
        menu = _props.menu,
        onBlur = _props.onBlur,
        onClick = _props.onClick,
        onFocus = _props.onFocus,
        onKeyDown = _props.onKeyDown,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        triggerRef = _props.triggerRef,
        rest = _objectWithoutProperties(_props, ["active", "activeBackgroundColor", "className", "dividerPosition", "id", "isOpen", "label", "menu", "onBlur", "onClick", "onFocus", "onKeyDown", "onMouseDown", "onMouseEnter", "onMouseLeave", "triggerRef"]);

    var listItemstyle = {}; // TODO: This should eventually exist in a CSS class. Feature has been filed.

    var hoverBackgroundColor = '#f7f9fb';

    if (active) {
      listItemstyle.backgroundColor = activeBackgroundColor;
      listItemstyle.borderBottomColor = activeBackgroundColor;
    } // Per SLDS pattern, set trigger style like hover style, so that hover visuals and menu being open and closed are in same state


    if (isOpen) {
      listItemstyle.backgroundColor = hoverBackgroundColor;
    }

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      React.createElement("li", {
        "aria-haspopup": "true",
        className: classNames('slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click', _defineProperty({
          'slds-is-open': isOpen,
          'slds-is-active': active
        }, "slds-context-bar__item--divider-".concat(dividerPosition), dividerPosition), className),
        id: id,
        onBlur: onBlur,
        onClick: onClick,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        ref: triggerRef,
        style: listItemstyle
      }, React.createElement("a", {
        className: "slds-context-bar__label-action"
      }, label), React.createElement("div", {
        className: "slds-context-bar__icon-action slds-p-left--none"
      }, React.createElement(Button, _extends({
        assistiveText: this.props.assistiveText
      }, rest, {
        className: "slds-context-bar__button slds-context-bar-action__trigger",
        "aria-haspopup": "true",
        iconCategory: "utility",
        iconName: "chevrondown",
        iconVariant: "bare",
        iconSize: "x-small",
        variant: "icon"
      }))), menu)
    );
  }
});
export default GlobalNavigationDropdownTrigger;
//# sourceMappingURL=dropdown-trigger.js.map