/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an warning message to the browser console if extraneous properties are defined (falsey).
import warning from 'warning';

var onlyOneOf = function onlyOneOf() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  onlyOneOf = function onlyOneOf(control, selectedProps, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';
    var keys = Object.keys(selectedProps);
    keys = keys.filter(function (key) {
      return selectedProps[key];
    });

    if (!hasWarned[control]) {
      /* eslint-disable max-len */
      warning(keys.length <= 1, "[Design System React] Only one of the following props is needed by ".concat(control, ": [").concat(keys.join(), "].").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control] = !!selectedProps;
    }
  };
}

export default onlyOneOf;
//# sourceMappingURL=only-one-of-properties.js.map