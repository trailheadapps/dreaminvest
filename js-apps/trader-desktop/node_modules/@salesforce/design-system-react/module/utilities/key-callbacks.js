/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import EventUtil from './event';
/*
 * Helper function that has callbacks passed into it with the key
 * being the keycode of the event. This allows an object literal to
 * control key event callback mapping and avoids a long conditional
 * if statement and uses an enumeration pattern instead.
 */

var mapKeyEventCallbacks = function mapKeyEventCallbacks(event, _ref) {
  var _ref$callbacks = _ref.callbacks,
      callbacks = _ref$callbacks === void 0 ? {} : _ref$callbacks,
      _ref$shiftCallbacks = _ref.shiftCallbacks,
      shiftCallbacks = _ref$shiftCallbacks === void 0 ? {} : _ref$shiftCallbacks,
      _ref$stopPropagation = _ref.stopPropagation,
      stopPropagation = _ref$stopPropagation === void 0 ? true : _ref$stopPropagation;

  if (event.shiftKey && event.keyCode && shiftCallbacks[event.keyCode]) {
    if (stopPropagation) {
      EventUtil.trapEvent(event);
    }

    shiftCallbacks[event.keyCode].callback(event, shiftCallbacks[event.keyCode].data);
  } else if (event.keyCode && callbacks[event.keyCode]) {
    if (stopPropagation) {
      EventUtil.trapEvent(event);
    }

    callbacks[event.keyCode].callback(event, callbacks[event.keyCode].data);
  }
};

export default mapKeyEventCallbacks;
//# sourceMappingURL=key-callbacks.js.map