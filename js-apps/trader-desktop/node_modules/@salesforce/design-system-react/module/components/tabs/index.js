function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tabs Component
// Implements the [Tabs design pattern](https://www.lightningdesignsystem.com/components/tabs/) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### shortid
// `shortid` is a short, non-sequential, url-friendly, unique id generator. It is used here to provide unique strings for the HTML attribute `id` on the Tabs components. It is only used if the `id` prop is not provided on the man <Tabs /> component.

import shortid from 'shortid'; // ### classNames

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### isNumber

import isNumber from 'lodash.isnumber'; // Child components

import TabsList from './private/tabs-list';
import Tab from './private/tab';
import TabPanel from './private/tab-panel'; // ## Constants

import { TABS } from '../../utilities/constants'; // ### Event Helpers

import KEYS from '../../utilities/key-code';
import EventUtil from '../../utilities/event'; // Determine if a node from event.target is a Tab element

function isTabNode(node) {
  return node.nodeName === 'A' && node.getAttribute('role') === 'tab' || node.nodeName === 'LI' && node.getAttribute('role') === 'tab';
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  if (node.getAttribute) {
    return node.getAttribute('aria-disabled') === 'true';
  }

  return !!node.props.disabled;
}
/**
 * Tabs keeps related content in a single container that is shown and hidden through navigation.
 */


