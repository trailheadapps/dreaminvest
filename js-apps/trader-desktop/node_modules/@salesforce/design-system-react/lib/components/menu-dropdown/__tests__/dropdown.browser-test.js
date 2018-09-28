"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require("enzyme");

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _menuDropdown = require("../../menu-dropdown");

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _menuList = require("../../utilities/menu-list");

var _menuList2 = _interopRequireDefault(_menuList);

var _keyCode = require("../../../utilities/key-code");

var _keyCode2 = _interopRequireDefault(_keyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

var menuOptions = [{
  label: 'A super short',
  value: 'A0'
}, {
  label: 'B Option Super Super Long',
  value: 'B0'
}, {
  label: 'C Option',
  value: 'C0'
}, {
  disabled: true,
  label: 'D Option',
  value: 'D0'
}];
var defaultProps = {
  iconCategory: 'utility',
  iconName: 'down',
  id: 'sample-dropdown',
  label: 'Test',
  menuPosition: 'relative',
  openOn: 'click',
  options: menuOptions,
  placeholder: 'Select a contact',
  value: 'B0'
};
/* eslint-disable react/prop-types */

var DropdownCustomContent = function DropdownCustomContent(props) {
  return _react2.default.createElement("div", {
    id: "custom-dropdown-menu-content"
  }, _react2.default.createElement("div", {
    className: "slds-m-around--medium"
  }, _react2.default.createElement("div", {
    className: "slds-tile slds-tile--board slds-m-horizontal--small"
  }, _react2.default.createElement("p", {
    className: "tile__title slds-text-heading--small"
  }, "Art Vandelay"), _react2.default.createElement("div", {
    className: "slds-tile__detail"
  }, _react2.default.createElement("p", {
    className: "slds-truncate"
  }, _react2.default.createElement("a", {
    id: "custom-dropdown-menu-content-link",
    className: "slds-m-right--medium",
    href: "javascript:void(0);",
    onClick: props.onClick
  }, "Settings"), _react2.default.createElement("a", {
    href: "javascript:void(0);",
    onClick: props.onClick
  }, "Log Out"))))));
};

DropdownCustomContent.displayName = 'DropdownCustomContent';
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    _classCallCheck(this, DemoComponent);

    return _possibleConstructorReturn(this, (DemoComponent.__proto__ || Object.getPrototypeOf(DemoComponent)).apply(this, arguments));
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_menuDropdown2.default, _extends({}, defaultProps, this.props), this.props.children));
    }
  }]);

  return DemoComponent;
}(_react2.default.Component);

DemoComponent.displayName = 'DropdownDemoComponent';
DemoComponent.defaultProps = defaultProps;

var getNodes = function getNodes(_ref) {
  var wrapper = _ref.wrapper;
  return {
    trigger: wrapper.find('.slds-dropdown-trigger'),
    button: wrapper.find('.slds-dropdown-trigger button'),
    menu: wrapper.find('.slds-dropdown'),
    customContent: wrapper.find('#custom-dropdown-menu-content'),
    customContentLink: wrapper.find('#custom-dropdown-menu-content #custom-dropdown-menu-content-link')
  };
};
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */


