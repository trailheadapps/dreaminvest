"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _default = require("../__examples__/default");

var _default2 = _interopRequireDefault(_default);

var _new = require("../__examples__/new");

var _new2 = _interopRequireDefault(_new);

var _locked = require("../__examples__/locked");

var _locked2 = _interopRequireDefault(_locked);

var _permanant = require("../__examples__/permanant");

var _permanant2 = _interopRequireDefault(_permanant);

var _error = require("../__examples__/error");

var _error2 = _interopRequireDefault(_error);

var _assistiveText = require("../__examples__/assistive-text");

var _assistiveText2 = _interopRequireDefault(_assistiveText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Filter Base Snapshot', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_default2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('NewFilter Base Snapshot', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_new2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('LockedFilter Base Snapshot', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_locked2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('Permanant Filter Base Snapshot', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_permanant2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('Error Filter Base Snapshot', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_error2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('AssistiveText Filter', function () {
  var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_assistiveText2.default, null)));
  expect(domTree).toMatchSnapshot();
});
test('Filter Base with custom className Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_default2.default, {
    className: 'MY_CUSTOM_CLASS_NAME'
  })).toMatchSnapshot();
});
test('AssistiveText Filter HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_default2.default)).toMatchSnapshot();
});