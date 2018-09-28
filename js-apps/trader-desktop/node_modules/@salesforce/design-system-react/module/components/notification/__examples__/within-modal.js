import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Notification from "../../../../components/notification"; // `~` is replaced with design-system-react at runtime

import Modal from "../../../../components/modal";
import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'NotificationExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false,
      modalOpen: false,
      toastOpen: true
    };
  },
  toggleModal: function toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  },
  toggleToast: function toggleToast() {
    this.setState({
      toastOpen: !this.state.toastOpen
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Button, {
      label: "Open Modal with notification",
      onClick: this.toggleModal
    }), React.createElement(Modal, {
      footer: [React.createElement(Button, {
        key: "toggleToast",
        label: "Toggle Toast",
        onClick: this.toggleToast,
        variant: "brand"
      })],
      isOpen: this.state.modalOpen,
      onRequestClose: this.toggleModal,
      title: "Lightning Design System: Style with Ease",
      toast: React.createElement(Notification, {
        content: "Oops, you've missed some required form inputs.",
        iconName: "warning",
        isOpen: this.state.toastOpen,
        onDismiss: this.toggleToast,
        theme: "warning",
        variant: "toast"
      })
    }, React.createElement("section", {
      className: "slds-p-around--medium"
    }, React.createElement("p", null, "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing."), React.createElement("p", null, "Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.")))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=within-modal.js.map