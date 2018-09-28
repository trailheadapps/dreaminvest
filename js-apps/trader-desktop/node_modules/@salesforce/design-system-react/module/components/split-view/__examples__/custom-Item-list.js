function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import React from 'react';
import PropTypes from 'prop-types';
import IconSettings from "../../../../components/icon-settings";
import SplitView from "../../../../components/split-view/index";
import SplitViewHeader from "../../../../components/split-view/header";
import SplitViewListbox from "../../../../components/split-view/listbox";
import Icon from "../../../../components/icon";
import Button from "../../../../components/button";
import Dropdown from "../../../../components/menu-dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
var SORT_OPTIONS = {
  UP: 'up',
  DOWN: 'down'
};
var listOptions = [{
  id: '001',
  name: 'Riley Shultz',
  ranking: '99',
  company: 'Biotech, Inc.',
  status: 'Nurturing'
}, {
  id: '002',
  name: 'Jason A. - VP of Sales',
  ranking: '92',
  company: 'Case Management Solutions',
  status: 'Contacted'
}, {
  id: '003',
  name: 'Josh Smith',
  ranking: '90',
  company: 'Acme, Inc.',
  status: 'Contacted'
}, {
  id: '004',
  name: 'Bobby Tree',
  ranking: '89',
  company: 'Salesforce, Inc.',
  status: 'Closing'
}, {
  id: '005',
  name: 'Riley Shultz',
  ranking: '74',
  company: 'Tesla',
  status: 'Contacted'
}];
var headerNavRight = React.createElement("div", null, React.createElement(Dropdown, {
  id: "header-nav-right-more",
  align: "right",
  assistiveText: "More Options",
  iconCategory: "utility",
  iconName: "down",
  iconVariant: "border-filled",
  options: [{
    label: 'Menu Item One',
    value: 'A0'
  }, {
    label: 'Menu Item Two',
    value: 'B0'
  }]
}));
var headerContentRight = React.createElement("div", null, React.createElement(Dropdown, {
  id: "header-right-refresh",
  buttonClassName: "slds-m-right_xx-small",
  assistiveText: "Checkmark with right icon",
  buttonVariant: "icon",
  checkmark: true,
  iconCategory: "utility",
  iconName: "side_list",
  iconSize: "large",
  iconVariant: "more",
  align: "right",
  onSelect: function onSelect(value) {
    console.log('selected: ', value);
  },
  options: [{
    label: 'Display As',
    type: 'header'
  }, {
    label: 'Table View',
    value: 'A0',
    rightIcon: {
      category: 'utility',
      name: 'table'
    }
  }, {
    label: 'List View',
    value: 'B0',
    rightIcon: {
      category: 'utility',
      name: 'side_list'
    }
  }],
  value: "B0"
}), React.createElement(Button, {
  assistiveText: "Refresh",
  iconCategory: "utility",
  iconName: "refresh",
  iconVariant: "border",
  variant: "icon"
}));
var headerTitle = React.createElement("div", {
  className: "slds-media__body"
}, React.createElement("h1", {
  className: "slds-text-heading_small slds-text-color_default slds-p-right_x-small"
}, React.createElement(Dropdown, {
  id: "header-title-leads",
  options: [{
    label: 'Menu Item One',
    value: 'A0'
  }, {
    label: 'Menu Item Two',
    value: 'B0'
  }, {
    label: 'Menu Item Three',
    value: 'C0'
  }, {
    type: 'divider'
  }, {
    label: 'Menu Item Four',
    value: 'D0'
  }]
}, React.createElement(DropdownTrigger, null, React.createElement(Button, {
  className: "slds-button--reset slds-type-focus",
  iconCategory: "utility",
  iconName: "down",
  iconPosition: "right",
  label: "My Leads",
  responsive: true,
  variant: "base"
})))));
/**
 * Custom list item
 * @param props
 */

var CustomListItem = function CustomListItem(props) {
  return React.createElement("div", null, React.createElement(Icon, {
    category: "action",
    name: props.item.status === 'Contacted' ? 'check' : 'call',
    size: "x-small"
  }), React.createElement("span", {
    className: "slds-text-heading_small slds-m-left_medium"
  }, props.item.name));
};

CustomListItem.propsTypes = {
  item: PropTypes.shape({
    status: PropTypes.string,
    name: PropTypes.string
  })
};
CustomListItem.displayName = 'CustomListItem';

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.state = {
      options: listOptions,
      selected: [listOptions[listOptions.length - 2]],
      unread: [listOptions[0], listOptions[2]],
      sortDirection: SORT_OPTIONS.DOWN
    };
    _this.sortList = _this.sortList.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Example, [{
    key: "sortList",
    value: function sortList() {
      var sortDirection = this.state.sortDirection === SORT_OPTIONS.DOWN ? SORT_OPTIONS.UP : SORT_OPTIONS.DOWN;
      this.setState({
        options: this.state.options.sort(function (a, b) {
          return sortDirection === SORT_OPTIONS.DOWN ? a.name > b.name : b.name > a.name;
        }),
        sortDirection: sortDirection
      });
    } // For multiple elements you need to pass an array in order for the scrolling to in the SplitViewList to work.
    // React also requires a key prop on each items [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html#keys).

  }, {
    key: "masterView",
    value: function masterView() {
      var _this2 = this;

      return [React.createElement(SplitViewHeader, {
        key: "1",
        contentRight: headerContentRight,
        navRight: headerNavRight,
        iconAssistiveText: "User",
        iconCategory: "standard",
        iconName: "lead",
        info: "42 items \u2022 Updated just now",
        title: headerTitle,
        truncate: true,
        variant: "objectHome"
      }), React.createElement(SplitViewListbox, {
        key: "2",
        labels: {
          header: 'Lead Score'
        },
        sortDirection: this.state.sortDirection,
        options: this.state.options,
        events: {
          onSort: this.sortList,
          onSelect: function onSelect(event, _ref) {
            var selectedItems = _ref.selectedItems,
                item = _ref.item;

            _this2.setState({
              unread: _this2.state.unread.filter(function (i) {
                return i !== item;
              }),
              selected: selectedItems
            });
          }
        },
        selection: this.state.selected,
        unread: this.state.unread,
        listItem: CustomListItem
      })];
    }
  }, {
    key: "detailView",
    value: function detailView() {
      return this.state.selected.length ? this.state.selected.map(function (item) {
        return React.createElement("dl", {
          key: item.id,
          className: "slds-box slds-m-left_medium slds-m-bottom_medium slds-list_horizontal slds-wrap"
        }, React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Name"
        }, "Name:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.name
        }, item.name), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Value"
        }, "Value:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.ranking
        }, item.ranking), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Company"
        }, "Company:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.company
        }, item.company), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Status"
        }, "Status:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.status
        }, item.status));
      }) : React.createElement("div", null);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        style: {
          height: '90vh'
        }
      }, React.createElement(SplitView, {
        id: "custom-example",
        master: this.masterView(),
        detail: this.detailView()
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'SplitViewCustomListItem';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=custom-Item-list.js.map