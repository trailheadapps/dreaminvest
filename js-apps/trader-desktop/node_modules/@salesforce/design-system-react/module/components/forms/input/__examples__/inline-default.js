import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import InlineEdit from "../../../../../components/forms/input/inline"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'InlineEditExample',
  getInitialState: function getInitialState() {
    return {
      value: 'Edit me inline'
    };
  },
  handleChange: function handleChange(eventProps) {
    this.setState({
      value: eventProps.value
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("section", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Base Input with visible label"), React.createElement(InlineEdit, {
      id: "inline-edit-example-1",
      value: this.state.value,
      onChange: this.handleChange
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Disabled Base Input"), React.createElement(InlineEdit, {
      disabled: true,
      id: "inline-edit-example-2",
      value: this.state.value,
      onChange: this.handleChange
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=inline-default.js.map