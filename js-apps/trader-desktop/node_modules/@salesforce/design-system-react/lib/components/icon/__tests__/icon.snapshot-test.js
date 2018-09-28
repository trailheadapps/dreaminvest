"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _icon = require("../../icon");

var _icon2 = _interopRequireDefault(_icon);

var _download = require("../../../icons/utility/download");

var _download2 = _interopRequireDefault(_download);

var _standard = require("../__examples__/standard");

var _standard2 = _interopRequireDefault(_standard);

var _utility = require("../__examples__/utility");

var _utility2 = _interopRequireDefault(_utility);

var _action = require("../__examples__/action");

var _action2 = _interopRequireDefault(_action);

var _doctype = require("../__examples__/doctype");

var _doctype2 = _interopRequireDefault(_doctype);

var _custom = require("../__examples__/custom");

var _custom2 = _interopRequireDefault(_custom);

var _externalPath = require("../__examples__/external-path");

var _externalPath2 = _interopRequireDefault(_externalPath);

var _colorBase = require("../__examples__/color-base");

var _colorBase2 = _interopRequireDefault(_colorBase);

var _colorDefault = require("../__examples__/color-default");

var _colorDefault2 = _interopRequireDefault(_colorDefault);

var _colorError = require("../__examples__/color-error");

var _colorError2 = _interopRequireDefault(_colorError);

var _colorWarning = require("../__examples__/color-warning");

var _colorWarning2 = _interopRequireDefault(_colorWarning);

var _sizesExtraSmall = require("../__examples__/sizes-extra-small");

var _sizesExtraSmall2 = _interopRequireDefault(_sizesExtraSmall);

var _sizesSmall = require("../__examples__/sizes-small");

var _sizesSmall2 = _interopRequireDefault(_sizesSmall);

var _sizesMedium = require("../__examples__/sizes-medium");

var _sizesMedium2 = _interopRequireDefault(_sizesMedium);

var _sizesLarge = require("../__examples__/sizes-large");

var _sizesLarge2 = _interopRequireDefault(_sizesLarge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
test('Icon Category Standard HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_standard2.default)).toMatchSnapshot();
});
test('Icon Category Utility HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_utility2.default)).toMatchSnapshot();
});
test('Icon Category Action HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_action2.default)).toMatchSnapshot();
});
test('Icon Category Doctype HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_doctype2.default)).toMatchSnapshot();
});
test('Icon Category Custom HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_custom2.default)).toMatchSnapshot();
});
test('Icon Category External Path HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_externalPath2.default)).toMatchSnapshot();
});
test('Icon Size X-Small HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_sizesExtraSmall2.default)).toMatchSnapshot();
});
test('Icon Size Small HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_sizesSmall2.default)).toMatchSnapshot();
});
test('Icon Size Medium HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_sizesMedium2.default)).toMatchSnapshot();
});
test('Icon Size Large HTML Snapshot', function () {
  expect((0, _snapshotHelpers.renderMarkup)(_sizesLarge2.default)).toMatchSnapshot();
});