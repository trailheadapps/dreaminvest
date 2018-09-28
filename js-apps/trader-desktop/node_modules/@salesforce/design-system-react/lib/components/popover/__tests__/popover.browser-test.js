"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require("enzyme");

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _popover = require("../../popover");

var _popover2 = _interopRequireDefault(_popover);

var _button = require("../../button");

var _button2 = _interopRequireDefault(_button);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

var defaultProps = {
  id: 'sample-popover',
  body: _react2.default.createElement("span", {
    id: "sample-body"
  }, "This is the body"),
  heading: _react2.default.createElement("span", {
    id: "sample-heading"
  }, "This is the heading")
};
var defaultIds = {
  trigger: defaultProps.id,
  popover: "".concat(defaultProps.id, "-popover"),
  body: "".concat(defaultProps.id, "-dialog-body"),
  heading: "".concat(defaultProps.id, "-dialog-heading")
};

var getNodes = function getNodes(_ref) {
  var wrapper = _ref.wrapper;
  return {
    popover: wrapper.find('.slds-popover'),
    closeButton: wrapper.find('.slds-popover__close')
  };
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */


var DemoComponent = (0, _createReactClass2.default)({
  displayName: 'PopoverDemoComponent',
  propTypes: {
    isOpen: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  getInitialState: function getInitialState() {
    return {};
  },
  // event handlers
  render: function render() {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement("div", null, _react2.default.createElement(_popover2.default, this.props, _react2.default.createElement(_button2.default, {
      label: "Trigger Popover"
    })), _react2.default.createElement(_button2.default, {
      id: "not-the-trigger",
      label: "Not Trigger Popover"
    })));
  }
});
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */

describe('SLDSPopover', function () {
  var _this2 = this;

  var mountNode;
  var wrapper; // BASIC STRUCTURE

  describe('Default structure and css', function () {
    var _this = this;

    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('is open, has heading, body, close button', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      (0, _chai.expect)(wrapper.find("#".concat(defaultIds.heading))).to.exist;
      (0, _chai.expect)(wrapper.find("#".concat(defaultIds.body))).to.exist;
      (0, _chai.expect)(wrapper.find('.slds-popover__close')).to.exist;
    });
  });
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this2
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has aria-labelledby/aria-describedby on popover', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find('#sample-popover');
      var popover = wrapper.find("#".concat(defaultIds.popover));
      (0, _chai.expect)(popover.node.getAttribute('aria-labelledby')).to.equal("".concat(defaultIds.heading));
      (0, _chai.expect)(popover.node.getAttribute('aria-describedby')).to.equal("".concat(defaultIds.body));
    });
  }); // PROPS AND CHILDREN

  describe('Optional props', function () {
    var popoverBackgroundColor = 'rgb(255, 80, 121)';
    var containerBackgroundColor = 'rgb(255, 127, 80)'; // What should be present in the DOM when style and className are applied?

    var optionalProps = {
      className: 'sample-classname',
      assistiveText: {
        closeButton: 'Shut it now!'
      },
      containerClassName: 'sample-container-classname',
      containerStyle: {
        background: containerBackgroundColor
      },
      footer: _react2.default.createElement("p", {
        id: "footer"
      }, "Footer"),
      style: {
        background: popoverBackgroundColor
      }
    };
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this2
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has correct className, assistiveText, style, and footer', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, _extends({}, optionalProps, {
        isOpen: true
      })), {
        attachTo: mountNode
      });
      var popover = wrapper.find("#".concat(defaultIds.popover));
      (0, _chai.expect)(popover.node.classList.contains(optionalProps.className)).to.be.true;
      (0, _chai.expect)(popover.find('.slds-popover__close').node.textContent).to.equal(optionalProps.assistiveText.closeButton);
      (0, _chai.expect)(popover.find('#footer')).to.exist;
      (0, _chai.expect)(popover.node.style.background).to.equal(popoverBackgroundColor);
    });
  }); // EVENTS

  describe('Mouse and keyboard interactions', function () {
    /* Test event callback functions using Simulate. For more information, view
     * https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/simulate.md
     */
    describe('onClick', function () {
      var _this3 = this;

      var triggerClicked = sinon.spy();
      beforeEach(function () {
        mountNode = (0, _enzymeHelpers.createMountNode)({
          context: _this3
        });
      });
      afterEach(function () {
        (0, _enzymeHelpers.destroyMountNode)({
          wrapper: wrapper,
          mountNode: mountNode
        });
      });
      it('calls onClick handler on trigger, click on popover close closes', function (done) {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
          onClick: triggerClicked,
          onClose: function onClose() {
            setTimeout(function () {
              var popover = wrapper.find("#".concat(defaultIds.popover));
              (0, _chai.expect)(popover.node).to.not.exist;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            var popover = wrapper.find("#".concat(defaultIds.popover));
            (0, _chai.expect)(popover).to.exist;
            (0, _chai.expect)(triggerClicked.callCount).to.equal(1);
            popover.find('.slds-popover__close').simulate('click', {});
          }
        }), {
          attachTo: mountNode
        });
        var trigger = wrapper.find("#".concat(defaultIds.trigger));
        trigger.simulate('click', {});
      });
      it('opens on click, closes on ESC', function (done) {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
          onClose: function onClose() {
            setTimeout(function () {
              var popover = wrapper.find("#".concat(defaultIds.popover));
              (0, _chai.expect)(popover.node).to.not.exist;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            var popover = wrapper.find("#".concat(defaultIds.popover));
            popover.simulate('keyDown', {
              key: 'Esc',
              keyCode: 27,
              which: 27
            });
          }
        }), {
          attachTo: mountNode
        });
        var trigger = wrapper.find("#".concat(defaultIds.trigger));
        trigger.simulate('click', {});
      });
    });
  });
  describe('focus has moved to dialog', function () {
    var _this4 = this;

    var triggerClicked = sinon.spy();
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this4
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('focus moves to correct node on open', function (done) {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        onClick: triggerClicked,
        onOpen: function onOpen() {
          var nodes = getNodes({
            wrapper: wrapper
          });
          (0, _chai.expect)(document.activeElement.id).to.equal("".concat(defaultIds.popover));
          done();
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find("#".concat(defaultIds.trigger));
      trigger.simulate('click', {});
    });
  });
  describe('Disabled', function () {
    var _this5 = this;

    var triggerClicked = sinon.spy();
    var popoverOpened = sinon.spy();
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this5
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onOpen is not called when disabled', function (done) {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        disabled: true,
        onClick: triggerClicked,
        onOpen: popoverOpened
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find("#".concat(defaultIds.trigger));
      trigger.simulate('click', {});
      setTimeout(function () {
        (0, _chai.expect)(popoverOpened.callCount).to.equal(0);
        done();
      }, 200);
    });
  });
});