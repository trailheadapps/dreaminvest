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

var _filter = require("../../filter");

var _filter2 = _interopRequireDefault(_filter);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */
// Import your internal dependencies (for example):

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
  render: function render() {
    return _react2.default.createElement(_popover2.default, this.props, _react2.default.createElement(_button2.default, {
      label: "Trigger Popover"
    }));
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

describe('SLDSFilter', function () {
  var mountNode;
  var portalWrapper;
  var wrapper; // BASIC STRUCTURE

  describe('Add custom props to Filter Popover', function () {
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
    it('Filter could take popover as a prop and use the props of popover to render, verifies the custom popover className', function () {
      var demoPopover = _react2.default.createElement(DemoComponent, {
        className: "custom-filter-popover",
        isOpen: true,
        position: "absolute"
      });

      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_filter2.default, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover
      })), {
        attachTo: mountNode
      });
      (0, _chai.expect)(wrapper.find('.custom-filter-popover')).to.exist;
    });
  });
  describe('On click handler when clicking on filter', function () {
    var _this2 = this;

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
    it('Filter could take onClick prop and trigger this callback during filter click', function (done) {
      var demoPopover = _react2.default.createElement(DemoComponent, {
        className: "custom-filter-popover"
      });

      var onFilterClicked = false;

      var onClick = function onClick() {
        onFilterClicked = true;
      };

      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_filter2.default, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover,
        onClick: onClick
      })), {
        attachTo: mountNode
      });
      setTimeout(function () {
        var filterButton = wrapper.find('.slds-filters__item .slds-button--reset');
        filterButton.simulate('click', {});
        (0, _chai.expect)(onFilterClicked).to.be.true;
        done();
      }, 0);
    });
  });
});