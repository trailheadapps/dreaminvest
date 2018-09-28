/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import SnapshotExample from '../__examples__/base';
test('Radio Button Group Base DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "dayOfWeek"
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Base HTML Snapshot', function () {
  expect(renderMarkup(SnapshotExample, {
    name: 'dayOfWeek'
  })).toMatchSnapshot();
});
test('Radio Button Group Disabled DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "dayOfWeek",
    disabled: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Required DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "dayOfWeek",
    required: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Error DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "radioGroup",
    errorLabel: "error message",
    errorId: "radioGroupError"
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=radio-button-group.snapshot-test.js.map