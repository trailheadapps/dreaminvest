"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _buttonGroup = require("../../button-group");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require("../../button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
describe('SLDSButtonGroup: ', function () {
  var generateButtonGroup = function generateButtonGroup(buttonGroupInstance) {
    var reactCmp = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement("div", null, buttonGroupInstance)));

    return _reactDom2.default.findDOMNode(reactCmp).children[0];
  };

  describe('component renders', function () {
    it('buttonGroup renders', function () {
      var instance = _react2.default.createElement(_buttonGroup2.default, null, _react2.default.createElement(_button2.default, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));

      var buttonGroup = generateButtonGroup(instance);
      (0, _chai.expect)(buttonGroup).to.not.equal(undefined);
    });
    it('renders proper attributes', function () {
      var instance = _react2.default.createElement(_buttonGroup2.default, null, _react2.default.createElement(_button2.default, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));

      var buttonGroup = generateButtonGroup(instance);
      var role = buttonGroup.getAttribute('role');
      (0, _chai.expect)(role).to.equal('group');
    });
    it('renders children', function () {
      var instance = _react2.default.createElement(_buttonGroup2.default, null, _react2.default.createElement(_button2.default, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), _react2.default.createElement(_button2.default, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));

      var buttonGroup = generateButtonGroup(instance);
      var children = buttonGroup.getElementsByTagName('button');
      (0, _chai.expect)(children.length).to.equal(3);
    });
  });
  describe('component behavior works', function () {
    it('first button in group invokes method from props', function () {
      var onClick = sinon.spy();

      var instance = _react2.default.createElement(_buttonGroup2.default, null, _react2.default.createElement(_button2.default, {
        label: "Refresh",
        variant: "neutral",
        onClick: onClick
      }), _react2.default.createElement(_button2.default, {
        label: "Edit",
        variant: "neutral"
      }), _react2.default.createElement(_button2.default, {
        label: "Save",
        variant: "neutral"
      }), _react2.default.createElement(_button2.default, {
        label: "More Options",
        variant: "icon",
        iconCategory: "utility",
        iconName: "down",
        iconVariant: "border-filled"
      }));

      var buttonGroup = generateButtonGroup(instance);
      var firstBtn = buttonGroup.getElementsByTagName('button')[0];

      _reactAddonsTestUtils2.default.Simulate.click(firstBtn);

      (0, _chai.expect)(onClick.calledOnce).to.be.true;
    });
  });
});