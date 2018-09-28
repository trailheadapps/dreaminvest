/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an error message to the browser console one property is used but not both that are required. Either use neither or both properties.
import warning from 'warning';
var ifOneThenBothRequiredProperty;

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  ifOneThenBothRequiredProperty = function ifOneThenBothRequiredProperty(control, props, selectedProps, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';
    var bothOrNoneAreSet = false;
    var keys = Object.keys(selectedProps);
    var values = keys.map(function (key) {
      return selectedProps[key];
    });
    var allTruthy = values.every(function (element) {
      return !!element;
    });
    var allFalsey = values.every(function (element) {
      return !element;
    });
    bothOrNoneAreSet = allTruthy || allFalsey;

    if (!hasWarned[control]) {
      /* eslint-disable max-len */
      warning(bothOrNoneAreSet, "[Design System React] If one of the following props are used, then both of the following properties are required by ".concat(control, ": [").concat(keys.join(), "].").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control] = !!selectedProps;
    }
  };
} else {
  ifOneThenBothRequiredProperty = function ifOneThenBothRequiredProperty() {};
}

export default ifOneThenBothRequiredProperty;
//# sourceMappingURL=if-one-then-both-required-property.js.map