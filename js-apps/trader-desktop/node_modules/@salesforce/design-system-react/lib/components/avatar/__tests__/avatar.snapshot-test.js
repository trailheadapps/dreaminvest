"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

var _entityIcon = require("../__examples__/entity-icon");

var _entityIcon2 = _interopRequireDefault(_entityIcon);

var _entityInitials = require("../__examples__/entity-initials");

var _entityInitials2 = _interopRequireDefault(_entityInitials);

var _userIcon = require("../__examples__/user-icon");

var _userIcon2 = _interopRequireDefault(_userIcon);

var _userInitials = require("../__examples__/user-initials");

var _userInitials2 = _interopRequireDefault(_userInitials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
test('Avatar Base DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Avatar Entity Icon Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_entityIcon2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Avatar Entity Initials Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_entityInitials2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Avatar User Icon Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_userIcon2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('Avatar User Initials Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_userInitials2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});