import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Picklist from "../../../../components/menu-picklist"; // `~` is replaced with design-system-react at runtime

import PopoverTooltip from "../../../../components/popover-tooltip";

var ListItemRenderer = function ListItemRenderer(props) {
  return React.createElement(PopoverTooltip, {
    openByDefault: props.isHighlighted,
    align: "bottom left",
    content: "".concat(props.label, " tooltip on bottom left")
  }, React.createElement("p", {
    className: "slds-truncate"
  }, props.label, " (Hover for tooltip)"));
};

var Example = createReactClass({
  displayName: 'PicklistExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Picklist, {
      listItemRenderer: ListItemRenderer,
      label: "Contacts",
      onSelect: function onSelect(value) {
        console.log('selected: ', value);
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
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=tooltip-list-item.js.map