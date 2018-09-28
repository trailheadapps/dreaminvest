import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PopoverTooltip from "../../../../components/popover-tooltip"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'TooltipExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(PopoverTooltip, {
      align: "right",
      content: "Tooltip with right alignment"
    }, React.createElement(Button, {
      label: "Hover or focus to Open"
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=button.js.map