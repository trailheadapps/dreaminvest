/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver an error message to the browser console about the removal of a property.
import warning from 'warning';

var deprecated = function deprecated() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  deprecated = function deprecated(control, propValue, oldProp, newProp, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';
    var newProperty = newProp ? "Use `".concat(newProp, "`") : '';
    var newPropertySentence = newProp ? " ".concat(newProperty, " instead.") : '';

    if (!hasWarned[control + oldProp]) {
      /* eslint-disable max-len */
      warning(propValue === undefined, "[Design System React] `".concat(oldProp, "` will be removed in the next major version of ").concat(control, ".").concat(newPropertySentence).concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control + oldProp] = propValue !== undefined;
    }
  };
}

export default deprecated;
//# sourceMappingURL=deprecated-property.js.map