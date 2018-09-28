/* eslint-env jest */
import React from 'react';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import IconSettings from '../../../components/icon-settings';
import * as ProgressRing from '../__examples__/examples';
Object.keys(ProgressRing).forEach(function (name) {
  var wrapper = function wrapper(element) {
    return function () {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, element());
    };
  };

  test("".concat(name, " DOM Snapshot"), function () {
    expect(renderMarkup(wrapper(ProgressRing[name]))).toMatchSnapshot();
  });
});
//# sourceMappingURL=progress-ring.snapshot-test.js.map