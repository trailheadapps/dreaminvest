import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Dropdown from "../../../../components/menu-dropdown"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'MediaObjectExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Dropdown, {
      assistiveText: "More Options",
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
      }, {
        type: 'divider'
      }, {
        label: 'Menu Item Four',
        value: 'D0'
      }]
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map