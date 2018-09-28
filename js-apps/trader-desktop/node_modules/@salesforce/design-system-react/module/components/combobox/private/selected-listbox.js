function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import Pill from '../../utilities/pill';
var propTypes = {
  /*
   * The option object within the selection prop that should have focus.
   */
  activeOption: PropTypes.object,

  /*
   * The index of the option object within the selection prop that should have focus.
   */
  activeOptionIndex: PropTypes.number,

  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `label`: This is used as a visually hidden label if, no `labels.label` is provided.
   * * `removePill`: Aids in keyboard interaction with Pills.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string,
    removePill: PropTypes.string
  }),

  /*
   * Callback called when pill is clicked, delete is pressed, or backspace is pressed.
   */
  events: PropTypes.shape({
    onClickPill: PropTypes.func.isRequired,
    onRequestFocus: PropTypes.func.isRequired,
    onRequestFocusOnNextPill: PropTypes.func.isRequired,
    onRequestFocusOnPreviousPill: PropTypes.func.isRequired,
    onRequestRemove: PropTypes.func.isRequired
  }),

  /**
   * HTML id for Combobox
   */
  id: PropTypes.string,

  /**
   * Adds inline (inside of input) styling
   */
  isInline: PropTypes.bool,

  /*
   * Pill Label
   */
  labels: PropTypes.shape({
    label: PropTypes.string,
    remove: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Changes styles of the input. Currently `entity` is not supported.
   */
  renderAtSelectionLength: PropTypes.number,

  /**
   * Accepts an array of item objects.
   */
  selection: PropTypes.array,

  /**
   * Requests that the active option set focus on render
   */
  listboxHasFocus: PropTypes.bool,

  /**
   * Changes styles of the input. Currently `entity` is not supported.
   */
  variant: PropTypes.oneOf(['base', 'inline-listbox', 'readonly'])
};
var defaultProps = {
  renderAtSelectionLength: 1
};

var SelectedListBox = function SelectedListBox(props) {
  return props.selection.length >= props.renderAtSelectionLength ? React.createElement("div", {
    // eslint-disable-line jsx-a11y/role-supports-aria-props
    id: "".concat(props.id, "-selected-listbox"),
    role: "listbox",
    "aria-orientation": "horizontal"
  }, React.createElement("ul", {
    className: classNames('slds-listbox', {
      'slds-listbox--inline': props.isInline,
      'slds-listbox_horizontal': !props.isInline,
      'slds-p-top_xxx-small': !props.isInline
    }),
    role: "group",
    "aria-label": props.assistiveText.selectedListboxLabel
  }, props.selection.map(function (option, renderIndex) {
    var setActiveBasedOnstateFromParent = renderIndex === props.activeOptionIndex && isEqual(option, props.activeOption);
    var listboxRenderedForFirstTime = props.activeOptionIndex === -1 && renderIndex === 0 || props.variant === 'readonly' && props.selection.length !== 1 && renderIndex === 0;
    var active = setActiveBasedOnstateFromParent || listboxRenderedForFirstTime;
    var icon = option.icon ? React.cloneElement(option.icon, {
      containerClassName: 'slds-pill__icon_container'
    }) : null;
    return React.createElement("li", {
      role: "presentation",
      className: "slds-listbox__item",
      key: "".concat(props.id, "-list-item-").concat(option.id)
    }, React.createElement(Pill, {
      active: active,
      assistiveText: {
        remove: props.assistiveText.removePill
      },
      events: {
        onBlur: props.events.onBlurPill,
        onClick: function onClick(event, data) {
          props.events.onClickPill(event, _objectSpread({}, data, {
            index: renderIndex
          }));
        },
        onRequestFocusOnNextPill: props.events.onRequestFocusOnNextPill,
        onRequestFocusOnPreviousPill: props.events.onRequestFocusOnPreviousPill,
        onRequestRemove: function onRequestRemove(event, data) {
          props.events.onRequestRemove(event, _objectSpread({}, data, {
            index: renderIndex
          }));
        },
        onRequestFocus: props.events.onRequestFocus
      },
      eventData: {
        option: option
      },
      icon: icon,
      labels: {
        label: option.label,
        removeTitle: props.labels.removePillTitle
      },
      requestFocus: props.listboxHasFocus,
      tabIndex: active ? 0 : -1
    }));
  }))) : null;
};

SelectedListBox.displayName = 'SelectedListBox';
SelectedListBox.propTypes = propTypes;
SelectedListBox.defaultProps = defaultProps;
export default SelectedListBox;
//# sourceMappingURL=selected-listbox.js.map