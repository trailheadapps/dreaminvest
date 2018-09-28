"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

var _baseMultiple = require("../__examples__/base-multiple");

var _baseMultiple2 = _interopRequireDefault(_baseMultiple);

var _customItemList = require("../__examples__/custom-Item-list");

var _customItemList2 = _interopRequireDefault(_customItemList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open',
  test: test,
  Component: _base2.default,
  props: {
    isOpen: true
  }
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Closed',
  test: test,
  Component: _base2.default,
  props: {
    isOpen: false
  }
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Multiple',
  test: test,
  Component: _baseMultiple2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Custom',
  test: test,
  Component: _customItemList2.default
});