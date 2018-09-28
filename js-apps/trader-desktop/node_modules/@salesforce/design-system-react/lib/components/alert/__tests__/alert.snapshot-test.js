"use strict";

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _info = require("../__examples__/info");

var _info2 = _interopRequireDefault(_info);

var _warning = require("../__examples__/warning");

var _warning2 = _interopRequireDefault(_warning);

var _error = require("../__examples__/error");

var _error2 = _interopRequireDefault(_error);

var _offline = require("../__examples__/offline");

var _offline2 = _interopRequireDefault(_offline);

var _dismissable = require("../__examples__/dismissable");

var _dismissable2 = _interopRequireDefault(_dismissable);

var _customClassName = require("../__examples__/custom-class-name");

var _customClassName2 = _interopRequireDefault(_customClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Info',
  test: test,
  Component: _info2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Warning',
  test: test,
  Component: _warning2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Error',
  test: test,
  Component: _error2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Offline',
  test: test,
  Component: _offline2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Dismissable',
  test: test,
  Component: _dismissable2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Alert Custom Class Name',
  test: test,
  Component: _customClassName2.default
});