import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Modal from "../../../../components/modal"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'ModalExample',
  getInitialState: function getInitialState() {
    return {
      noHeaderIsOpen: false,
      noFooterIsOpen: false
    };
  },
  toggleNoHeaderIsOpen: function toggleNoHeaderIsOpen() {
    this.setState({
      noHeaderIsOpen: !this.state.noHeaderIsOpen
    });
  },
  toggleNofooterIsOpen: function toggleNofooterIsOpen() {
    this.setState({
      noFooterIsOpen: !this.state.noFooterIsOpen
    });
  },
  render: function render() {
    var modal = this.state.noHeaderIsOpen ? React.createElement(Modal, {
      assistiveText: {
        dialogLabel: 'Modal no header'
      },
      isOpen: this.state.noHeaderIsOpen,
      onRequestClose: this.toggleNoHeaderIsOpen
    }, React.createElement("section", {
      className: "slds-p-around--medium"
    }, React.createElement("p", null, "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing."), React.createElement("p", null, "Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea."))) : React.createElement(Modal, {
      isOpen: this.state.noFooterIsOpen,
      onRequestClose: this.toggleNofooterIsOpen,
      title: "Modal Header"
    }, React.createElement("section", {
      className: "slds-p-around--medium"
    }, React.createElement("p", null, "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing."), React.createElement("p", null, "Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.")));
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Button, {
      label: "Open no header",
      onClick: this.toggleNoHeaderIsOpen
    }), React.createElement(Button, {
      label: "Open no footer",
      onClick: this.toggleNofooterIsOpen
    }), modal));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=header-footer.js.map