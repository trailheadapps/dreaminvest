import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Modal from "../../../../components/modal"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'ModalExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  toggleOpen: function toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Button, {
      label: "Open Prompt Variant",
      onClick: this.toggleOpen
    }), React.createElement(Modal, {
      dismissible: false,
      footer: [React.createElement(Button, {
        key: "promptBtn",
        label: "Got it",
        onClick: this.toggleOpen
      })],
      isOpen: this.state.isOpen,
      onRequestClose: this.toggleOpen,
      prompt: "error",
      size: "medium",
      title: React.createElement("span", null, "Service Unavailable")
    }, React.createElement("div", {
      className: "slds-m-around--medium"
    }, "The service you\"re trying to reach is unavailable due to limited conectivity. Please restart the application or contact your system administrator for assistance."))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=prompt.js.map