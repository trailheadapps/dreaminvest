"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _menuPicklist = require("../../menu-picklist");

var _menuPicklist2 = _interopRequireDefault(_menuPicklist);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */
var Simulate = _reactAddonsTestUtils2.default.Simulate,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
describe('SLDSMenuPicklist: ', function () {
  var body;
  var options = [{
    label: 'A Option Option Super Super Long',
    value: 'A0',
    title: 'Greg'
  }, {
    label: 'B Option',
    value: 'B0'
  }];

  var renderPicklist = function renderPicklist(inst) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, inst), body);
  };

  function removePicklist() {
    _reactDom2.default.unmountComponentAtNode(body);

    document.body.removeChild(body);
  }

  var defaultProps = {
    modal: false,
    options: options,
    placeholder: 'Select a contact',
    value: 'C0'
  };

  var createPicklist = function createPicklist(props) {
    return _react2.default.createElement(_menuPicklist2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getPicklist = function getPicklist(props) {
    return renderPicklist(createPicklist(props));
  };

  var getMenu = function getMenu(dom) {
    return dom.querySelector('.slds-dropdown');
  };

  var clickOnItem = function clickOnItem(cmp, index) {
    var items = scryRenderedDOMComponentsWithTag(cmp, 'a');
    Simulate.click(items[index]);
  };

  describe('in modal mode', function () {
    var cmp;
    var btn;
    beforeEach(function () {
      cmp = getPicklist({
        modal: true
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removePicklist();
    });
    it('expands/contracts the dropdown on click', function (done) {
      (0, _chai.expect)(getMenu(document.body)).to.equal(null);
      Simulate.click(btn, {});
      setTimeout(function () {
        (0, _chai.expect)(getMenu(document.body).className).to.include('slds-dropdown--left');
        Simulate.click(btn, {});
        (0, _chai.expect)(getMenu(document.body)).to.equal(null);
        done();
      }, 600);
    });
  });
  describe('with click handler', function () {
    var cmp;
    var btn;
    var clicked;
    beforeEach(function () {
      clicked = false;
      cmp = getPicklist({
        onClick: function onClick() {
          clicked = true;
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removePicklist();
    });
    it('gives the button correct aria properties', function () {
      (0, _chai.expect)(btn.getAttribute('aria-haspopup')).to.equal('true');
    });
    it('sets the placeholder', function () {
      (0, _chai.expect)(btn.textContent).to.equal('Select a contact');
    });
    it('expands/contracts the dropdown on click', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);
      Simulate.click(btn, {});
      (0, _chai.expect)(getMenu(body).className).to.include('slds-dropdown');
      Simulate.click(btn, {});
      (0, _chai.expect)(getMenu(body)).to.equal(null);
    });
    it('preserves click behavior', function () {
      (0, _chai.expect)(clicked).to.be.false;
      Simulate.click(btn, {});
      (0, _chai.expect)(clicked).to.be.true;
    });
  });
  describe('expanded with onSelect', function () {
    var cmp;
    var btn;
    var clicked;
    var selected;
    beforeEach(function () {
      selected = false;
      cmp = getPicklist({
        onSelect: function onSelect(i) {
          selected = i;
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      Simulate.click(btn, {});
    });
    afterEach(function () {
      removePicklist();
    });
    it('selects an item', function () {
      (0, _chai.expect)(selected).to.be.false;
      var items = getMenu(body).querySelectorAll('.slds-dropdown__item');
      Simulate.click(items[1].querySelector('a'), {});
      (0, _chai.expect)(selected.value).to.equal('B0');
    });
  });
  describe('disabled', function () {
    var cmp;
    var btn;
    var clicked;
    beforeEach(function () {
      clicked = false;
      cmp = getPicklist({
        disabled: true,
        onClick: function onClick() {
          clicked = true;
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removePicklist();
    });
    it("doesn't open", function () {
      Simulate.click(btn, {});
      (0, _chai.expect)(getMenu(body)).to.equal(null);
    });
    it('prevents click behavior', function () {
      (0, _chai.expect)(clicked).to.be.false;
      Simulate.click(btn, {});
      (0, _chai.expect)(clicked).to.be.false;
    });
  });
  describe('accessible markup', function () {
    var cmp;
    var btn;
    var clicked;
    var selected;
    beforeEach(function () {
      selected = false;
      cmp = getPicklist({
        onSelect: function onSelect(i) {
          selected = i;
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removePicklist();
    });
    it('<ul> has role menu & aria-labelledby', function () {
      Simulate.click(btn, {});
      var ulRole = getMenu(body).querySelector('ul').getAttribute('role');
      var ulAria = getMenu(body).querySelector('ul').getAttribute('aria-labelledby');
      (0, _chai.expect)(ulRole).to.equal('menu');
      (0, _chai.expect)(ulAria).to.equal(btn.getAttribute('id'));
    });
    it('<a> inside <li> has role menuitem', function () {
      Simulate.click(btn, {});
      var items = getMenu(body).querySelectorAll('.slds-dropdown__item a');
      var anchorRole = items[1].getAttribute('role');
      var match = anchorRole === 'menuitem' || anchorRole === 'menuitemradio' || anchorRole === 'menuitemcheckbox';
      (0, _chai.expect)(match).to.be.true;
    });
  });
  describe('Keyboard behavior', function () {
    var cmp;
    var btn;
    var selected;
    beforeEach(function () {
      selected = false;
      cmp = getPicklist({
        onSelect: function onSelect(i) {
          selected = i;
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removePicklist();
    });
    it('opens menu with enter', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);
      Simulate.keyDown(btn, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      (0, _chai.expect)(getMenu(body)).to.not.equal(null);
    });
    it('opens menu with down arrow key', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);
      Simulate.keyDown(btn, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      (0, _chai.expect)(getMenu(body)).to.not.equal(null);
    });
    it('selects an item with keyboard', function () {
      Simulate.click(btn, {});
      (0, _chai.expect)(selected).to.be.false;
      var menu = getMenu(body);
      Simulate.keyDown(menu, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      Simulate.keyDown(menu, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      Simulate.keyDown(menu, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      (0, _chai.expect)(selected.value).to.equal('B0');
    });
    it('closes Menu on esc', function () {
      (0, _chai.expect)(getMenu(body)).to.equal(null);
      Simulate.click(btn, {});
      (0, _chai.expect)(getMenu(body)).to.not.equal(null);
      var menuItems = getMenu(body).querySelectorAll('.slds-dropdown__item');
      Simulate.keyDown(menuItems[1].querySelector('a'), {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });
      (0, _chai.expect)(getMenu(body)).to.equal(null);
    });
  });
  describe('multiple selection', function () {
    var cmp;
    var btn;
    beforeEach(function () {
      cmp = getPicklist({
        multiple: true
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      Simulate.click(btn, {});
    });
    afterEach(function () {
      removePicklist();
    });
    it('selects multiple items and renders pills', function () {
      clickOnItem(cmp, 0);
      clickOnItem(cmp, 1);
      (0, _chai.expect)(btn.textContent).to.equal('Multiple Options Selected');
      var listbox = findRenderedDOMComponentWithClass(cmp, 'slds-listbox');
      (0, _chai.expect)(listbox.childNodes.length).to.equal(2);
    });
  });
});