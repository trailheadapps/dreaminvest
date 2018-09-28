/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import SnapshotExample from '../__examples__/base';
test('Radio Group Base DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "radioGroup"
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Group Base HTML Snapshot', function () {
  expect(renderMarkup(SnapshotExample, {
    name: 'radioGroup'
  })).toMatchSnapshot();
});
test('Radio Group Disabled DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "radioGroup",
    disabled: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Group Required DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "radioGroup",
    required: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Radio Group Error DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotExample, {
    name: "radioGroup",
    errorLabel: "error message",
    errorId: "radioGroupError"
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=radio-group.snapshot-test.js.map