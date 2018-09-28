"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _baseOpen = require("../__examples__/snapshot/base-open");

var _baseOpen2 = _interopRequireDefault(_baseOpen);

var _baseOpenMenuSubHeader = require("../__examples__/snapshot/base-open-menu-sub-header");

var _baseOpenMenuSubHeader2 = _interopRequireDefault(_baseOpenMenuSubHeader);

var _baseOpenMenuInheritWidthOf = require("../__examples__/snapshot/base-open-menu-inheritWidthOf");

var _baseOpenMenuInheritWidthOf2 = _interopRequireDefault(_baseOpenMenuInheritWidthOf);

var _baseOpenClassName = require("../__examples__/snapshot/base-open-class-name");

var _baseOpenClassName2 = _interopRequireDefault(_baseOpenClassName);

var _baseSelected = require("../__examples__/snapshot/base-selected");

var _baseSelected2 = _interopRequireDefault(_baseSelected);

var _baseLabelRequired = require("../__examples__/snapshot/base-label-required");

var _baseLabelRequired2 = _interopRequireDefault(_baseLabelRequired);

var _inlineSingleSelection = require("../__examples__/snapshot/inline-single-selection");

var _inlineSingleSelection2 = _interopRequireDefault(_inlineSingleSelection);

var _inlineSingleSelectionSelected = require("../__examples__/snapshot/inline-single-selection-selected");

var _inlineSingleSelectionSelected2 = _interopRequireDefault(_inlineSingleSelectionSelected);

var _inlineMultipleSelection = require("../__examples__/snapshot/inline-multiple-selection");

var _inlineMultipleSelection2 = _interopRequireDefault(_inlineMultipleSelection);

var _inlineMultipleSelectionSelected = require("../__examples__/snapshot/inline-multiple-selection-selected");

var _inlineMultipleSelectionSelected2 = _interopRequireDefault(_inlineMultipleSelectionSelected);

var _readonlySingleSelection = require("../__examples__/snapshot/readonly-single-selection");

var _readonlySingleSelection2 = _interopRequireDefault(_readonlySingleSelection);

var _readonlySingleSelectionSelected = require("../__examples__/snapshot/readonly-single-selection-selected");

var _readonlySingleSelectionSelected2 = _interopRequireDefault(_readonlySingleSelectionSelected);

var _readonlySingleSelectionSelectedOpen = require("../__examples__/snapshot/readonly-single-selection-selected-open");

var _readonlySingleSelectionSelectedOpen2 = _interopRequireDefault(_readonlySingleSelectionSelectedOpen);

var _readonlyMultipleSelection = require("../__examples__/snapshot/readonly-multiple-selection");

var _readonlyMultipleSelection2 = _interopRequireDefault(_readonlyMultipleSelection);

var _readonlyMultipleSelectionSingleItemSelected = require("../__examples__/snapshot/readonly-multiple-selection-single-item-selected");

var _readonlyMultipleSelectionSingleItemSelected2 = _interopRequireDefault(_readonlyMultipleSelectionSingleItemSelected);

var _readonlyMultipleSelectionMultipleItemsSelected = require("../__examples__/snapshot/readonly-multiple-selection-multiple-items-selected");

var _readonlyMultipleSelectionMultipleItemsSelected2 = _interopRequireDefault(_readonlyMultipleSelectionMultipleItemsSelected);

var _baseCustomMenuItemOpen = require("../__examples__/snapshot/base-custom-menu-item-open");

var _baseCustomMenuItemOpen2 = _interopRequireDefault(_baseCustomMenuItemOpen);

var _readonlySingleSelectionCustomMenuItem = require("../__examples__/snapshot/readonly-single-selection-custom-menu-item");

var _readonlySingleSelectionCustomMenuItem2 = _interopRequireDefault(_readonlySingleSelectionCustomMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open',
  test: test,
  Component: _baseOpen2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Selected',
  test: test,
  Component: _baseSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open Custom Class Name',
  test: test,
  Component: _baseOpenClassName2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Label Required',
  test: test,
  Component: _baseLabelRequired2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open Menu Sub Header',
  test: test,
  Component: _baseOpenMenuSubHeader2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Open Menu Inherit Width Of Menu',
  test: test,
  Component: _baseOpenMenuInheritWidthOf2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Inline Single Selection',
  test: test,
  Component: _inlineSingleSelection2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Inline Single Selection Selected',
  test: test,
  Component: _inlineSingleSelectionSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Inline Multiple Selection',
  test: test,
  Component: _inlineMultipleSelection2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Inline Multiple Selection Selected',
  test: test,
  Component: _inlineMultipleSelectionSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Base Custom Menu Item Open',
  test: test,
  Component: _baseCustomMenuItemOpen2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Single Selection',
  test: test,
  Component: _readonlySingleSelection2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Single Selection Selected',
  test: test,
  Component: _readonlySingleSelectionSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Single Selection Selected Open',
  test: test,
  Component: _readonlySingleSelectionSelectedOpen2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Multiple Selection',
  test: test,
  Component: _readonlyMultipleSelection2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Multiple Selection Single Item Selected',
  test: test,
  Component: _readonlyMultipleSelectionSingleItemSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Multiple Selection Multiple Items Selected',
  test: test,
  Component: _readonlyMultipleSelectionMultipleItemsSelected2.default
});
(0, _snapshotHelpers.testDOMandHTML)({
  name: 'Readonly Single Selection Custom Menu Item Open',
  test: test,
  Component: _readonlySingleSelectionCustomMenuItem2.default
});