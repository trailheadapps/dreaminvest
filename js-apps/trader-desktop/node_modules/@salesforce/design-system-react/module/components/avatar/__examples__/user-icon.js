import React from 'react';
import createReactClass from 'create-react-class';
import Avatar from "../../../../components/avatar"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'AvatarExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Avatar, {
      assistiveText: "User Icon Avatar",
      title: "User Icon Avatar",
      variant: "user"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=user-icon.js.map