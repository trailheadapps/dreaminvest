import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import MediaObject from "../../../../components/media-object"; // `~` is replaced with design-system-react at runtime

import Icon from "../../../../components/icon";
var Example = createReactClass({
  displayName: 'MediaObjectExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(MediaObject, {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
      figure: React.createElement(Icon, {
        category: "standard",
        name: "user",
        size: "large"
      }),
      verticalCenter: true
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=vertically-centered.js.map