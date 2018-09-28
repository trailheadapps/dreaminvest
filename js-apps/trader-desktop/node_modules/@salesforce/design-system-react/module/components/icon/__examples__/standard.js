import React from 'react';
import createReactClass from 'create-react-class';
import Icon from "../../../../components/icon"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'IconExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Icon, {
      assistiveText: "Description of icon",
      category: "standard",
      name: "account",
      title: "description of icon"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=standard.js.map