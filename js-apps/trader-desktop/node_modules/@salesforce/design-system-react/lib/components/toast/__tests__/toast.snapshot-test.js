"use strict";

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _info = require("../__examples__/info");

var _info2 = _interopRequireDefault(_info);

var _warning = require("../__examples__/warning");

var _warning2 = _interopRequireDefault(_warning);

var _error = require("../__examples__/error");

var _error2 = _interopRequireDefault(_error);

var _errorWithDetails = require("../__examples__/error-with-details");

var _errorWithDetails2 = _interopRequireDefault(_errorWithDetails);

var _success = require("../__examples__/success");

var _success2 = _interopRequireDefault(_success);

var _customClassName = require("../__examples__/custom-class-name");

var _customClassName2 = _interopRequireDefault(_customClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Info',
  test: test,
  Component: _info2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Warning',
  test: test,
  Component: _warning2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Error',
  test: test,
  Component: _error2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Error With details',
  test: test,
  Component: _errorWithDetails2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Success',
  test: test,
  Component: _success2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Toast Custom Class Name',
  test: test,
  Component: _customClassName2.default
});