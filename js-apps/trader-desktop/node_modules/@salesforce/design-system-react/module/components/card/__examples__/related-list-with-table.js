import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Button from "../../../../components/button"; // `~` is replaced with design-system-react at runtime

import Card from "../../../../components/card";
import CardEmpty from "../../../../components/card/empty";
import CardFilter from "../../../../components/card/filter";
import DataTable from "../../../../components/data-table";
import DataTableColumn from "../../../../components/data-table/column";
import Icon from "../../../../components/icon";
var sampleItems = [{
  name: 'Cloudhub'
}, {
  name: 'Cloudhub + Anypoint Connectors'
}, {
  name: 'Cloud City'
}];
var Example = createReactClass({
  displayName: 'CardExample',
  getInitialState: function getInitialState() {
    return {
      items: sampleItems,
      isFiltering: false
    };
  },
  handleFilterChange: function handleFilterChange(event) {
    var filteredItems = sampleItems.filter(function (item) {
      return RegExp(event.target.value, 'i').test(item.name);
    });
    this.setState({
      isFiltering: true,
      items: filteredItems
    });
  },
  handleDeleteAllItems: function handleDeleteAllItems() {
    this.setState({
      isFiltering: false,
      items: []
    });
  },
  handleAddItem: function handleAddItem() {
    this.setState({
      items: sampleItems
    });
  },
  render: function render() {
    var isEmpty = this.state.items.length === 0;
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--vertical"
    }, React.createElement(Card, {
      id: "ExampleCard",
      filter: (!isEmpty || this.state.isFiltering) && React.createElement(CardFilter, {
        onChange: this.handleFilterChange
      }),
      headerActions: !isEmpty && React.createElement(Button, {
        label: "Delete All Items",
        onClick: this.handleDeleteAllItems
      }),
      heading: "Releated Items",
      icon: React.createElement(Icon, {
        category: "standard",
        name: "document",
        size: "small"
      }),
      empty: isEmpty ? React.createElement(CardEmpty, {
        heading: "No Related Items"
      }, React.createElement(Button, {
        label: "Add Item",
        onClick: this.handleAddItem
      })) : null
    }, React.createElement(DataTable, {
      items: this.state.items,
      id: "DataTableExample-1",
      bordered: true
    }, React.createElement(DataTableColumn, {
      label: "Opportunity Name",
      property: "name",
      truncate: true
    })))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=related-list-with-table.js.map