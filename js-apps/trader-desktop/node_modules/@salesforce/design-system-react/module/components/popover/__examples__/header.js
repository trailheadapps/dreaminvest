import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Popover from "../../../../components/popover"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'PopoverExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Popover, {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      heading: "Header Title"
    }, React.createElement(Button, {
      label: "Trigger Popover"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=header.js.map