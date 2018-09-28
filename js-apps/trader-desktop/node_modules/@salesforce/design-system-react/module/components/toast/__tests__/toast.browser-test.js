function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import Toast from '../../toast'; // `~` is replaced with design-system-react at runtime

import ToastContainer from '../../toast/container'; // `~` is replaced with design-system-react at runtime

import Icon from '../../icon'; // `~` is replaced with design-system-react at runtime

import Button from '../../button'; // `~` is replaced with design-system-react at runtime

import IconSettings from '../../icon-settings';
chai.use(chaiEnzyme());

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent(props) {
    var _this;

    _classCallCheck(this, DemoComponent);

    _this = _possibleConstructorReturn(this, (DemoComponent.__proto__ || Object.getPrototypeOf(DemoComponent)).call(this, props));
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement(ToastContainer, null, this.state.isOpen ? React.createElement(Toast, _extends({
        dismissible: true,
        icon: React.createElement(Icon, {
          category: "utility",
          name: "user"
        }),
        labels: {
          heading: 'Logged in as John Smith (johnsmith@acme.com).',
          headingLink: 'Log out'
        },
        onRequestClose: function onRequestClose() {
          _this2.setState({
            isOpen: false
          });
        }
      }, this.props)) : null)));
    }
  }]);

  return DemoComponent;
}(React.Component);

DemoComponent.displayName = 'ToastExample';
describe('SLDSToast: ', function () {
  var wrapper;
  var onClickHeadingLink = sinon.spy();
  describe('Dismiss Toast', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onClickHeadingLink: onClickHeadingLink
    })));
    afterEach(unmountComponent);
    /* Please notice the of `function () {}` and not () => {}.
     * It allows access to the Mocha test context via `this`.
     */

    it('calls onRequestClose handler', function () {
      var button = this.wrapper.find('.slds-notify__close'); // If applicable, use second parameter to pass the data object

      expect(this.wrapper.find('.slds-notify').length).to.equal(1);
      button.simulate('click', {});
      expect(this.wrapper.find('.slds-notify').length).to.equal(0);
    });
    it('calls onClickHeadingLink handler', function () {
      var link = this.wrapper.find('a'); // If applicable, use second parameter to pass the data object

      link.simulate('click', {});
      expect(onClickHeadingLink.calledOnce).to.be.true;
    });
  });
  describe('Toast with duration auto-closes itself', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      duration: 500
    }))); // afterEach(unmountComponent);

    /* Please notice the of `function () {}` and not () => {}.
     * It allows access to the Mocha test context via `this`.
     */

    it('it calls onRequestClose after 500ms', function (done) {
      var _this3 = this;

      expect(this.wrapper.find('.slds-notify').length).to.equal(1);
      setTimeout(function () {
        expect(_this3.wrapper.find('.slds-notify').length).to.equal(0);
        done();
      }, 800);
    });
  });
});
//# sourceMappingURL=toast.browser-test.js.map