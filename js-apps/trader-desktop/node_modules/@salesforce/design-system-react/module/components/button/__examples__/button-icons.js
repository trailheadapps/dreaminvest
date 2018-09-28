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
      assistiveText: "Icon Bare Small",
      iconCategory: "utility",
      iconName: "settings",
      iconSize: "small",
      iconVariant: "bare",
      onClick: function onClick() {
        console.log('Icon Bare Clicked');
      },
      variant: "icon"
    }), React.createElement(Button, {
      assistiveText: "Icon Container Small",
      iconCategory: "utility",
      iconName: "settings",
      iconSize: "small",
      iconVariant: "container",
      variant: "icon"
    }), React.createElement("div", {
      style: {
        backgroundColor: '#4BC076',
        padding: '10px',
        display: 'inline-block'
      },
      className: "-m-horizontal--small"
    }, React.createElement(Button, {
      assistiveText: "Icon Border medium",
      iconCategory: "utility",
      iconName: "settings",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement(Button, {
      assistiveText: "Icon Border-filled medium",
      iconCategory: "utility",
      iconName: "settings",
      iconVariant: "border-filled",
      variant: "icon"
    })), React.createElement(Button, {
      assistiveText: "Icon More large",
      iconCategory: "utility",
      iconName: "settings",
      iconSize: "large",
      iconVariant: "more",
      variant: "icon"
    }), React.createElement("div", {
      style: {
        backgroundColor: '#16325c',
        padding: '10px',
        display: 'inline-block'
      },
      className: "-m-horizontal--small"
    }, React.createElement(Button, {
      assistiveText: "Icon inverse",
      iconCategory: "utility",
      iconName: "settings",
      iconSize: "large",
      inverse: true,
      variant: "icon"
    })), React.createElement("div", {
      style: {
        backgroundColor: '#FFB75D',
        padding: '10px 50px',
        display: 'inline-block'
      },
      className: "-hint-parent -m-horizontal--small"
    }, React.createElement(Button, {
      assistiveText: "Icon hint large",
      hint: true,
      iconCategory: "utility",
      iconName: "settings",
      iconSize: "large",
      variant: "icon"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=button-icons.js.map