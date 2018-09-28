import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import ButtonStateful from "../../../../components/button-stateful"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'ButtonStatefulExample',
  getInitialState: function getInitialState() {
    return {
      isActive: false
    };
  },
  handleOnclick: function handleOnclick() {
    this.setState({
      isActive: !this.state.isActive
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(ButtonStateful, {
      assistiveText: this.state.isActive ? 'liked' : 'not liked',
      iconName: "like",
      iconSize: "large",
      variant: "icon"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon.js.map