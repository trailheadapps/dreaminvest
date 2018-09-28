/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an error message to the browser console that another component may use, but is not yet released.
import warning from 'warning';

var future = function future() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  future = function future(control, propValue, newProp, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';

    if (!hasWarned[control + newProp]) {
      /* eslint-disable max-len */
      warning(!propValue, "[Design System React] `".concat(newProp, "` of ").concat(control, " is not implemented yet. Please check future releases for `").concat(newProp, "`.").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control + newProp] = !!propValue;
    }
  };
}

export default future;
//# sourceMappingURL=future-property.js.map