/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an error message to the browser console about the removal of a property.
import warning from 'warning';
import { BUTTON, BUTTON_STATEFUL, BUTTON_GROUP, FORMS_CHECKBOX, DATE_PICKER, FORMS_INPUT, LOOKUP, TIME_PICKER } from '../../utilities/constants';
/* eslint-disable import/no-mutable-exports */

var isTriggerTabbable = function isTriggerTabbable() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  isTriggerTabbable = function isTriggerTabbable(COMPONENT, trigger, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';
    var childTabIndex = trigger.props.tabIndex;
    var elementIsTabbable = true;

    if ( // List of "native" HTML elements that are tabbable by default
    trigger.type !== 'button' && trigger.type !== 'input' && trigger.type !== 'select' && trigger.type !== 'textarea' && trigger.type !== 'a' && // List of components that are tabbable by default
    trigger.type.displayName !== BUTTON && trigger.type.displayName !== BUTTON_STATEFUL && trigger.type.displayName !== BUTTON_GROUP && trigger.type.displayName !== FORMS_CHECKBOX && trigger.type.displayName !== DATE_PICKER && trigger.type.displayName !== FORMS_INPUT && trigger.type.displayName !== LOOKUP && trigger.type.displayName !== TIME_PICKER) {
      // if it's not one of the above, then check to see if it has a tabIndex
      if (childTabIndex === '-1' || childTabIndex === undefined) {
        elementIsTabbable = false;

        if (!hasWarned[COMPONENT]) {
          /* eslint-disable max-len */
          warning(elementIsTabbable, "[Design System React] The element that triggers ".concat(COMPONENT, " must be tabbable for  keyboard users. Elements such as anchor, button, input or a DOM element with tabIndex=\"0\" specified are tabbable.").concat(additionalComment));
          /* eslint-enable max-len */

          hasWarned[COMPONENT] = !!elementIsTabbable;
        }
      }
    }
  };
}

export default isTriggerTabbable;
//# sourceMappingURL=is-trigger-tabbable.js.map