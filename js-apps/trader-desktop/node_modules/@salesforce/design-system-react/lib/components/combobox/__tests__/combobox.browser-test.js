"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require("enzyme");

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _combobox = require("../../../components/combobox");

var _combobox2 = _interopRequireDefault(_combobox);

var _icon = require("../../../components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _filter = require("../../../components/combobox/filter");

var _filter2 = _interopRequireDefault(_filter);

var _keyCode = require("../../../utilities/key-code");

var _keyCode2 = _interopRequireDefault(_keyCode);

var _letterKeyCode = require("../../../utilities/letter-key-code");

var _letterKeyCode2 = _interopRequireDefault(_letterKeyCode);

var _iconSettings = require("../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

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
  return (0, _lodash2.default)(elem, {
    icon: _react2.default.createElement(_icon2.default, {
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
  componentWillUpdate: _propTypes2.default.func,
  initialSelection: _propTypes2.default.array
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

      return _react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_combobox2.default, _extends({
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
                icon: _react2.default.createElement(_icon2.default, {
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
        options: (0, _filter2.default)({
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
}(_react2.default.Component);

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
    it('has aria-haspopup, aria-expanded is false when closed, aria-expanded is true when open', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        multiple: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      (0, _chai.expect)(nodes.combobox.node.getAttribute('aria-haspopup')).to.equal('listbox'); // closed

      (0, _chai.expect)(nodes.combobox.node.getAttribute('aria-expanded')).to.equal('false'); // open

      nodes.input.simulate('click', {});
      (0, _chai.expect)(nodes.combobox.node.getAttribute('aria-expanded')).to.equal('true');
    });
    it('menu filters to second item, menu listbox menu item 2 aria-selected is true, input activedescendent has item 2 id, after pressing down arrow, enter selects item 2', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
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
      nodes.input.simulate('keyDown', _keyCode.keyObjects.DOWN);
      (0, _chai.expect)(nodes.menuListbox.node.firstChild.firstChild.getAttribute('aria-selected')).to.equal('true');
      (0, _chai.expect)(nodes.input.node.getAttribute('aria-activedescendant')).to.equal("".concat(defaultProps.id, "-listbox-option-2")); // select

      nodes.input.simulate('keyDown', _keyCode.keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      (0, _chai.expect)(nodes.input.node.getAttribute('value')).to.equal('');
      (0, _chai.expect)(nodes.selectedListbox.find('.slds-pill__label').text()).to.equal(accounts[1].label);
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
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        componentWillUpdate: function componentWillUpdate(prevState) {
          (0, _chai.expect)(prevState.selection).to.have.members(selectionIndexedStates[counter]);

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
      nodes.input.simulate('keyDown', _keyCode.keyObjects.TAB);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', _keyCode.keyObjects.DELETE);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', _keyCode.keyObjects.RIGHT);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[2].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', _keyCode.keyObjects.DELETE);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', _keyCode.keyObjects.LEFT);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', _keyCode.keyObjects.LEFT);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[4].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 2
      }).simulate('keyDown', _keyCode.keyObjects.DELETE);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 1
      }).simulate('keyDown', _keyCode.keyObjects.RIGHT);
      (0, _chai.expect)(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', _keyCode.keyObjects.DELETE);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keydown', _keyCode.keyObjects.DELETE);
    });
  });
  describe('Variant-specific', function () {
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
    it('Limit to pre-defined choices', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        multiple: true,
        predefinedOptionsOnly: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('keyDown', _letterKeyCode.keyObjects.A);
      nodes.input.simulate('keyDown', _keyCode.keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      (0, _chai.expect)(nodes.selectedListbox.node).to.be.an('undefined');
    });
    it('Inline Single Selection Remove selection', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
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
      nodes.input.simulate('keyDown', _keyCode.keyObjects.ENTER);
      (0, _chai.expect)(nodes.input.node.value).to.equal('Salesforce.com, Inc.');
      nodes = getNodes({
        wrapper: wrapper
      }); // remove selection

      nodes.removeSingleItem.simulate('click');
      nodes = getNodes({
        wrapper: wrapper
      });
      (0, _chai.expect)(nodes.input.node.value).to.equal('');
    });
  });
  describe('Optional Props', function () {
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
    it('Displays No match found', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
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
      (0, _chai.expect)(nodes.menuListbox.find('.slds-listbox__item.slds-listbox__status').text()).to.equal('No matches found.');
    });
  });
  describe('Input Onclick', function () {
    var onOpenCallback = sinon.spy();
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
    it('onOpen callback is called', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(DemoComponent, {
        onOpen: onOpenCallback
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('click', {});
      (0, _chai.expect)(onOpenCallback.callCount).to.equal(1);
    });
  });
});