describe('SLDSMenuDropdown', function () {
  var wrapper;
  describe('Styling', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      menuStyle: {
        height: '500px'
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct CSS classes and style', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu).to.exist;
      (0, _chai.expect)(openNodes.menu).to.have.style('height', '500px');
    });
  });
  describe('Custom Content Present', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      nubbinPosition: "top left",
      openOn: "click"
    }, _react2.default.createElement(DropdownCustomContent, null), _react2.default.createElement(_menuList2.default, {
      options: [{
        label: 'Custom Content Option'
      }].concat(menuOptions)
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has content with custom ID is present', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.customContent.nodes.length).to.equal(1);
    });
    it('closes when custom content is clicked', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.customContentLink.simulate('click', {});
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(closedNodes.customContent.nodes.length).to.equal(0);
    });
    it("has additional ListItem from list child's options prop", function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      var buttonId = nodes.trigger.node.id;
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.find("#".concat(buttonId, "-item-0")).text()).to.equal('Custom Content Option');
    });
  });
  describe('Clickable', function () {
    var onClick = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      onClick: onClick
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('does not expand on hover', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.trigger.simulate('mouseEnter', {});
      var hoverNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(hoverNodes.menu.nodes.length).to.equal(0);
    });
    it('expands/contracts on click', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.nodes.length).to.equal(1);
      openNodes.trigger.simulate('click', {});
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(closedNodes.menu.nodes.length).to.equal(0);
    });
    it('preserves click behavior', function () {
      onClick.reset();
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      (0, _chai.expect)(onClick.calledOnce);
    });
  });
  describe('Expanded', function () {
    var selected;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      onSelect: function onSelect(selectedOption) {
        selected = selectedOption;
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('selects an item on click', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.menu.find('li a').first().simulate('click', {});
      (0, _chai.expect)(selected.value).to.equal('A0');
    });
  });
  describe('accessible markup for label Dropdowns', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, null)));
    afterEach(_enzymeHelpers.unmountComponent);
    it('<ul> has role menu & aria-labelledby', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.find('ul').node.getAttribute('role')).to.equal('menu');
      (0, _chai.expect)(openNodes.menu.find('ul').node.getAttribute('aria-labelledby')).to.equal(openNodes.trigger.node.getAttribute('id'));
    });
    it('<a> inside <li> has role menuitem', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      var anchorRole = openNodes.menu.find('li a').first().node.getAttribute('role');
      var match = anchorRole === 'menuitem' || anchorRole === 'menuitemradio' || anchorRole === 'menuitemcheckbox';
      (0, _chai.expect)(match).to.be.true;
    });
    it('if option.disabled, add aria-disabled to <a> that has role menuitem', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      var lastItemAriaDisabledRole = openNodes.menu.find('li a').get(3).getAttribute('aria-disabled');
      (0, _chai.expect)(lastItemAriaDisabledRole).to.equal('true');
    });
  });
  describe('accessible markup for Icon Only Dropdowns', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      assistiveText: "more options",
      buttonVariant: "icon",
      checkmark: true,
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('<button> has assistiveText', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      console.log(nodes.button);
      (0, _chai.expect)(nodes.button.find('.slds-assistive-text').text()).to.equal('more options');
    });
  });
  describe('Keyboard behavior', function () {
    var selected;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      onSelect: function onSelect(selectedOption) {
        selected = selectedOption;
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('opens menu with enter', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.button.simulate('keyDown', _keyCode.keyObjects.ENTER);
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.nodes.length).to.equal(1);
    });
    it('opens menu with down arrow key', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.button.simulate('keyDown', _keyCode.keyObjects.DOWN);
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.nodes.length).to.equal(1);
    });
    it('selects an item with keyboard', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.menu.simulate('keyDown', _keyCode.keyObjects.DOWN);
      openNodes.menu.simulate('keyDown', _keyCode.keyObjects.DOWN);
      openNodes.menu.simulate('keyDown', _keyCode.keyObjects.ENTER);
      (0, _chai.expect)(selected.value).to.equal('B0');
    });
    it('closes Menu on esc', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(nodes.menu.nodes.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.nodes.length).to.equal(1);
      openNodes.menu.find('.slds-dropdown__item a').first().simulate('keyDown', _keyCode.keyObjects.ESCAPE);
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(closedNodes.menu.nodes.length).to.equal(0);
    });
  });
  describe('multiple selection', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      multiple: true,
      checkmark: true
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('selects multiple items and renders checkmarks', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      (0, _chai.expect)(openNodes.menu.find('.slds-dropdown__item svg').nodes.length).to.equal(1);
      openNodes.menu.find('.slds-dropdown__item a').first().simulate('click', {});
      (0, _chai.expect)(openNodes.menu.find('.slds-dropdown__item svg').nodes.length).to.equal(2);
    });
  }); // Hover and hybrid hover UX patterns are not approved UX patterns due to accessibility concerns

  describe('Hoverable', function () {
    var body;

    var renderDropdown = function renderDropdown(inst) {
      body = document.createElement('div');
      document.body.appendChild(body); // eslint-disable-next-line react/no-render-return-value

      return _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, inst), body);
    };

    function removeDropdownTrigger() {
      _reactDom2.default.unmountComponentAtNode(body);

      document.body.removeChild(body);
    }

    var createDropdown = function createDropdown(props) {
      return _react2.default.createElement(_menuDropdown2.default, (0, _lodash2.default)({}, defaultProps, props));
    };

    createDropdown.displayName = 'createDropdown';

    var dropItDown = function dropItDown(props, children) {
      return renderDropdown(createDropdown(props, children));
    };

    var getMenu = function getMenu(dom) {
      return dom.querySelector('.slds-dropdown');
    };

    var cmp;
    var btn;
    beforeEach(function () {
      cmp = dropItDown({
        buttonClassName: 'dijkstrafied',
        openOn: 'hover'
      });
      btn = (0, _reactAddonsTestUtils.findRenderedDOMComponentWithClass)(cmp, 'slds-dropdown-trigger');
    });
    afterEach(function () {
      removeDropdownTrigger(btn);
    });
    it('gives the button correct aria properties', function () {
      (0, _chai.expect)(btn.firstChild.getAttribute('aria-haspopup')).to.equal('true');
    });
    it('sets the label', function () {
      (0, _chai.expect)(btn.textContent).to.equal('Test');
    });
    it('expands the dropdown on hover', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);

      _reactAddonsTestUtils.Simulate.mouseEnter(btn, {});

      (0, _chai.expect)(getMenu(body).className).to.include('slds-dropdown');

      _reactAddonsTestUtils.Simulate.mouseLeave(btn, {});
    });
    it('closes on blur based on timeout delay', function (done) {
      (0, _chai.expect)(getMenu(body)).to.equal(null);

      _reactAddonsTestUtils.Simulate.mouseEnter(btn, {});

      _reactAddonsTestUtils.Simulate.mouseLeave(btn);

      (0, _chai.expect)(getMenu(body)).to.not.equal(null);
      setTimeout(function () {
        (0, _chai.expect)(getMenu(body)).to.equal(null);
        done();
      }, 600);
    });
    it("doesn't close on quick hover outside", function (done) {
      (0, _chai.expect)(getMenu(body)).to.equal(null);

      _reactAddonsTestUtils.Simulate.mouseEnter(btn, {});

      _reactAddonsTestUtils.Simulate.mouseLeave(btn);

      setTimeout(function () {
        (0, _chai.expect)(getMenu(body)).to.not.equal(null);
        setTimeout(function () {
          (0, _chai.expect)(getMenu(body)).to.equal(null);
          done();
        }, 600);
      }, 100);
    });
  });
  describe('Hybrid-able', function () {
    var body;

    var renderDropdown = function renderDropdown(inst) {
      body = document.createElement('div');
      document.body.appendChild(body); // eslint-disable-next-line react/no-render-return-value

      return _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, inst), body);
    };

    function removeDropdownTrigger() {
      _reactDom2.default.unmountComponentAtNode(body);

      document.body.removeChild(body);
    }

    var createDropdown = function createDropdown(props) {
      return _react2.default.createElement(_menuDropdown2.default, (0, _lodash2.default)({}, defaultProps, props));
    };

    createDropdown.displayName = 'createDropdown';

    var dropItDown = function dropItDown(props, children) {
      return renderDropdown(createDropdown(props, children));
    };

    var getMenu = function getMenu(dom) {
      return dom.querySelector('.slds-dropdown');
    };

    var cmp;
    var btn;
    var onClick = sinon.spy();
    beforeEach(function () {
      cmp = dropItDown({
        openOn: 'hybrid',
        onClick: onClick
      });
      btn = (0, _reactAddonsTestUtils.findRenderedDOMComponentWithClass)(cmp, 'slds-dropdown-trigger');
    });
    afterEach(function () {
      removeDropdownTrigger(btn);
    });
    it('doesnt expand on hover', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);

      _reactAddonsTestUtils.Simulate.mouseEnter(btn, {});

      (0, _chai.expect)(getMenu(body)).to.equal(null);
    });
    it('opens on click, closes on mouseLeave', function (done) {
      // open
      (0, _chai.expect)(getMenu(body)).to.equal(null);

      _reactAddonsTestUtils.Simulate.click(btn, {});

      (0, _chai.expect)(getMenu(body).className).to.include('slds-dropdown'); // close

      _reactAddonsTestUtils.Simulate.mouseEnter(btn, {});

      _reactAddonsTestUtils.Simulate.mouseLeave(btn);

      (0, _chai.expect)(getMenu(body)).to.not.equal(null);
      setTimeout(function () {
        (0, _chai.expect)(getMenu(body)).to.equal(null);
        done();
      }, 600);
    });
  });
});