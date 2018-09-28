import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Button from "../../../../components/button"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'ButtonExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "-x-small-buttons--horizontal"
    }, React.createElement(Button, {
      label: "Base",
      onClick: function onClick(e) {
        console.log('Base Button e.target:', e.target);
      },
      variant: "base"
    }), React.createElement(Button, {
      label: "Neutral"
    }), React.createElement(Button, {
      iconCategory: "utility",
      iconName: "download",
      iconPosition: "left",
      label: "Neutral Icon"
    }), React.createElement(Button, {
      label: "Responsive",
      responsive: true
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base-neutral.js.map