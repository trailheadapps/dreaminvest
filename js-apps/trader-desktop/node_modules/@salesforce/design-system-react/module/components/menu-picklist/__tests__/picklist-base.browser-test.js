/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import SLDSMenuPicklist from '../../menu-picklist';
import IconSettings from '../../icon-settings';
var Simulate = TestUtils.Simulate,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
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
    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, inst), body);
  };

  function removePicklist() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var defaultProps = {
    modal: false,
    options: options,
    placeholder: 'Select a contact',
    value: 'C0'
  };

  var createPicklist = function createPicklist(props) {
    return React.createElement(SLDSMenuPicklist, assign({}, defaultProps, props));
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
      expect(getMenu(document.body)).to.equal(null);
      Simulate.click(btn, {});
      setTimeout(function () {
        expect(getMenu(document.body).className).to.include('slds-dropdown--left');
        Simulate.click(btn, {});
        expect(getMenu(document.body)).to.equal(null);
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
      expect(btn.getAttribute('aria-haspopup')).to.equal('true');
    });
    it('sets the placeholder', function () {
      expect(btn.textContent).to.equal('Select a contact');
    });
    it('expands/contracts the dropdown on click', function () {
      expect(getMenu(body)).to.equal(null);
      Simulate.click(btn, {});
      expect(getMenu(body).className).to.include('slds-dropdown');
      Simulate.click(btn, {});
      expect(getMenu(body)).to.equal(null);
    });
    it('preserves click behavior', function () {
      expect(clicked).to.be.false;
      Simulate.click(btn, {});
      expect(clicked).to.be.true;
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
      expect(selected).to.be.false;
      var items = getMenu(body).querySelectorAll('.slds-dropdown__item');
      Simulate.click(items[1].querySelector('a'), {});
      expect(selected.value).to.equal('B0');
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
      expect(getMenu(body)).to.equal(null);
    });
    it('prevents click behavior', function () {
      expect(clicked).to.be.false;
      Simulate.click(btn, {});
      expect(clicked).to.be.false;
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
      expect(ulRole).to.equal('menu');
      expect(ulAria).to.equal(btn.getAttribute('id'));
    });
    it('<a> inside <li> has role menuitem', function () {
      Simulate.click(btn, {});
      var items = getMenu(body).querySelectorAll('.slds-dropdown__item a');
      var anchorRole = items[1].getAttribute('role');
      var match = anchorRole === 'menuitem' || anchorRole === 'menuitemradio' || anchorRole === 'menuitemcheckbox';
      expect(match).to.be.true;
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
      expect(getMenu(body)).to.equal(null);
      Simulate.keyDown(btn, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      expect(getMenu(body)).to.not.equal(null);
    });
    it('opens menu with down arrow key', function () {
      expect(getMenu(body)).to.equal(null);
      Simulate.keyDown(btn, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      expect(getMenu(body)).to.not.equal(null);
    });
    it('selects an item with keyboard', function () {
      Simulate.click(btn, {});
      expect(selected).to.be.false;
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
      expect(selected.value).to.equal('B0');
    });
    it('closes Menu on esc', function () {
      expect(getMenu(body)).to.equal(null);
      Simulate.click(btn, {});
      expect(getMenu(body)).to.not.equal(null);
      var menuItems = getMenu(body).querySelectorAll('.slds-dropdown__item');
      Simulate.keyDown(menuItems[1].querySelector('a'), {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });
      expect(getMenu(body)).to.equal(null);
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
      expect(btn.textContent).to.equal('Multiple Options Selected');
      var listbox = findRenderedDOMComponentWithClass(cmp, 'slds-listbox');
      expect(listbox.childNodes.length).to.equal(2);
    });
  });
});
//# sourceMappingURL=picklist-base.browser-test.js.map