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
test('Radio Button Group Base DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "dayOfWeek"
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Base HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_base2.default, {
    name: 'dayOfWeek'
  })).toMatchSnapshot();
});
test('Radio Button Group Disabled DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "dayOfWeek",
    disabled: true
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Required DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "dayOfWeek",
    required: true
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Radio Button Group Error DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, {
    name: "radioGroup",
    errorLabel: "error message",
    errorId: "radioGroupError"
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});