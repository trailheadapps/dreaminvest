/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import SLDSLookup from '../../lookup';
import IconSettings from '../../icon-settings';
import Header from '../../lookup/header';
import Footer from '../../lookup/footer';
var Simulate = TestUtils.Simulate,
    scryRenderedDOMComponentsWithClass = TestUtils.scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag;
describe('SLDSLookup: ', function () {
  var generateLookup = function generateLookup(lookupInstance) {
    var reactCmp = TestUtils.renderIntoDocument(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, lookupInstance));
    return ReactDOM.findDOMNode(reactCmp);
  };

  var defaultProps = {
    emptyMessage: 'No items found',
    footerRenderer: Footer,
    iconCategory: 'standard',
    iconName: 'account',
    isInline: true,
    label: 'Account',
    onChange: function onChange(newValue) {
      console.log('New search term: ', newValue);
    },
    onSelect: function onSelect(item) {
      console.log(item, ' Selected');
    },
    options: [{
      label: 'Paddy"s Pub'
    }, {
      label: 'Tyrell Corp'
    }, {
      label: 'Paper St. Soap Company'
    }, {
      label: 'Nakatomi Investments'
    }, {
      label: 'Acme Landscaping'
    }, {
      label: 'Acme Construction'
    }]
  };

  var getLookup = function getLookup() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return React.createElement(SLDSLookup, assign({}, defaultProps, props));
  };

  var getLookupWithHeader = function getLookupWithHeader() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      headerRenderer: Header
    };
    return React.createElement(SLDSLookup, assign({}, defaultProps, props));
  };

  var getLookupWithSelection = function getLookupWithSelection() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      selectedItem: 1
    };
    return React.createElement(SLDSLookup, assign({}, defaultProps, props));
  };

  var getItems = function getItems(lookup) {
    return lookup.getElementsByClassName('js-slds-lookup__item');
  };

  describe('component renders', function () {
    it('lookup renders', function () {
      var lookup = generateLookup(getLookup());
      expect(lookup).to.not.equal(undefined);
    });
  });
  describe('component basic props render', function () {
    it('renders label', function () {
      var lookup = generateLookup(getLookup());
      var label = lookup.getElementsByTagName('label')[0];
      expect(label.textContent).to.equal('Account');
    });
    it('LookupWithSelection - renders label', function () {
      var lookup = generateLookup(getLookupWithSelection());
      var label = lookup.getElementsByTagName('span')[0];
      expect(label.textContent).to.equal('Account');
    });
    it('isOpen=true renders open dropdown', function () {
      var lookup = generateLookup(getLookup({
        isOpen: true
      }));
      var input = lookup.getElementsByTagName('input')[0];
      var ariaExpanded = input.getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('true');
    });
  });
  describe('accessibility markup passes', function () {
    it('label for matches input id', function () {
      var lookup = generateLookup(getLookup());
      var labelFor = lookup.getElementsByTagName('label')[0].getAttribute('for');
      var inputId = lookup.getElementsByTagName('input')[0].getAttribute('id');
      expect(labelFor).to.equal(inputId);
    });
  });
  describe('accessibility aria attributes pass', function () {
    it('aria-expanded is false initally', function () {
      var lookup = generateLookup(getLookup());
      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('false');
    });
    it('aria-expanded is true when clicking on input field', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('true');
    });
    it('LookupWithSelection - aria-expanded is true when deleting selection', function () {
      var lookup = generateLookup(getLookupWithSelection());
      var deleteBtn = lookup.getElementsByTagName('button')[0];
      TestUtils.Simulate.keyDown(deleteBtn, {
        key: 'Down',
        keyCode: 46,
        which: 46
      });
      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('true');
    });
  });
  describe('selecting item works', function () {
    it('no fixed header: focuses correct item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      var ariaActiveDescendant = lookup.getElementsByTagName('input')[0].getAttribute('aria-activedescendant');
      expect(ariaActiveDescendant).to.equal('item-1');
    });
    it('with fixed header: focuses correct item', function () {
      var lookup = generateLookup(getLookupWithHeader());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      var ariaActiveDescendant = lookup.getElementsByTagName('input')[0].getAttribute('aria-activedescendant');
      expect(ariaActiveDescendant).to.equal('item-0');
    });
    it('no header: selects correct item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      var selected = lookup.getElementsByTagName('a')[0].getElementsByClassName('slds-pill__label')[0].textContent;
      expect(selected).to.equal('Paper St. Soap Company');
    });
    it('with header: selects correct item', function () {
      var lookup = generateLookup(getLookupWithHeader());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      var selected = lookup.getElementsByTagName('a')[0].getElementsByClassName('slds-pill__label')[0].textContent;
      expect(selected).to.equal('Tyrell Corp');
    });
    it('closes lookup menu on esc', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });
      var ariaExpanded = input.getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('false');
    });
    it('aria-expanded is false after selecting item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      TestUtils.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      var menu = lookup.getElementsByTagName('ul');
      expect(menu.length).to.equal(0);
    });
    it('focusedItem has correct style', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });
      var focusedItem = lookup.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
      expect(focusedItem.className).to.have.string('slds-theme--shade');
    });
    it('isOpen=false prevents dropdown from opening', function () {
      var lookup = generateLookup(getLookup({
        isOpen: false
      }));
      var input = lookup.getElementsByTagName('input')[0];
      expect(input.getAttribute('aria-expanded')).to.equal('false');
      Simulate.click(input);
      expect(input.getAttribute('aria-expanded')).to.equal('false');
    });
  });
  describe('expanded', function () {
    var lookup;
    var input;
    beforeEach(function () {
      lookup = generateLookup(getLookup());
      input = lookup.getElementsByTagName('input')[0];
      Simulate.click(input);
    });
    it('filters its items', function () {
      Simulate.change(input, {
        target: {
          value: 'Pa'
        }
      });
      expect(getItems(lookup).length).to.equal(3);
    });
    it('filters its items all the way!', function () {
      Simulate.change(input, {
        target: {
          value: 'Poof!'
        }
      });
      expect(getItems(lookup).length).to.equal(1); // 1 cause of add-item
    });
    it('unfilters its items if no val', function () {
      Simulate.change(input, {
        target: {
          value: ''
        }
      });
      expect(getItems(lookup).length).to.equal(7);
    });
    it('displays no items when item count is 0', function () {
      expect(lookup.getElementsByClassName('slds-lookup__message').length).to.equal(0);
      Simulate.change(input, {
        target: {
          value: 'kdjfksjdf'
        }
      });
      expect(getItems(lookup).length).to.equal(1); // add item

      expect(lookup.getElementsByClassName('slds-lookup__message').length).to.equal(1);
    });
  });
  describe('custom filter', function () {
    var lookup;
    var input;
    beforeEach(function () {
      lookup = generateLookup(getLookup({
        filterWith: function filterWith(text, i) {
          return text === i.label[0];
        }
      }));
      input = lookup.getElementsByTagName('input')[0];
      Simulate.click(input);
    });
    it('filters its items by case sensitive first letter', function () {
      Simulate.change(input, {
        target: {
          value: 'P'
        }
      });
      expect(getItems(lookup).length).to.equal(3);
      Simulate.change(input, {
        target: {
          value: 'p'
        }
      });
      expect(getItems(lookup).length).to.equal(1);
    });
  });
});
//# sourceMappingURL=lookup.browser-test.js.map