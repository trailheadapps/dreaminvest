function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/no-string-refs */
import React, { createFactory } from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import assign from 'lodash.assign';
import SLDSTimepicker from '../../time-picker';
import IconSettings from '../../icon-settings';
var Simulate = TestUtils.Simulate,
    findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
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
      var TestTimepicker = createFactory(createReactClass({
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
          return React.createElement(IconSettings, {
            iconPath: "/assets/icons"
          }, React.createElement(SLDSTimepicker, _extends({
            ref: "timePicker"
          }, defaultProps)));
        }
      }));
      var parent = TestUtils.renderIntoDocument(TestTimepicker());
      parent.refs.timePicker.state.strValue.should.eql(defaultStrValue);
    });
  });
});
//# sourceMappingURL=time-picker.browser-test.js.map