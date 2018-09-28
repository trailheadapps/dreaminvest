import React from 'react';
import createReactClass from 'create-react-class';
import ButtonGroup from "../../../../components/button-group";
import ButtonStateful from "../../../../components/button-stateful";
import Dropdown from "../../../../components/menu-dropdown";
import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'ButtonGroupExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(ButtonGroup, null, React.createElement(ButtonStateful, {
      assistiveText: "Show Chart",
      buttonVariant: "icon",
      iconName: "chart",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement(ButtonStateful, {
      assistiveText: "Filter List",
      iconName: "filterList",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement(Dropdown, {
      assistiveText: "Settings",
      checkmark: true,
      iconCategory: "utility",
      iconName: "settings",
      iconVariant: "more",
      id: "icon-dropdown-example",
      onSelect: function onSelect(item) {
        console.log(item.label, 'selected');
      },
      openOn: "click",
      options: [{
        label: 'Bring left panel to front',
        value: 'A0'
      }, {
        label: 'Bring right panel to front',
        value: 'B0'
      }],
      value: "A0",
      variant: "icon"
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon-group.js.map