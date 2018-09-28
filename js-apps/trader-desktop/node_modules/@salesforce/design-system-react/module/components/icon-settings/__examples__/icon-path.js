import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Icon from "../../../../components/icon"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'IconSettingsExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Account",
      category: "standard",
      name: "account",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Announcement",
      category: "utility",
      name: "announcement",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Description",
      category: "action",
      name: "description",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "XML",
      category: "doctype",
      name: "xml",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "custom5",
      category: "custom",
      name: "custom5",
      size: "small"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon-path.js.map