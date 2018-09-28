"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

var _disabled = require("../__examples__/disabled");

var _disabled2 = _interopRequireDefault(_disabled);

var _error = require("../__examples__/error");

var _error2 = _interopRequireDefault(_error);

var _sizes = require("../__examples__/sizes");

var _sizes2 = _interopRequireDefault(_sizes);

var _vertical = require("../__examples__/vertical");

var _vertical2 = _interopRequireDefault(_vertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base label, no label, min/max, min/max/step',
  test: test,
  Component: _base2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Disabled',
  test: test,
  Component: _disabled2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Error',
  test: test,
  Component: _error2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Sizes',
  test: test,
  Component: _sizes2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Vertical',
  test: test,
  Component: _vertical2.default
});