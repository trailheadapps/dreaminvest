function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Accordion from "../../../../components/accordion"; // `~` is replaced with design-system-react at runtime

import AccordionPanel from "../../../../components/accordion/panel"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings"; // `~` is replaced with design-system-react at runtime

import Dropdown from "../../../../components/menu-dropdown"; // `~` is replaced with design-system-react at runtime

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
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

  _createClass(Example, [{
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
    value: function togglePanel(event, data) {
      this.setState(function (state) {
        return _objectSpread({}, state, {
          expandedPanels: _objectSpread({}, state.expandedPanels, _defineProperty({}, data.id, !state.expandedPanels[data.id]))
        });
      });

      if (this.props.action) {
        var dataAsArray = Object.keys(data).map(function (id) {
          return data[id];
        });
        this.props.action('onClick').apply(void 0, [event].concat(_toConsumableArray(dataAsArray)));
      } else if (console) {
        console.log('[onSelect] (event, data)', event, data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Accordion, {
        id: "base-example-accordion"
      }, this.state.items.map(function (item, i) {
        return React.createElement(AccordionPanel, {
          expanded: !!_this3.state.expandedPanels[item.id],
          id: item.id,
          panelContentActions: _this3.menuDropdown(item),
          key: item.id,
          onTogglePanel: function onTogglePanel() {
            return _this3.togglePanel(event, item);
          },
          summary: item.summary
        }, item.details);
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'AccordionExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map