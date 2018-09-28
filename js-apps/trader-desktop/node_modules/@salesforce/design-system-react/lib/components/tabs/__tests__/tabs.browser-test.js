"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _tabs = require("../../tabs");

var _tabs2 = _interopRequireDefault(_tabs);

var _panel = require("../../tabs/panel");

var _panel2 = _interopRequireDefault(_panel);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

var Simulate = _reactAddonsTestUtils2.default.Simulate;
var COMPONENT_CSS_CLASSES = {
  wrapper: 'slds-tabs--default--wrapper',
  base: 'slds-tabs--default',
  nav: 'slds-tabs--default__nav',
  item: 'slds-tabs--default__item',
  link: 'slds-tabs--default__link',
  content: 'slds-tabs--default__content',
  testClass: 'this-is-a-css-class-name'
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var TabsDemoComponent = (0, _createReactClass2.default)({
  displayName: 'TabsDemoComponent',
  // ### Prop Types
  propTypes: {
    /**
     * Class names to be added to the container element and is passed along to its children.
     */
    className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),

    /**
     * HTML `id` attribute of primary element that has `.slds-tabs--default` on it. Optional: If one is not supplied, a `shortid` will be created.
     */
    id: _propTypes2.default.string,

    /**
     * Function that triggers when a tab is selected.
     */
    onSelect: _propTypes2.default.func
  },
  render: function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        attributes = _objectWithoutProperties(_props, ["className", "id"]); // Delete all known props, so they don't get added to DOM


    delete attributes.selectedIndex;
    delete attributes.onSelect;
    delete attributes.children;
    delete attributes.id;
    return _react2.default.createElement("div", {
      className: (0, _classnames2.default)('slds-m-top--large', "".concat(COMPONENT_CSS_CLASSES.wrapper))
    }, _react2.default.createElement(_tabs2.default, _extends({
      className: (0, _classnames2.default)(className),
      id: id
    }, attributes), _react2.default.createElement(_panel2.default, {
      label: "Tab A"
    }, _react2.default.createElement("p", null, "This is tab A")), _react2.default.createElement(_panel2.default, {
      label: "Tab B",
      disabled: true
    }, _react2.default.createElement("p", null, "This is tab B."), _react2.default.createElement("p", null, "It is disabled.")), _react2.default.createElement(_panel2.default, {
      label: "Tab C"
    }, _react2.default.createElement("p", null, "This is tab C")), _react2.default.createElement(_panel2.default, {
      label: "Always No"
    }, _react2.default.createElement("p", null, "This one can not be selected from the tabs list because this example provides a custom ", _react2.default.createElement("code", null, "onSelct"), " function that retuns false when it is run, preventing the component\u2019s built-in handler from running, and thus the tab is never selected."), _react2.default.createElement("p", null, "Note that you ", _react2.default.createElement("em", null, "can"), " still see the panel if you hide the other tabs, because the tab/panel are not ", _react2.default.createElement("em", null, "disabled"), "."), _react2.default.createElement("p", null, "In other words, this should not be taken as an example of how to be sneaky about disabling tab selection, but rather that you can", ' ', _react2.default.createElement("strong", null, "do stuff"), " when a tab is selected by sending it a custom ", _react2.default.createElement("code", null, "onSelect"), " function."))));
  }
});
describe('Tabs', function () {
  // BASIC STRUCTURE
  describe('Default structure and CSS', function () {
    var id = 'this-is-an-id-for-testing';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      className: "".concat(COMPONENT_CSS_CLASSES.testClass),
      id: id,
      bar: "baz"
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Has a main wrapper with the proper class name.', function () {
      var myTabsWrapper = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.wrapper));
      (0, _chai.expect)(myTabsWrapper.hasClass(COMPONENT_CSS_CLASSES.wrapper)).to.be.true;
    });
    it('Has exactly one (1) tabs component, and has with the proper class name.', function () {
      var myTabs = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(myTabs.hasClass(COMPONENT_CSS_CLASSES.base)).to.be.true;
      (0, _chai.expect)(myTabs).to.have.length(1);
    });
    it('Has the custom id (this-is-an-id-for-testing) we supplied.', function () {
      var myTabs = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(myTabs).attr('id').to.equal(id);
    });
    it('Has exactly one (1) nav component, and has with the proper class name.', function () {
      var myTabsNav = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.nav));
      (0, _chai.expect)(myTabsNav.hasClass(COMPONENT_CSS_CLASSES.nav)).to.be.true;
      (0, _chai.expect)(myTabsNav).to.have.length(1);
    });
    it("Nav component builds proper ID (".concat(id, "-tabs__nav) because it inherits Tabs id property and appends \"-slds-tabs__nav\" to it."), function () {
      var myTabsNav = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.nav));
      (0, _chai.expect)(myTabsNav).attr('id').to.equal("".concat(id, "-slds-tabs__nav"));
    });
    it("Has exactly four (4) <Tab /> components, each with the proper class name (".concat(COMPONENT_CSS_CLASSES.item, ")."), function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item)).forEach(function (node) {
        (0, _chai.expect)(node.hasClass(COMPONENT_CSS_CLASSES.item)).to.equal(true);
      });
      (0, _chai.expect)(myTabsListItems).to.have.length(4);
    });
    it('Has only one (1) tab with ".slds-disabled" class on it.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      (0, _chai.expect)(myTabsListItem).to.have.length(1);
    });
    it('Tab components have proper ID attributes because they inherit the Tabs "id" property and append "-slds-tabs--tab-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item)).forEach(function (node, index) {
        (0, _chai.expect)(node).to.have.attr('id', "".concat(id, "-slds-tabs--tab-").concat(index));
      });
    });
    it('TabPanel components have proper ID attributes because they inherit the Tabs "id" property and append "-slds-tabs--panel-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.panel)).forEach(function (node, index) {
        (0, _chai.expect)(node).to.have.attr('id', "".concat(id, "-slds-tabs--panel-").concat(index));
      });
    });
    it('Has the proper disabled class on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      (0, _chai.expect)(myTabsListItem.hasClass('slds-disabled')).to.equal(true);
    });
    it('Has the same number of tabs as panels.', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myTabsPanels = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.content));
      (0, _chai.expect)(myTabsListItems).to.have.length(4);
      (0, _chai.expect)(myTabsPanels).to.have.length(4);
    });
  });
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    var id = 'this-is-an-id-for-testing';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      className: "".concat(COMPONENT_CSS_CLASSES.testClass),
      id: id
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Tab components have proper "aria-controls" attribute because they inherit Tabs ID property and append "-slds-tabs--panel-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item)).forEach(function (node, index) {
        (0, _chai.expect)(node).to.have.attr('aria-controls', "".concat(id, "-slds-tabs--panel-").concat(index));
      });
    });
    it('TabPanel components have proper "aria-labelledby" attribute because they inherit Tabs ID property and append "-slds-tabs--tab-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.panel)).forEach(function (node, index) {
        (0, _chai.expect)(node).to.have.attr('aria-labelledby', "".concat(id, "-slds-tabs--tab-").concat(index));
      });
    });
    it('Has the aria-disabled attribute on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      (0, _chai.expect)(myTabsListItem).to.have.attr('aria-disabled').equal('true');
    });
    it('Has a tabindex of -1 on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      (0, _chai.expect)(myTabsListItem).to.have.attr('tabindex').equal('-1');
    });
  });
  describe('Interactions click', function () {
    var id = 'this-is-an-id-for-testing--click';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      id: id
    })));
    after(_enzymeHelpers.unmountComponent);
    it('New panel renders when a tab is clicked ', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-0"));
      var myThirdPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-2"));
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-hide')).to.equal(true);
      Simulate.click(myTabsListItems.nodes[2], {});
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-hide')).to.equal(false);
    });
  });
  describe('Interactions disabled', function () {
    var id = 'this-is-an-id-for-testing--disabled';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      id: id
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Disabled tab does not reveal new content ', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-0"));
      var mySecondPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-1"));
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      Simulate.click(myTabsListItems.nodes[1], {});
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
  describe('Interactions tabby', function () {
    var id = 'this-is-an-id-for-testing--tabby';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      id: id
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Can be tabbed into', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-0"));
      var myThirdPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-2"));
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-hide')).to.equal(true);
      Simulate.keyDown(myTabsListItems.nodes[0], {
        key: 'Tab',
        keyCode: 9,
        which: 9
      });
      Simulate.keyDown(myTabsListItems.nodes[0], {
        key: 'Right',
        keyCode: 39,
        which: 39
      });
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myThirdPanel.hasClass('slds-hide')).to.equal(false);
    });
  });
  describe('Interactions tabby disabled', function () {
    var id = 'this-is-an-id-for-testing--tabby-disabled';
    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      id: id
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Disabled tab can NOT be tabbed into', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-0"));
      var mySecondPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-1"));
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      Simulate.keyDown(myTabsListItems.nodes[0], {
        key: 'Tab',
        keyCode: 9,
        which: 9
      });
      Simulate.keyDown(myTabsListItems.nodes[0], {
        key: 'Right',
        keyCode: 39,
        which: 39
      });
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
  describe('Interactions intercept tab selection', function () {
    var id = 'this-is-an-id-for-testing--tab-intercept';

    function interceptTabSelect() {
      return false;
    }

    before((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(TabsDemoComponent, {
      id: id,
      onSelect: interceptTabSelect
    })));
    after(_enzymeHelpers.unmountComponent);
    it('Maintains the same tab selection when onSelect function returns false', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-0"));
      var mySecondPanel = this.wrapper.find("#".concat(id, "-slds-tabs--panel-1"));
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      Simulate.click(myTabsListItems.nodes[1], {});
      (0, _chai.expect)(myFirstPanel.hasClass('slds-show')).to.equal(true);
      (0, _chai.expect)(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-show')).to.equal(false);
      (0, _chai.expect)(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
});