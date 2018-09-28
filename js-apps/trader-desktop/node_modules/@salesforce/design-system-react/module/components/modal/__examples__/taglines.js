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
      label: "Open Modal with tagline",
      onClick: this.toggleOpen
    }), React.createElement(Modal, {
      isOpen: this.state.isOpen,
      onRequestClose: this.toggleOpen,
      tagline: React.createElement("span", null, "Here\u2019s a tagline if you need it. It is allowed to extend across mulitple lines, so I\u2019m making up content to show that to you. It is allowed to", ' ', React.createElement("a", {
        href: "javascript:void(0);"
      }, "contain links or be a link.")),
      title: "Modal header"
    }, React.createElement("section", {
      className: "slds-p-around--medium"
    }, React.createElement("p", null, "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing."), React.createElement("p", null, "Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.")))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=taglines.js.map