var displayName = TABS;
var propTypes = {
  /**
   * HTML `id` attribute of primary element that has `.slds-tabs--default` on it. Optional: If one is not supplied, a `shortid` will be created.
   */
  id: PropTypes.string,

  /**
   * The `children` are the actual tabs and panels to be displayed.
   *
   * Note that the structure of the `<Tabs />` component **does not** correspond to the DOM structure that is rendered. The `<Tabs />` component requires one or more children of type `<TabsPanel />`, which themselves require a `label` property which will be what shows in the `<Tab />` and has `children`, which end up being the _contents of the tab's corresponding panel_.
   *
   * The component iterates through each `<TabsPanel />` and rendering one `<Tab />` and one `<TabPanel />` for each of them. The tab(s) end up being children of the `<TabsList />`.
   *
   * ```
   * <Tabs>
   * 	<TabsPanel label="Tab 1">
   * 		<div>
   * 			<h2 className="slds-text-heading--medium">This is my tab 1 contents!</h2>
   * 			<p>They show when you click the first tab.</p>
   * 		</div>
   * 	</TabsPanel>
   * 	<TabsPanel label="Tab 2">
   * 		<div>
   * 			<h2 className="slds-text-heading--medium">This is my tab 2 contents!</h2>
   * 			<p>They show when you click the second tab.</p>
   * 		</div>
   * 	</TabsPanel>
   * </Tabs>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.element]).isRequired,

  /**
   * Class names to be added to the container element and is passed along to its children.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The Tab (and corresponding TabPanel) that is selected when the component first renders. Defaults to `0`.
   */
  defaultSelectedIndex: PropTypes.number,

  /**
   * This function triggers when a tab is selected.
   */
  onSelect: PropTypes.func,

  /**
   * If the Tabs should be scopped, defaults to false
   */
  variant: PropTypes.oneOf(['default', 'scoped']),

  /**
   * The Tab (and corresponding TabPanel) that is currently selected.
   */
  selectedIndex: PropTypes.number
};
var defaultProps = {
  defaultSelectedIndex: 0,
  variant: 'default'
};
/**
 * A tab keeps related content in a single container that is shown and hidden through navigation.
 */

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var node = e.target;
        /* eslint-disable no-cond-assign */

        do {
          if (_this.isTabFromContainer(node)) {
            if (isTabDisabled(node)) {
              return;
            }

            var index = [].slice.call(node.parentNode.children).indexOf(node);

            _this.setSelected(index);

            return;
          }
        } while ((node = node.parentNode) !== null);
        /* eslint-enable no-cond-assign */

      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.isTabFromContainer(event.target)) {
          var index = _this.getSelectedIndex();

          var preventDefault = false;

          if (event.keyCode === KEYS.LEFT || event.keyCode === KEYS.UP) {
            // Select next tab to the left
            index = _this.getPrevTab(index);
            preventDefault = true;
          } else if (event.keyCode === KEYS.RIGHT || event.keyCode === KEYS.DOWN) {
            // Select next tab to the right
            index = _this.getNextTab(index);
            preventDefault = true;
          } // Prevent any dumn scrollbars from moving around as we type.


          if (preventDefault) {
            EventUtil.trap(event);
          }

          _this.setSelected(index, true);
        }
      }
    });
    _this.tabs = [];
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // If no `id` is supplied in the props we generate one. An HTML ID is _required_ for several elements in a tabs component in order to leverage ARIA attributes for accessibility.
      this.generatedId = shortid.generate();
      this.flavor = this.getVariant();
      this.setState({
        selectedIndex: this.props.defaultSelectedIndex
      });
    }
  }, {
    key: "getNextTab",
    value: function getNextTab(index) {
      var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right
      // eslint-disable-next-line no-plusplus

      for (var i = index + 1; i < count; i++) {
        var tab = this.getTab(i);

        if (!isTabDisabled(tab)) {
          return i;
        }
      } // If no tab found, continue searching from first on left to index
      // eslint-disable-next-line no-plusplus


      for (var _i = 0; _i < index; _i++) {
        var _tab = this.getTab(_i);

        if (!isTabDisabled(_tab)) {
          return _i;
        }
      } // No tabs are disabled, return index


      return index;
    }
  }, {
    key: "getPanelsCount",
    value: function getPanelsCount() {
      return this.props.children ? React.Children.count(this.props.children) : 0;
    }
  }, {
    key: "getPrevTab",
    value: function getPrevTab(index) {
      var i = index; // Look for non-disabled tab from index to first tab on the left
      // eslint-disable-next-line no-plusplus

      while (i--) {
        var tab = this.getTab(i);

        if (!isTabDisabled(tab)) {
          return i;
        }
      } // If no tab found, continue searching from last tab on right to index


      i = this.getTabsCount(); // eslint-disable-next-line no-plusplus

      while (i-- > index) {
        var _tab2 = this.getTab(i);

        if (!isTabDisabled(_tab2)) {
          return i;
        }
      } // No tabs are disabled, return index


      return index;
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return isNumber(this.props.selectedIndex) ? this.props.selectedIndex : this.state.selectedIndex;
    }
  }, {
    key: "getTab",
    value: function getTab(index) {
      return this.tabs[index].tab;
    }
  }, {
    key: "getTabNode",
    value: function getTabNode(index) {
      return this.tabs[index].node;
    }
  }, {
    key: "getTabsCount",
    value: function getTabsCount() {
      return this.props.children ? React.Children.count(this.props.children) : 0;
    }
  }, {
    key: "getVariant",
    value: function getVariant() {
      return this.props.variant === 'scoped' ? 'scoped' : 'default';
    }
  }, {
    key: "setSelected",
    value: function setSelected(index, focus) {
      // Check index boundary
      if (index < 0 || index >= this.getTabsCount()) {
        return;
      } // Keep reference to last index for event handler


      var last = this.getSelectedIndex();
      /**
       * This is a temporary solution that could be broken in the future without notification,
       * since this component is not a controlled component and only relies on internal state.
       * If this breaks in the future an alternative way to control the state from outside the
       * component should be present.
       * */

      var shouldContinue; // Call change event handler

      if (isFunction(this.props.onSelect)) {
        shouldContinue = this.props.onSelect(index, last);
      } // Don't update the state if nothing has changed


      if (shouldContinue !== false && index !== this.state.selectedIndex) {
        this.setState({
          selectedIndex: index,
          focus: focus === true
        });
      }
    }
  }, {
    key: "isTabFromContainer",

    /**
     * Determine if a node from event.target is a Tab element for the current Tabs container.
     * If the clicked element is not a Tab, it returns false.
     * If it finds another Tabs container between the Tab and `this`, it returns false.
     */
    value: function isTabFromContainer(node) {
      // Return immediately if the clicked element is not a Tab. This prevents tab panel content from selecting a tab.
      if (!isTabNode(node)) {
        return false;
      } // Check if the first occurrence of a Tabs container is `this` one.


      var nodeAncestor = node.parentElement;

      do {
        if (nodeAncestor === this.tabsNode) return true;else if (nodeAncestor.getAttribute('data-tabs')) break;
        nodeAncestor = nodeAncestor.parentElement;
      } while (nodeAncestor);

      return false;
    }
  }, {
    key: "renderTabPanels",
    value: function renderTabPanels(parentId) {
      var _this2 = this;

      var children = React.Children.toArray(this.props.children);
      var selectedIndex = this.getSelectedIndex();
      var result = null;
      result = children.map(function (child, index) {
        var tabId = "".concat(parentId, "-slds-tabs--tab-").concat(index);
        var id = "".concat(parentId, "-slds-tabs--panel-").concat(index);
        var selected = selectedIndex === index;

        var variant = _this2.getVariant();

        return React.createElement(TabPanel, {
          key: child.key,
          selected: selected,
          id: id,
          tabId: tabId,
          variant: variant
        }, children[index]);
      });
      return result;
    }
  }, {
    key: "renderTabsList",
    value: function renderTabsList(parentId) {
      var _this3 = this;

      var children = React.Children.toArray(this.props.children);
      return (// `parentId` gets consumed by TabsList, adding a suffix of `-tabs__nav`
        React.createElement(TabsList, {
          id: parentId,
          variant: this.getVariant()
        }, children.map(function (child, index) {
          var id = "".concat(parentId, "-slds-tabs--tab-").concat(index);
          var panelId = "".concat(parentId, "-slds-tabs--panel-").concat(index);
          var selected = _this3.getSelectedIndex() === index;
          var focus = selected && _this3.state.focus;

          var variant = _this3.getVariant();

          return React.createElement(Tab, {
            key: child.key,
            ref: function ref(node) {
              _this3.tabs[index] = {
                tab: child,
                node: node
              };
            },
            focus: focus,
            selected: selected,
            id: id,
            panelId: panelId,
            disabled: child.props.disabled,
            variant: variant
          }, child.props.label);
        }))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          className = _props.className,
          _props$id = _props.id,
          id = _props$id === void 0 ? this.generatedId : _props$id,
          _props$variant = _props.variant,
          variant = _props$variant === void 0 ? this.getVariant : _props$variant;

      if (this.state.focus) {
        setTimeout(function () {
          _this4.setState({
            focus: false
          });
        }, 0);
      }

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        React.createElement("div", {
          id: id,
          className: classNames({
            'slds-tabs--default': variant === 'default',
            'slds-tabs--scoped': variant === 'scoped'
          }, className),
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          "data-tabs": true,
          ref: function ref(node) {
            _this4.tabsNode = node;
          }
        }, this.renderTabsList(id), this.renderTabPanels(id))
      );
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.displayName = displayName;
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;
//# sourceMappingURL=index.js.map