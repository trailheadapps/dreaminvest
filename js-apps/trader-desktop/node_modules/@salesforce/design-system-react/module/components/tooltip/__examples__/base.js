import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PopoverTooltip from "../../../../components/popover-tooltip"; // `~` is replaced with design-system-react at runtime

import Icon from "../../../../components/icon";
var Example = createReactClass({
  displayName: 'TooltipExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(PopoverTooltip, {
      align: "top left",
      content: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi."
    }, React.createElement("a", {
      href: "javascript:void(0)"
    }, React.createElement(Icon, {
      assistiveText: "Tooltip with icon",
      category: "utility",
      name: "info",
      size: "x-small"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map