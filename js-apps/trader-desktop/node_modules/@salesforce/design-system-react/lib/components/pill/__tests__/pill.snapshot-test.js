"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _base = require("../__examples__/base");

var _base2 = _interopRequireDefault(_base);

var _icon = require("../__examples__/icon");

var _icon2 = _interopRequireDefault(_icon);

var _container = require("../__examples__/container");

var _container2 = _interopRequireDefault(_container);

var _listboxBare = require("../__examples__/listbox-bare");

var _listboxBare2 = _interopRequireDefault(_listboxBare);

var _listbox = require("../__examples__/listbox");

var _listbox2 = _interopRequireDefault(_listbox);

var _listboxIcon = require("../__examples__/listbox-icon");

var _listboxIcon2 = _interopRequireDefault(_listboxIcon);

var _listboxAvatar = require("../__examples__/listbox-avatar");

var _listboxAvatar2 = _interopRequireDefault(_listboxAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Linked, Unlinked, Truncated',
  test: test,
  Component: _base2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Icon, Avatar, Error',
  test: test,
  Component: _icon2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Bare',
  test: test,
  Component: _listboxBare2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Pill Container',
  test: test,
  Component: _container2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Listbox Of Pill Options',
  test: test,
  Component: _listbox2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Listbox Of Pill Options With Icon',
  test: test,
  Component: _listboxIcon2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Listbox Of Pill Options With Avatar',
  test: test,
  Component: _listboxAvatar2.default
});