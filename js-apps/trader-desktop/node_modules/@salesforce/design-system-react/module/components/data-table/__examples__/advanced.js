function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import React from 'react';
import createReactClass from 'create-react-class';
import DataTable from "../../../../components/data-table"; // `~` is replaced with design-system-react at runtime

import DataTableColumn from "../../../../components/data-table/column";
import DataTableCell from "../../../../components/data-table/cell";
import DataTableRowActions from "../../../../components/data-table/row-actions";
import IconSettings from "../../../../components/icon-settings";

var CustomDataTableCell = function CustomDataTableCell(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(DataTableCell, _extends({
    title: children
  }, props), React.createElement("a", {
    href: "javascript:void(0);",
    onClick: function onClick(event) {
      event.preventDefault();
    }
  }, children));
};

CustomDataTableCell.displayName = DataTableCell.displayName;
var Example = createReactClass({
  displayName: 'DataTableExample',
  getInitialState: function getInitialState() {
    return {
      sortColumn: 'opportunityName',
      sortColumnDirection: {
        opportunityName: 'asc'
      },
      items: [{
        id: '8IKZHZZV80',
        opportunityName: 'Acme - 1,200 Widgets',
        accountName: 'Acme',
        closeDate: '4/10/15',
        stage: 'Value Proposition',
        confidence: '70%',
        amount: '$25,000,000',
        contact: 'jrogers@acme.com'
      }, {
        id: '5GJOOOPWU7',
        opportunityName: 'Acme - 200 Widgets',
        accountName: 'Acme',
        closeDate: '1/31/15',
        stage: 'Prospecting',
        confidence: '30%',
        amount: '$5,000,000',
        contact: 'bob@acme.com'
      }, {
        id: '8IKZHZZV81',
        opportunityName: 'salesforce.com - 1,000 Widgets',
        accountName: 'salesforce.com',
        closeDate: '1/31/15 3:45PM',
        stage: 'Id. Decision Makers',
        confidence: '60%',
        amount: '$25,000',
        contact: 'nathan@salesforce.com'
      }],
      selection: [{
        id: '8IKZHZZV81',
        opportunityName: 'salesforce.com - 1,000 Widgets',
        accountName: 'salesforce.com',
        closeDate: '1/31/15 3:45PM',
        stage: 'Id. Decision Makers',
        confidence: '60%',
        amount: '$25,000',
        contact: 'nathan@salesforce.com'
      }]
    };
  },
  handleChanged: function handleChanged(selection) {
    this.setState({
      selection: selection
    });
  },
  handleRowAction: function handleRowAction(item, action) {
    console.log(item, action);
  },
  handleSort: function handleSort(sortColumn) {
    if (this.props.log) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      this.props.log('sort').apply(void 0, [sortColumn].concat(rest));
    }

    var sortProperty = sortColumn.property;
    var sortDirection = sortColumn.sortDirection;
    var newState = {
      sortColumn: sortProperty,
      sortColumnDirection: _defineProperty({}, sortProperty, sortDirection),
      items: _toConsumableArray(this.state.items)
    }; // needs to work in both directions

    newState.items = newState.items.sort(function (a, b) {
      var val = 0;

      if (a[sortProperty] > b[sortProperty]) {
        val = 1;
      }

      if (a[sortProperty] < b[sortProperty]) {
        val = -1;
      }

      if (sortDirection === 'desc') {
        val *= -1;
      }

      return val;
    });
    this.setState(newState);
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(DataTable, {
      fixedLayout: true,
      items: this.state.items,
      id: "DataTableExample-2",
      onChange: this.handleChanged,
      onSort: this.handleSort,
      selection: this.state.selection,
      selectRows: true
    }, React.createElement(DataTableColumn, {
      isSorted: this.state.sortColumn === 'opportunityName',
      label: "Name",
      primaryColumn: true,
      property: "opportunityName",
      sortable: true,
      sortDirection: this.state.sortColumnDirection.opportunityName,
      width: "10rem"
    }, React.createElement(CustomDataTableCell, null)), React.createElement(DataTableColumn, {
      label: "Account Name",
      property: "accountName",
      width: "8rem"
    }), React.createElement(DataTableColumn, {
      label: "Close Date",
      property: "closeDate"
    }), React.createElement(DataTableColumn, {
      label: "Stage",
      property: "stage"
    }), React.createElement(DataTableColumn, {
      isSorted: this.state.sortColumn === 'confidence',
      label: "Confidence",
      property: "confidence",
      sortable: true,
      sortDirection: this.state.sortColumnDirection.confidence
    }), React.createElement(DataTableColumn, {
      label: "Amount",
      property: "amount"
    }), React.createElement(DataTableColumn, {
      label: "Contact",
      property: "contact"
    }, React.createElement(CustomDataTableCell, null)), React.createElement(DataTableRowActions, {
      options: [{
        id: 0,
        label: 'Add to Group',
        value: '1'
      }, {
        id: 1,
        label: 'Publish',
        value: '2'
      }],
      onAction: this.handleRowAction
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=advanced.js.map