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

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _progressIndicator = require("../../progress-indicator");

var _progressIndicator2 = _interopRequireDefault(_progressIndicator);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Adds all of the Mocha (eg `it` and `should`) and sinon testing global
 * variables to the global namespace for eslint purposes.
 */

/* eslint-env mocha */

/* global sinon */
// Additional modifiers to [eslint-config-slds](https://github.com/salesforce-ux/eslint-config-slds) for convenience

/* eslint-disable no-console */

/* eslint-disable no-unused-expressions */

/* eslint-disable max-len */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable react/display-name */
// Import your external dependencies

/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */
var Simulate = _reactAddonsTestUtils2.default.Simulate,
    findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
var defaultProps = {
  id: 'sample-progress-indicator'
};
var mockCallback = sinon.spy();
var DemoComponent = (0, _createReactClass2.default)({
  displayName: 'ProgressIndicatorDemoComponent',
  propTypes: {
    onStepClick: mockCallback,
    onStepFocus: mockCallback
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  render: function render() {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_progressIndicator2.default, this.props));
  }
});
var steps = [{
  id: 0,
  label: 'tooltip label #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];
var sixSteps = [{
  id: 0,
  label: 'custom tooltip #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}, {
  id: 5,
  label: 'tooltip label #6'
}];
describe('SLDSProgressIndicator: ', function () {
  describe('Basic Props Render', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2)
    })));
    afterEach(_enzymeHelpers.unmountComponent); // PROPS

    it('has five steps by default', function () {
      var item = this.wrapper.find('.slds-progress').find('li');
      (0, _chai.expect)(item).to.have.length(5);
    });
    it('has only one active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      (0, _chai.expect)(item).to.have.length(1);
    });
    it('does not have an error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      (0, _chai.expect)(item).to.have.length(0);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      (0, _chai.expect)(item).to.have.length(2);
    });
    it('has a white background', function () {
      var item = this.wrapper.find('.slds-progress_shade');
      (0, _chai.expect)(item).to.have.length(0);
    });
  });
  describe('Within-Modal Props Render (Without Error)', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      variant: "modal"
    })));
    afterEach(_enzymeHelpers.unmountComponent); // PROPS

    it('has 5 steps by default', function () {
      var item = this.wrapper.find('.slds-progress').find('li');
      (0, _chai.expect)(item).to.have.length(5);
    });
    it('has no error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      (0, _chai.expect)(item).to.have.length(0);
    });
    it('has 1 active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      (0, _chai.expect)(item).to.have.length(1);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      (0, _chai.expect)(item).to.have.length(2);
    });
    it('has a gray background', function () {
      var item = this.wrapper.find('.slds-progress_shade');
      (0, _chai.expect)(item).to.have.length(1);
    });
  });
  describe('Within-Modal Props Render (With Error)', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      errorSteps: steps.slice(2, 3),
      completedSteps: steps.slice(0, 2),
      variant: "modal"
    })));
    afterEach(_enzymeHelpers.unmountComponent); // PROPS

    it('has 1 error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      (0, _chai.expect)(item).to.have.length(1);
    });
    it('has no active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      (0, _chai.expect)(item).to.have.length(0);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      (0, _chai.expect)(item).to.have.length(2);
    });
  });
  describe('Tooltip Props Render', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: sixSteps,
      selectedStep: sixSteps[2],
      errorSteps: sixSteps.slice(2, 3),
      completedSteps: sixSteps.slice(0, 2)
    })));
    afterEach(_enzymeHelpers.unmountComponent); // PROPS

    it('has an error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      (0, _chai.expect)(item).to.have.length(1);
    });
    it('has a tooltip attached to every step', function () {
      var item = this.wrapper.find('.slds-progress').find('.slds-tooltip-trigger');
      (0, _chai.expect)(item).to.have.length(6);
    });
  });
  describe('Click Event', function () {
    var clickHandler = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      onStepClick: clickHandler
    })));
    afterEach(_enzymeHelpers.unmountComponent); // EVENTS

    it('calls onStepClick()', function () {
      var step = this.wrapper.find('.slds-progress').find('li').find('button').first().node; // step.simulate('click'); <-- this is causing some errors on tab tests

      Simulate.click(step);
      (0, _chai.expect)(clickHandler.callCount).to.equal(1);
    });
  });
  describe('Assistive Technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    var focusHandler = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      onStepFocus: focusHandler
    })));
    afterEach(_enzymeHelpers.unmountComponent); // A11Y FEATURES

    it('specifies the role for progress bar', function () {
      var progressbarRole = this.wrapper.find('div[role="progressbar"]');
      (0, _chai.expect)(progressbarRole).to.have.length(1);
    });
    it('renders assistive text for progress bar', function () {
      var item = this.wrapper.find('.slds-progress-bar').find('.slds-assistive-text').first();
      (0, _chai.expect)(item.text()).to.include('Progress:');
      (0, _chai.expect)(item.text()).to.include('%');
    });
  });
  /**
   * TODO in the future:
   * we may want to extend test cases when TetherJS is removed for future dev
   * The following cases may be considered:
   *   1. test tooltips behave properly (show/hide/with correct label) *on hover*
   *   2. test tooltips behave properly *on focus/blur*
   */
});