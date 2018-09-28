"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _iconGroup = require("../__examples__/icon-group");

var _iconGroup2 = _interopRequireDefault(_iconGroup);

var _moreIcon = require("../__examples__/more-icon");

var _moreIcon2 = _interopRequireDefault(_moreIcon);

var _checkbox = require("../__examples__/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxError = require("../__examples__/checkbox-error");

var _checkboxError2 = _interopRequireDefault(_checkboxError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Button Group IconGroup',
  test: test,
  Component: _iconGroup2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Button Group MoreIcon',
  test: test,
  Component: _moreIcon2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Button Group Checkbox',
  test: test,
  Component: _checkbox2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Button Group Checkbox Error',
  test: test,
  Component: _checkboxError2.default
});