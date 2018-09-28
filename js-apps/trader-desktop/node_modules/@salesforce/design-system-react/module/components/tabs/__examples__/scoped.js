import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Tabs from "../../../../components/tabs"; // `~` is replaced with design-system-react at runtime

import TabsPanel from "../../../../components/tabs/panel";
var Example = createReactClass({
  displayName: 'TabsExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Tabs, {
      variant: "scoped",
      id: "tabs-example-scoped"
    }, React.createElement(TabsPanel, {
      label: "Item One"
    }, "Item One Content"), React.createElement(TabsPanel, {
      label: "Item Two"
    }, "Item Two Content"), React.createElement(TabsPanel, {
      label: "Item Three"
    }, "Item Three Content"), React.createElement(TabsPanel, {
      disabled: true,
      label: "Disabled"
    }, "Disabled Content")));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=scoped.js.map