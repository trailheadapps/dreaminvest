import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PopoverTooltip from "../../../../components/popover-tooltip"; // `~` is replaced with design-system-react at runtime

import ButtonGroup from "../../../../components/button-group";
import Button from "../../../../components/button";
import Dropdown from "../../../../components/menu-dropdown";
var Example = createReactClass({
  displayName: 'TooltipExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(ButtonGroup, {
      className: "slds-p-bottom--medium"
    }, React.createElement(PopoverTooltip, {
      align: "bottom",
      content: "Buttonbar Tooltip"
    }, React.createElement(Button, {
      label: "Refresh"
    })), React.createElement(PopoverTooltip, {
      align: "bottom right",
      content: "Buttonbar Tooltip"
    }, React.createElement(Button, {
      label: "Edit"
    })), React.createElement(Dropdown, {
      assistiveText: "More Options",
      buttonVariant: "icon",
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled",
      onSelect: function onSelect(item) {
        return console.log('selected', item);
      },
      options: [{
        label: 'A Option',
        value: 'A0'
      }, {
        label: 'B Option',
        value: 'B0'
      }, {
        label: 'C Option',
        value: 'C0'
      }]
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=button-group.js.map