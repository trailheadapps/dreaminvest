import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Dropdown from "../../../../components/menu-dropdown"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'MediaObjectExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("span", null, "Checkmark "), React.createElement(Dropdown, {
      assistiveText: "Checkmark",
      checkmark: true,
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled",
      onSelect: function onSelect(value) {
        console.log('selected: ', value);
      },
      options: [{
        label: 'Menu Item One',
        value: 'A0'
      }, {
        label: 'Menu Item Two',
        value: 'B0'
      }, {
        label: 'Menu Item Three',
        value: 'C0'
      }],
      value: "A0"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("span", null, "Checkmark with right icon "), React.createElement(Dropdown, {
      assistiveText: "Checkmark with right icon",
      buttonVariant: "icon",
      checkmark: true,
      iconName: "settings",
      iconSize: "large",
      iconVariant: "more",
      onSelect: function onSelect(value) {
        console.log('selected: ', value);
      },
      options: [{
        label: 'Table View',
        value: 'A0',
        rightIcon: {
          category: 'utility',
          name: 'table'
        }
      }, {
        label: 'Kanban Board',
        value: 'A0',
        rightIcon: {
          category: 'utility',
          name: 'kanban'
        }
      }, {
        label: 'List View',
        value: 'A0',
        rightIcon: {
          category: 'utility',
          name: 'side_list'
        }
      }],
      value: "A0"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=checkmark.js.map