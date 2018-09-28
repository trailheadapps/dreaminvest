"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _snapshotHelpers = require("../../../tests/snapshot-helpers");

var _iconSettings = require("../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _examples = require("../__examples__/examples");

var ProgressRing = _interopRequireWildcard(_examples);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
Object.keys(ProgressRing).forEach(function (name) {
  var wrapper = function wrapper(element) {
    return function () {
      return _react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, element());
    };
  };

  test("".concat(name, " DOM Snapshot"), function () {
    expect((0, _snapshotHelpers.renderMarkup)(wrapper(ProgressRing[name]))).toMatchSnapshot();
  });
});