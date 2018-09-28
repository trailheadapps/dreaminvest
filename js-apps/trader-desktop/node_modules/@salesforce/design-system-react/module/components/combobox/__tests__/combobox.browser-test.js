function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import your external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import assign from 'lodash.assign';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Combobox from '../../../components/combobox';
import Icon from '../../../components/icon';
import filter from '../../../components/combobox/filter';
import KEYS, { keyObjects } from '../../../utilities/key-code';
import LETTERKEYS, { keyObjects as letterKeyObjects } from '../../../utilities/letter-key-code';
import IconSettings from '../../../components/icon-settings';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var accounts = [{
  id: '1',
  label: 'Acme',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '2',
  label: 'Salesforce.com, Inc.',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '3',
  label: "Paddy's Pub",
  subTitle: 'Account • Boston, MA',
  type: 'account'
}, {
  id: '4',
  label: 'Tyrell Corp',
  subTitle: 'Account • San Francisco, CA',
  type: 'account'
}, {
  id: '5',
  label: 'Paper St. Soap Company',
  subTitle: 'Account • Beloit, WI',
  type: 'account'
}, {
  id: '6',
  label: 'Nakatomi Investments',
  subTitle: 'Account • Chicago, IL',
  type: 'account'
}, {
  id: '7',
  label: 'Acme Landscaping',
  type: 'account'
}, {
  id: '8',
  label: 'Acme Construction',
  subTitle: 'Account • Grand Marais, MN',
  type: 'account'
}];
var accountsWithIcon = accounts.map(function (elem) {
  return assign(elem, {
    icon: React.createElement(Icon, {
      assistiveText: "Account",
      category: "standard",
      name: elem.type
    })
  });
});
var defaultProps = {
  id: 'combobox-unique-id',
  labels: {
    label: 'Search',
    placeholder: 'Search Salesforce'
  },
  menuPosition: 'relative',
  onOpen: function onOpen() {}
};
var propTypes = {
  componentWillUpdate: PropTypes.func,
  initialSelection: PropTypes.array
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent(props) {
    var _this;

    _classCallCheck(this, DemoComponent);

    _this = _possibleConstructorReturn(this, (DemoComponent.__proto__ || Object.getPrototypeOf(DemoComponent)).call(this, props));
    _this.state = {
      inputValue: '',
      selection: _this.props.initialSelection || []
    };
    return _this;
  }

  _createClass(DemoComponent, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.componentWillUpdate) {
        this.props.componentWillUpdate(nextState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Combobox, _extends({
        events: {
          onChange: function onChange(event, _ref) {
            var value = _ref.value;

            _this2.setState({
              inputValue: value
            });
          },
          onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
            console.log(data);

            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onSubmit: function onSubmit(event, _ref2) {
            var value = _ref2.value;

            _this2.setState({
              inputValue: '',
              selection: _toConsumableArray(_this2.state.selection).concat([{
                label: value,
                icon: React.createElement(Icon, {
                  assistiveText: "Account",
                  category: "standard",
                  name: "account"
                })
              }])
            });
          },
          onSelect: function onSelect(event, data) {
            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onOpen: function onOpen(event) {
            _this2.props.onOpen();
          }
        },
        options: filter({
          inputValue: this.state.inputValue,
          options: accountsWithIcon,
          selection: this.state.selection
        }),
        selection: this.state.selection,
        value: this.state.inputValue
      }, this.props)));
    }
  }]);

  return DemoComponent;
}(React.Component);

DemoComponent.displayName = 'ComboboxDemoComponent';
DemoComponent.propTypes = propTypes;
DemoComponent.defaultProps = defaultProps;

