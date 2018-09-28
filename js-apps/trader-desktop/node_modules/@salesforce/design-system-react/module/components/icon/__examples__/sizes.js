import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Icon from "../../../../components/icon"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'IconExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Warning",
      category: "utility",
      color: "warning",
      name: "warning",
      size: "x-small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Case",
      category: "standard",
      name: "case",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Case",
      category: "standard",
      name: "case",
      size: "medium"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Case",
      category: "standard",
      name: "case",
      size: "large"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=sizes.js.map