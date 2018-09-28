import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Picklist from "../../../../components/menu-picklist"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'PicklistExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Picklist, {
      label: "Contacts",
      onSelect: function onSelect(option, data) {
        console.log('selected: ', data.option);
      },
      options: [{
        label: 'Option A',
        value: 'A0'
      }, {
        label: 'Option B',
        value: 'B0'
      }, {
        label: 'Option C',
        value: 'C0'
      }, {
        label: 'Option D',
        value: 'D0'
      }, {
        label: 'Option E',
        value: 'E0'
      }, {
        label: 'Option FGHIJKLMNOPQRSTUVWXYZ',
        value: 'F0'
      }],
      placeholder: "Select a contact"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Picklist, {
      label: "Option selected",
      onSelect: function onSelect(option, data) {
        console.log('selected: ', data.option);
      },
      options: [{
        label: 'Option A',
        value: 'A0'
      }, {
        label: 'Option B',
        value: 'B0'
      }, {
        label: 'Option C',
        value: 'C0'
      }, {
        label: 'Option D',
        value: 'D0'
      }, {
        label: 'Option E',
        value: 'E0'
      }, {
        label: 'Option FGHIJKLMNOPQRSTUVWXYZ',
        value: 'F0'
      }],
      placeholder: "Select a contact",
      value: "C0"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Picklist, {
      disabled: true,
      label: "Disabled",
      onSelect: function onSelect(option, data) {
        console.log('selected: ', data.option);
      },
      options: [{
        label: 'Option A',
        value: 'A0'
      }, {
        label: 'Option B',
        value: 'B0'
      }, {
        label: 'Option C',
        value: 'C0'
      }, {
        label: 'Option D',
        value: 'D0'
      }, {
        label: 'Option E',
        value: 'E0'
      }, {
        label: 'Option FGHIJKLMNOPQRSTUVWXYZ',
        value: 'F0'
      }],
      placeholder: "Select a contact",
      value: "C0"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map