"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _jsBeautify = require("js-beautify");

var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

var _snapshotDefault = require("../__examples__/snapshot-default");

var _snapshotDefault2 = _interopRequireDefault(_snapshotDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
test('MenuPicklist Default DOM Snapshot', function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotDefault2.default, null)).toJSON();

  expect(domTree).toMatchSnapshot();
});
test('MenuPicklist Default HTML Snapshot', function () {
  var domTree = String(_jsBeautify2.default.html(_server2.default.renderToStaticMarkup(_react2.default.createElement(_snapshotDefault2.default, null)), {}), 'utf-8');
  expect(domTree).toMatchSnapshot();
});
test("MenuPicklist\n\terrorText\n\tDOM Snapshot", function () {
  var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotDefault2.default, {
    errorText: "This field is required.",
    required: true
  })).toJSON();

  expect(domTree).toMatchSnapshot();
});