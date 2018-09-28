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

var _lookup = require("../../lookup");

var _lookup2 = _interopRequireDefault(_lookup);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _header = require("../../lookup/header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("../../lookup/footer");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
var Simulate = _reactAddonsTestUtils2.default.Simulate,
    scryRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;
describe('SLDSLookup: ', function () {
  var generateLookup = function generateLookup(lookupInstance) {
    var reactCmp = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, lookupInstance));

    return _reactDom2.default.findDOMNode(reactCmp);
  };

  var defaultProps = {
    emptyMessage: 'No items found',
    footerRenderer: _footer2.default,
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
    return _react2.default.createElement(_lookup2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getLookupWithHeader = function getLookupWithHeader() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      headerRenderer: _header2.default
    };
    return _react2.default.createElement(_lookup2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getLookupWithSelection = function getLookupWithSelection() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      selectedItem: 1
    };
    return _react2.default.createElement(_lookup2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getItems = function getItems(lookup) {
    return lookup.getElementsByClassName('js-slds-lookup__item');
  };

  describe('component renders', function () {
    it('lookup renders', function () {
      var lookup = generateLookup(getLookup());
      (0, _chai.expect)(lookup).to.not.equal(undefined);
    });
  });
  describe('component basic props render', function () {
    it('renders label', function () {
      var lookup = generateLookup(getLookup());
      var label = lookup.getElementsByTagName('label')[0];
      (0, _chai.expect)(label.textContent).to.equal('Account');
    });
    it('LookupWithSelection - renders label', function () {
      var lookup = generateLookup(getLookupWithSelection());
      var label = lookup.getElementsByTagName('span')[0];
      (0, _chai.expect)(label.textContent).to.equal('Account');
    });
    it('isOpen=true renders open dropdown', function () {
      var lookup = generateLookup(getLookup({
        isOpen: true
      }));
      var input = lookup.getElementsByTagName('input')[0];
      var ariaExpanded = input.getAttribute('aria-expanded');
      (0, _chai.expect)(ariaExpanded).to.equal('true');
    });
  });
  describe('accessibility markup passes', function () {
    it('label for matches input id', function () {
      var lookup = generateLookup(getLookup());
      var labelFor = lookup.getElementsByTagName('label')[0].getAttribute('for');
      var inputId = lookup.getElementsByTagName('input')[0].getAttribute('id');
      (0, _chai.expect)(labelFor).to.equal(inputId);
    });
  });
  describe('accessibility aria attributes pass', function () {
    it('aria-expanded is false initally', function () {
      var lookup = generateLookup(getLookup());
      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      (0, _chai.expect)(ariaExpanded).to.equal('false');
    });
    it('aria-expanded is true when clicking on input field', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      (0, _chai.expect)(ariaExpanded).to.equal('true');
    });
    it('LookupWithSelection - aria-expanded is true when deleting selection', function () {
      var lookup = generateLookup(getLookupWithSelection());
      var deleteBtn = lookup.getElementsByTagName('button')[0];

      _reactAddonsTestUtils2.default.Simulate.keyDown(deleteBtn, {
        key: 'Down',
        keyCode: 46,
        which: 46
      });

      var ariaExpanded = lookup.getElementsByTagName('input')[0].getAttribute('aria-expanded');
      (0, _chai.expect)(ariaExpanded).to.equal('true');
    });
  });
  describe('selecting item works', function () {
    it('no fixed header: focuses correct item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      var ariaActiveDescendant = lookup.getElementsByTagName('input')[0].getAttribute('aria-activedescendant');
      (0, _chai.expect)(ariaActiveDescendant).to.equal('item-1');
    });
    it('with fixed header: focuses correct item', function () {
      var lookup = generateLookup(getLookupWithHeader());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      var ariaActiveDescendant = lookup.getElementsByTagName('input')[0].getAttribute('aria-activedescendant');
      (0, _chai.expect)(ariaActiveDescendant).to.equal('item-0');
    });
    it('no header: selects correct item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });

      var selected = lookup.getElementsByTagName('a')[0].getElementsByClassName('slds-pill__label')[0].textContent;
      (0, _chai.expect)(selected).to.equal('Paper St. Soap Company');
    });
    it('with header: selects correct item', function () {
      var lookup = generateLookup(getLookupWithHeader());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });

      var selected = lookup.getElementsByTagName('a')[0].getElementsByClassName('slds-pill__label')[0].textContent;
      (0, _chai.expect)(selected).to.equal('Tyrell Corp');
    });
    it('closes lookup menu on esc', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });

      var ariaExpanded = input.getAttribute('aria-expanded');
      (0, _chai.expect)(ariaExpanded).to.equal('false');
    });
    it('aria-expanded is false after selecting item', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });

      var menu = lookup.getElementsByTagName('ul');
      (0, _chai.expect)(menu.length).to.equal(0);
    });
    it('focusedItem has correct style', function () {
      var lookup = generateLookup(getLookup());
      var input = lookup.getElementsByTagName('input')[0];

      _reactAddonsTestUtils2.default.Simulate.click(input);

      _reactAddonsTestUtils2.default.Simulate.keyDown(input, {
        key: 'Down',
        keyCode: 40,
        which: 40
      });

      var focusedItem = lookup.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
      (0, _chai.expect)(focusedItem.className).to.have.string('slds-theme--shade');
    });
    it('isOpen=false prevents dropdown from opening', function () {
      var lookup = generateLookup(getLookup({
        isOpen: false
      }));
      var input = lookup.getElementsByTagName('input')[0];
      (0, _chai.expect)(input.getAttribute('aria-expanded')).to.equal('false');
      Simulate.click(input);
      (0, _chai.expect)(input.getAttribute('aria-expanded')).to.equal('false');
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
      (0, _chai.expect)(getItems(lookup).length).to.equal(3);
    });
    it('filters its items all the way!', function () {
      Simulate.change(input, {
        target: {
          value: 'Poof!'
        }
      });
      (0, _chai.expect)(getItems(lookup).length).to.equal(1); // 1 cause of add-item
    });
    it('unfilters its items if no val', function () {
      Simulate.change(input, {
        target: {
          value: ''
        }
      });
      (0, _chai.expect)(getItems(lookup).length).to.equal(7);
    });
    it('displays no items when item count is 0', function () {
      (0, _chai.expect)(lookup.getElementsByClassName('slds-lookup__message').length).to.equal(0);
      Simulate.change(input, {
        target: {
          value: 'kdjfksjdf'
        }
      });
      (0, _chai.expect)(getItems(lookup).length).to.equal(1); // add item

      (0, _chai.expect)(lookup.getElementsByClassName('slds-lookup__message').length).to.equal(1);
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
      (0, _chai.expect)(getItems(lookup).length).to.equal(3);
      Simulate.change(input, {
        target: {
          value: 'p'
        }
      });
      (0, _chai.expect)(getItems(lookup).length).to.equal(1);
    });
  });
});