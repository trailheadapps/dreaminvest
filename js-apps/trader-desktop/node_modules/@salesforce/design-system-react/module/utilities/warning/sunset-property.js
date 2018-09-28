/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an error message to the browser console about the removal of a property.
import warning from 'warning';

var sunset = function sunset() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  sunset = function sunset(control, propValue, oldProp, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';

    if (!hasWarned[control + oldProp]) {
      /* eslint-disable max-len */
      warning(!propValue, "[Design System React] `".concat(oldProp, "` has reached End-of-Life and has been removed from the API of ").concat(control, ". Please update your API.").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control + oldProp] = !!propValue;
    }
  };
}

export default sunset;
//# sourceMappingURL=sunset-property.js.map