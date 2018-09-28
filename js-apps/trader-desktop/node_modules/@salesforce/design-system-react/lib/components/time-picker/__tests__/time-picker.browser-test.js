"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _timePicker = require("../../time-picker");

var _timePicker2 = _interopRequireDefault(_timePicker);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Simulate = _reactAddonsTestUtils2.default.Simulate,
    findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
var mockCallback = sinon.spy();

var formatter = function formatter(date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

var dateTimeNow = new Date();
var defaultStrValue = formatter(dateTimeNow);
var defaultProps = {
  onDateChange: function onDateChange() {},
  value: dateTimeNow,
  strValue: defaultStrValue
};
describe('SLDSTimepicker: ', function () {
  describe('Timepicker Value Prop Change', function () {
    it('displays a modified state upon changing props', function () {
      var futureDateTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var TestTimepicker = (0, _react.createFactory)((0, _createReactClass2.default)({
        displayName: "TestTimepicker",
        getInitialState: function getInitialState() {
          // force the state to have a future dateTime...
          return {
            isOpen: false,
            value: futureDateTime,
            strValue: formatter(futureDateTime)
          };
        },
        render: function render() {
          return _react2.default.createElement(_iconSettings2.default, {
            iconPath: "/assets/icons"
          }, _react2.default.createElement(_timePicker2.default, _extends({
            ref: "timePicker"
          }, defaultProps)));
        }
      }));

      var parent = _reactAddonsTestUtils2.default.renderIntoDocument(TestTimepicker());

      parent.refs.timePicker.state.strValue.should.eql(defaultStrValue);
    });
  });
});