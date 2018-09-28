import React from 'react';
import createReactClass from 'create-react-class';
import ButtonGroup from "../../../../components/button-group";
import Button from "../../../../components/button";
import Dropdown from "../../../../components/menu-dropdown";
import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'ButtonGroupExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(ButtonGroup, null, React.createElement(Button, {
      label: "Refresh"
    }), React.createElement(Button, {
      label: "Edit"
    }), React.createElement(Button, {
      label: "Save"
    }), React.createElement(Dropdown, {
      id: "ButtonGroupExampleDropdown",
      assistiveText: "More Options",
      buttonVariant: "icon",
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled",
      onSelect: function onSelect(item) {
        console.log(item.label, 'selected');
      },
      openOn: "click",
      options: [{
        label: 'undo',
        value: 'A0'
      }, {
        label: 'redo',
        value: 'B0'
      }, {
        label: 'activate',
        value: 'C0'
      }]
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=more-icon.js.map