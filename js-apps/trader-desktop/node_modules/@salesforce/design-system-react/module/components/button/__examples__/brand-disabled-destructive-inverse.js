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
      label: "Brand",
      variant: "brand"
    }), React.createElement(Button, {
      disabled: true,
      label: "Disabled",
      onClick: function onClick() {
        console.log('Disabled Button Clicked');
      },
      variant: "brand"
    }), React.createElement(Button, {
      label: "Destructive",
      variant: "destructive"
    }), React.createElement("div", {
      style: {
        backgroundColor: '#16325c',
        padding: '10px',
        display: 'inline-block'
      },
      className: "-m-horizontal--small"
    }, React.createElement(Button, {
      inverse: true,
      label: "Inverse",
      variant: "base"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=brand-disabled-destructive-inverse.js.map