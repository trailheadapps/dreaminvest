function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import KEYS from '../../../utilities/key-code';
import mapKeyEventCallbacks from '../../../utilities/key-callbacks';
import EventUtil from '../../../utilities/event';
import SLDSPill from '../../../components/pill';
var propTypes = {
  /**
   * Pill is the active pill within a listbox of pills. This will request focus on the DOM node.
   */
  active: PropTypes.bool,

  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `pressDeleteOrBackspace`: Informs user of keyboard keys to press in order to remove a pill
   */
  assistiveText: PropTypes.shape({
    remove: PropTypes.string
  }),

  /*
   * Pills are often used for selection of a type of entity such as days in a daypicker. This prop allows you to pass in data that will be passed back to the event handler.
   */
  eventData: PropTypes.object,

  /*
   * Callback called when pill is clicked, delete is pressed, or backspace is pressed.
   */
  events: PropTypes.shape({
    onClick: PropTypes.func,
    onRequestFocus: PropTypes.func.isRequired,
    onRequestFocusOnNextPill: PropTypes.func.isRequired,
    onRequestFocusOnPreviousPill: PropTypes.func.isRequired,
    onRequestRemove: PropTypes.func.isRequired
  }),

  /*
   * The icon next to the pill label.
   */
  icon: PropTypes.element,

  /*
   * Pill Label
   */
  labels: PropTypes.shape({
    label: PropTypes.string.isRequired,
    removeTitle: PropTypes.string
  }),

  /*
   * If true and is active pill in listbox, will trigger `events.onRequestFocus`
   */
  requestFocus: PropTypes.bool,

  /*
   * Pill Title
   */
  title: PropTypes.string,

  /*
   * Allows the user to tab to the node
   */
  tabIndex: PropTypes.number
};
var defaultProps = {
  assistiveText: PropTypes.shape({
    remove: ', Press delete or backspace to remove'
  }),
  labels: {
    remove: 'Remove'
  },
  events: {}
};

var handleKeyDown = function handleKeyDown(event, _ref) {
  var _callbacks;

  var events = _ref.events,
      data = _ref.data;
  // Helper function that takes an object literal of callbacks that are triggered with a key event
  mapKeyEventCallbacks(event, {
    callbacks: (_callbacks = {}, _defineProperty(_callbacks, KEYS.BACKSPACE, {
      callback: events.onRequestRemove,
      data: data
    }), _defineProperty(_callbacks, KEYS.DELETE, {
      callback: events.onRequestRemove,
      data: data
    }), _defineProperty(_callbacks, KEYS.LEFT, {
      callback: events.onRequestFocusOnPreviousPill,
      data: _objectSpread({}, data, {
        direction: 'previous'
      })
    }), _defineProperty(_callbacks, KEYS.RIGHT, {
      callback: events.onRequestFocusOnNextPill,
      data: _objectSpread({}, data, {
        direction: 'next'
      })
    }), _callbacks)
  });
};

var handleClickRemove = function handleClickRemove(event, _ref2) {
  var events = _ref2.events,
      eventData = _ref2.eventData;
  EventUtil.trap(event);
  events.onRequestRemove(event, eventData);
};

var Pill = function Pill(props) {
  var assistiveText = assign({}, defaultProps.assistiveText, props.assistiveText);
  var labels = assign({}, defaultProps.labels, props.labels);
  return React.createElement(SLDSPill, {
    tabIndex: props.tabIndex || '0',
    icon: props.icon,
    variant: "option",
    labels: labels,
    assistiveText: {
      remove: assistiveText.remove
    },
    "aria-selected": props.active,
    onBlur: props.events.onBlur,
    onClick: typeof props.events.onClick === 'function' ? function (event) {
      if (props.events.onClick) {
        props.events.onClick(event, {
          option: props.eventData
        });
      }
    } : null,
    onRemove: function onRemove(event) {
      EventUtil.trap(event);
      handleClickRemove(event, {
        events: props.events,
        eventData: props.eventData
      });
    },
    onKeyDown: function onKeyDown(event) {
      handleKeyDown(event, {
        events: props.events,
        data: props.eventData
      });
    },
    ref: function ref(component) {
      if (props.requestFocus && props.active) {
        props.events.onRequestFocus(undefined, {
          ref: component
        });
      }
    }
  });
};

Pill.displayName = 'Pill';
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;
export default Pill;
//# sourceMappingURL=index.js.map