var getNodes = function getNodes(_ref3) {
  var wrapper = _ref3.wrapper;
  return {
    combobox: wrapper.find('.slds-combobox'),
    input: wrapper.find('.slds-combobox input'),
    menuListbox: wrapper.find('.slds-combobox .slds-listbox.slds-dropdown'),
    removeSingleItem: wrapper.find('.slds-combobox .slds-input__icon'),
    selectedListbox: wrapper.find("#".concat(defaultProps.id, "-selected-listbox .slds-listbox"))
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


describe('SLDSCombobox', function () {
  var _this3 = this;

  var mountNode;
  var wrapper;
  describe('Assistive technology and keyboard interactions', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has aria-haspopup, aria-expanded is false when closed, aria-expanded is true when open', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.combobox.node.getAttribute('aria-haspopup')).to.equal('listbox'); // closed

      expect(nodes.combobox.node.getAttribute('aria-expanded')).to.equal('false'); // open

      nodes.input.simulate('click', {});
      expect(nodes.combobox.node.getAttribute('aria-expanded')).to.equal('true');
    });
    it('menu filters to second item, menu listbox menu item 2 aria-selected is true, input activedescendent has item 2 id, after pressing down arrow, enter selects item 2', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true,
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: accounts[1].label
        }
      });
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      expect(nodes.menuListbox.node.firstChild.firstChild.getAttribute('aria-selected')).to.equal('true');
      expect(nodes.input.node.getAttribute('aria-activedescendant')).to.equal("".concat(defaultProps.id, "-listbox-option-2")); // select

      nodes.input.simulate('keyDown', keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.input.node.getAttribute('value')).to.equal('');
      expect(nodes.selectedListbox.find('.slds-pill__label').text()).to.equal(accounts[1].label);
    });
    it('Selected Listbox: remove initial first pill, remove third initial item, cycles focus (first to last), removes last and initial fifth pill, cycles focus (last to first), remove inital second and fourth pill', function (done) {
      var getSelectedListboxPills = function getSelectedListboxPills(_ref4) {
        var nodes = _ref4.nodes,
            index = _ref4.index;
        return nodes.selectedListbox.children().at(index).childAt(0);
      };

      var getFocusedPillLabel = function getFocusedPillLabel() {
        return document.activeElement.querySelector('.slds-pill__label').innerText;
      };

      var selectionKeyedStates = {
        removeInitialFirstPill: [accountsWithIcon[1], accountsWithIcon[2], accountsWithIcon[3], accountsWithIcon[4]],
        removeThirdInitialItem: [accountsWithIcon[1], accountsWithIcon[3], accountsWithIcon[4]],
        removesLastAndInitialFifthPill: [accountsWithIcon[1], accountsWithIcon[3]],
        removeInitalSecondAndFourthPill: [accountsWithIcon[3]],
        allPillsRemoved: []
      };
      var selectionIndexedStates = Object.keys(selectionKeyedStates).map(function (key, index) {
        return selectionKeyedStates[key];
      });
      var counter = 0;
      wrapper = mount(React.createElement(DemoComponent, {
        componentWillUpdate: function componentWillUpdate(prevState) {
          expect(prevState.selection).to.have.members(selectionIndexedStates[counter]);

          if (counter === 4) {
            done();
          }

          counter += 1;
        },
        initialSelection: [accounts[0], accounts[1], accounts[2], accounts[3], accounts[4]],
        multiple: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('keyDown', keyObjects.TAB);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', keyObjects.RIGHT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[2].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', keyObjects.LEFT);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', keyObjects.LEFT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[4].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 2
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', keyObjects.RIGHT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', keyObjects.DELETE);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keydown', keyObjects.DELETE);
    });
  });
  describe('Variant-specific', function () {
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('Limit to pre-defined choices', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true,
        predefinedOptionsOnly: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('keyDown', letterKeyObjects.A);
      nodes.input.simulate('keyDown', keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.selectedListbox.node).to.be.an('undefined');
    });
    it('Inline Single Selection Remove selection', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "inline-listbox"
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      }); // add selection

      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: accounts[1].label
        }
      });
      nodes.input.simulate('keyDown', keyObjects.ENTER);
      expect(nodes.input.node.value).to.equal('Salesforce.com, Inc.');
      nodes = getNodes({
        wrapper: wrapper
      }); // remove selection

      nodes.removeSingleItem.simulate('click');
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.input.node.value).to.equal('');
    });
  });
  describe('Optional Props', function () {
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('Displays No match found', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: 'Random text'
        }
      }); // nodes.input.simulate('keyDown', keyObjects.ENTER);

      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.menuListbox.find('.slds-listbox__item.slds-listbox__status').text()).to.equal('No matches found.');
    });
  });
  describe('Input Onclick', function () {
    var onOpenCallback = sinon.spy();
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onOpen callback is called', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        onOpen: onOpenCallback
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('click', {});
      expect(onOpenCallback.callCount).to.equal(1);
    });
  });
});
//# sourceMappingURL=combobox.browser-test.js.map