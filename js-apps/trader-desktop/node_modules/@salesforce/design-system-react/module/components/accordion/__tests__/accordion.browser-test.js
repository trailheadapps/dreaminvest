function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers';
import Accordion from '../../accordion';
import IconSettings from '../../icon-settings';
import Panel from '../../accordion/panel';
import Dropdown from '../../menu-dropdown';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
/* Re-usable demo component.
 */

var propTypes = {};
var defaultProps = {};

var AccordionExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionExample, _React$Component);

  function AccordionExample(props) {
    var _this;

    _classCallCheck(this, AccordionExample);

    _this = _possibleConstructorReturn(this, (AccordionExample.__proto__ || Object.getPrototypeOf(AccordionExample)).call(this, props));
    _this.state = {
      expandedPanels: {},
      items: [{
        id: '1',
        summary: 'Accordion Summary',
        details: 'Accordion details - A'
      }, {
        id: '2',
        summary: 'Accordion Summary',
        details: 'Accordion details - B'
      }, {
        id: '3',
        summary: 'Accordion Summary',
        details: 'Accordion details - C'
      }]
    };
    return _this;
  }

  _createClass(AccordionExample, [{
    key: "menuDropdown",
    value: function menuDropdown(selectedItem) {
      var _this2 = this;

      return React.createElement(Dropdown, {
        align: "right",
        id: "ButtonGroupExampleDropdown",
        assistiveText: "More Options",
        buttonVariant: "icon",
        buttonClassName: "slds-shrink-none",
        iconCategory: "utility",
        iconName: "down",
        iconVariant: "border-filled",
        onSelect: function onSelect(option) {
          if (option.label === 'delete') {
            _this2.setState(function (state) {
              return _objectSpread({}, state, {
                items: state.items.filter(function (item) {
                  return item.id !== selectedItem.id;
                })
              });
            });
          } else if (console) {
            console.log('onSelect', event, option);
          }
        },
        options: [{
          label: 'delete',
          value: 'A0'
        }, {
          label: 'redo',
          value: 'B0'
        }, {
          label: 'activate',
          value: 'C0'
        }],
        iconSize: "x-small"
      });
    }
  }, {
    key: "togglePanel",
    value: function togglePanel(id) {
      this.setState(function (state) {
        return _objectSpread({}, state, {
          expandedPanels: _objectSpread({}, state.expandedPanels, _defineProperty({}, id, !state.expandedPanels[id]))
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Accordion, {
        id: "base-example-accordion"
      }, this.state.items.map(function (item) {
        return React.createElement(Panel, {
          expanded: !!_this3.state.expandedPanels[item.id],
          id: item.id,
          panelContentActions: _this3.menuDropdown(item),
          key: item.id,
          onTogglePanel: function onTogglePanel() {
            return _this3.togglePanel(item.id);
          },
          summary: item.summary
        }, item.details);
      })));
    }
  }]);

  return AccordionExample;
}(React.Component);

AccordionExample.displayName = 'AccordionExampleComponent';
AccordionExample.propTypes = propTypes;
AccordionExample.defaultProps = defaultProps;
/* Accordion rendering tests
 */

describe('Accordion', function () {
  var _this4 = this;

  describe('Renders Accordion', function () {
    var mountNode;
    var wrapper;
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this4
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('renders an accordion', function () {
      wrapper = mount(React.createElement(AccordionExample, null), {
        attachTo: mountNode
      });
      var accordion = wrapper.find(Accordion);
      expect();
    });
    it('renders `panelContentActions` component, if passed', function () {
      wrapper = mount(React.createElement(AccordionExample, null), {
        attachTo: mountNode
      });
      var panelContentActions = wrapper.find('div .slds-dropdown-trigger .slds-dropdown-trigger--click');
      expect(panelContentActions, 'panel dropdown component exists').to.exist;
    });
  });
  describe('Open panel', function () {
    var mountNode;
    var wrapper;
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this4
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('triggers a change callback on panel select', function () {
      wrapper = mount(React.createElement(AccordionExample, null), {
        attachTo: mountNode
      });
      var panel = wrapper.find('SLDSAccordionPanel').first();
      expect(panel.props().expanded).to.be.false;
      panel.find('.slds-accordion__summary-action').simulate('click');
      expect(panel.props().expanded).to.be.true;
    });
    it('`aria-expanded` set to true on panel select', function () {
      wrapper = mount(React.createElement(AccordionExample, null), {
        attachTo: mountNode
      });
      var panel = wrapper.find('SLDSAccordionPanel').first();
      var button = panel.find('.slds-accordion__summary-action');
      panel.find('.slds-accordion__summary-action').simulate('click');
      expect(button.props()['aria-expanded']).to.be.true;
    });
  });
});
//# sourceMappingURL=accordion.browser-test.js.map