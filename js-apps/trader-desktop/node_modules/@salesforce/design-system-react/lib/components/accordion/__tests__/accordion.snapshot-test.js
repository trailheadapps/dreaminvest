"use strict";

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

var _baseOpen = require("../__examples__/snapshot/base-open");

var _baseOpen2 = _interopRequireDefault(_baseOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base',
  test: test,
  Component: _base2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open',
  test: test,
  Component: _baseOpen2.default
});