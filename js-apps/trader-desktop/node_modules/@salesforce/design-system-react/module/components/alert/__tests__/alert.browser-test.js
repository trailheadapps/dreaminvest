function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import Alert from '../';
import AlertContainer from '../container';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
chai.use(chaiEnzyme());

var DemoComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DemoComponent, _Component);

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
      }, React.createElement("div", null, React.createElement(AlertContainer, null, this.state.isOpen ? React.createElement(Alert, {
        dismissible: true,
        icon: React.createElement(Icon, {
          category: "utility",
          name: "user"
        }),
        labels: {
          heading: 'Logged in as John Smith (johnsmith@acme.com).',
          headingLink: 'Log out'
        },
        onClickHeadingLink: this.props.onClickHeadingLink,
        onRequestClose: function onRequestClose() {
          _this2.setState({
            isOpen: false
          });
        }
      }) : null)));
    }
  }]);

  return DemoComponent;
}(Component);

DemoComponent.displayName = 'AlertExample';
describe('SLDSAlert: ', function () {
  var wrapper;
  var onClickHeadingLink = sinon.spy();
  describe('Dismiss alert', function () {
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
});
//# sourceMappingURL=alert.browser-test.js.map