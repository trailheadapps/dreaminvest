"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
test('Radio Group Base DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "radioGroup"
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Group Base HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_base2.default, {
    name: 'radioGroup'
  })).toMatchSnapshot();
});
test('Radio Group Disabled DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "radioGroup",
    disabled: true
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Group Required DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "radioGroup",
    required: true
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Group Error DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "radioGroup",
    errorLabel: "error message",
    errorId: "radioGroupError"
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});