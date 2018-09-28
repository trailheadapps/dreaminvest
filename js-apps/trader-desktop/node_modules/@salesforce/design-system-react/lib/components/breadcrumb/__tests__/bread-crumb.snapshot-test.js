"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Breadcrumb Base Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});