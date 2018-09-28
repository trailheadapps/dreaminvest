function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Panel from "../../../../components/panel"; // `~` is replaced with design-system-react at runtime

import PanelFilterGroup from "../../../../components/panel/filtering/group";
import PanelFilterList from "../../../../components/panel/filtering/list";
import PanelFilterListHeading from "../../../../components/panel/filtering/list-heading";
import Filter from "../../../../components/filter";
import Picklist from "../../../../components/menu-picklist";
var options = {
  'show-me': [{
    label: 'All Products',
    value: 'all-products'
  }, {
    label: 'All Wackamoles',
    value: 'all-Wackamoles'
  }],
  'created-date': [{
    label: 'equals THIS WEEK',
    value: 'this-week'
  }, {
    label: 'equals LAST WEEK',
    value: 'last-week'
  }],
  'list-price': [{
    label: 'greater than "500"',
    value: 'greater-than-500'
  }, {
    label: 'greater than "100"',
    value: 'greater-than-100'
  }]
};
var Example = createReactClass({
  displayName: 'PanelExample',
  getInitialState: function getInitialState() {
    return {
      modifiedPanel: false,
      'show-me': {
        selectedPicklistItem: options['show-me'][0],
        selectedItem: options['show-me'][0]
      },
      'created-date': {
        selectedPicklistItem: options['created-date'][0],
        selectedItem: options['created-date'][0],
        isActive: true
      },
      'list-price': {
        selectedPicklistItem: options['list-price'][0],
        selectedItem: options['list-price'][0],
        isActive: true
      }
    };
  },
  onChangePredicate: function onChangePredicate(event, _ref) {
    var id = _ref.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({
      modifiedPanel: this.state[idSuffix].selectedItem !== this.state[idSuffix].selectedPicklistItem
    }, idSuffix, _objectSpread({}, this.state[idSuffix], {
      selectedItem: this.state[idSuffix].selectedPicklistItem
    })));
  },
  onSelectPicklist: function onSelectPicklist(selectedItem, id) {
    this.setState(_defineProperty({}, id, _objectSpread({}, this.state[id], {
      selectedPicklistItem: selectedItem
    })));
  },
  onRemove: function onRemove(event, _ref2) {
    var id = _ref2.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({}, idSuffix, _objectSpread({}, this.state[idSuffix], {
      isActive: false
    })));
  },
  render: function render() {
    var _this = this;

    var hasActiveFilters = this.state['created-date'].isActive || this.state['list-price'].isActive || this.state.new.isActive;
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Panel, {
      variant: "filters"
    }, React.createElement(PanelFilterGroup, {
      modified: this.state.modifiedPanel,
      onClickAdd: function onClickAdd() {
        _this.setState({
          modifiedPanel: true,
          new: {
            isActive: true,
            new: true
          }
        });
      },
      onClickRemoveAll: function onClickRemoveAll() {
        _this.onRemove(null, {
          id: 'sample-panel-filtering-created-date'
        });

        _this.onRemove(null, {
          id: 'sample-panel-filtering-list-price'
        });

        _this.onRemove(null, {
          id: 'sample-panel-filtering-new'
        });
      },
      onRequestCancel: function onRequestCancel() {
        _this.setState({
          modifiedPanel: false
        });
      },
      onRequestClose: function onRequestClose() {
        console.log('Request filtering panel to close');
      },
      onRequestSave: function onRequestSave() {
        _this.setState({
          modifiedPanel: false
        });
      },
      variant: "panel"
    }, React.createElement(PanelFilterList, null, React.createElement(Filter, {
      id: "sample-panel-filtering-show-me",
      isPermanent: true,
      onChange: this.onChangePredicate,
      property: "Show Me",
      predicate: this.state['show-me'].selectedItem.label
    }, React.createElement(Picklist, {
      isInline: true,
      label: "Show Me",
      onSelect: function onSelect(selectedItem) {
        _this.onSelectPicklist(selectedItem, 'show-me');
      },
      options: options['show-me'],
      placeholder: "Select record type",
      value: this.state['show-me'].selectedPicklistItem.value
    }))), hasActiveFilters ? React.createElement(PanelFilterListHeading, {
      label: "Matching all these filters"
    }) : null, hasActiveFilters ? React.createElement(PanelFilterList, null, this.state['created-date'].isActive ? React.createElement(Filter, {
      id: "sample-panel-filtering-created-date",
      onChange: this.onChangePredicate,
      onRemove: this.onRemove,
      predicate: this.state['created-date'].selectedItem.label,
      property: "Created Date"
    }, React.createElement(Picklist, {
      isInline: true,
      label: "Created Date EQUALS",
      onSelect: function onSelect(selectedItem) {
        _this.onSelectPicklist(selectedItem, 'created-date');
      },
      options: options['created-date'],
      placeholder: "Select a time range",
      value: this.state['created-date'].selectedPicklistItem.value
    })) : null, this.state['list-price'].isActive ? React.createElement(Filter, {
      id: "sample-panel-filtering-list-price",
      onChange: this.onChangePredicate,
      onRemove: this.onRemove,
      predicate: this.state['list-price'].selectedItem.label,
      property: "List Price"
    }, React.createElement(Picklist, {
      isInline: true,
      label: "List Price",
      onSelect: function onSelect(selectedItem) {
        _this.onSelectPicklist(selectedItem, 'list-price');
      },
      options: options['list-price'],
      placeholder: "Select a price",
      value: this.state['list-price'].selectedPicklistItem.value
    })) : null) : null, React.createElement(PanelFilterListHeading, {
      isLocked: true
    }), React.createElement(PanelFilterList, null, React.createElement(Filter, {
      id: "sample-panel-filtering-name",
      isLocked: true,
      predicate: 'equals "ACME"',
      property: "Name"
    })))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=filtering-locked.js.map