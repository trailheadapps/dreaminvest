function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import React from 'react';
import createReactClass from 'create-react-class';
import DataTable from "../../../../components/data-table"; // `~` is replaced with design-system-react at runtime

import DataTableColumn from "../../../../components/data-table/column";
import DataTableCell from "../../../../components/data-table/cell";
import IconSettings from "../../../../components/icon-settings";

var CustomDataTableCell = function CustomDataTableCell(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(DataTableCell, props, React.createElement("a", {
    href: "javascript:void(0);",
    onClick: function onClick(event) {
      event.preventDefault();
    }
  }, children));
};

CustomDataTableCell.displayName = DataTableCell.displayName;
var columns = [React.createElement(DataTableColumn, {
  key: "opportunity",
  label: "Opportunity Name",
  property: "opportunityName"
}, React.createElement(CustomDataTableCell, null)), React.createElement(DataTableColumn, {
  key: "account-name",
  label: "Account Name",
  property: "accountName"
}), React.createElement(DataTableColumn, {
  key: "close-date",
  label: "Close Date",
  property: "closeDate"
}), React.createElement(DataTableColumn, {
  key: "stage",
  label: "Stage",
  property: "stage"
}), React.createElement(DataTableColumn, {
  key: "confidence",
  label: "Confidence",
  property: "confidence"
}), React.createElement(DataTableColumn, {
  key: "amount",
  label: "Amount",
  property: "amount"
}), React.createElement(DataTableColumn, {
  key: "contact",
  label: "Contact",
  property: "contact"
}, React.createElement(CustomDataTableCell, null))];
var Example = createReactClass({
  displayName: 'DataTableExample',
  getInitialState: function getInitialState() {
    return {
      items: [{
        id: '8IKZHZZV80',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }, {
        id: '5GJOOOPWU7',
        opportunityName: 'Cloudhub + Anypoint Connectors',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }, {
        id: '8IKZHZZV81',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }]
    };
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      style: {
        overflow: 'auto'
      }
    }, React.createElement("h3", {
      className: "slds-text-heading--medium slds-m-vertical--medium"
    }, "Default Fluid Layout"), React.createElement(DataTable, {
      items: this.state.items,
      id: "DataTableExample-1-default"
    }, columns), React.createElement("h3", {
      className: "slds-text-heading--medium slds-m-vertical--medium"
    }, "Striped"), React.createElement(DataTable, {
      items: this.state.items,
      id: "DataTableExample-1-striped",
      striped: true
    }, columns), React.createElement("h3", {
      className: "slds-text-heading--medium slds-m-vertical--medium"
    }, "No Row Hover"), React.createElement(DataTable, {
      items: this.state.items,
      id: "DataTableExample-noRowHover",
      noRowHover: true
    }, columns), React.createElement("h3", {
      className: "slds-text-heading--medium slds-m-vertical--medium"
    }, "Column Bordered"), React.createElement(DataTable, {
      columnBordered: true,
      items: this.state.items,
      id: "DataTableExample-columnBordered"
    }, columns)));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=basic.js.map