import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Popover from "../../../../components/popover"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import { action, decorateAction } from '@storybook/addon-actions';
var Example = createReactClass({
  displayName: 'PopoverExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  handleOpen: function handleOpen() {
    this.setState({
      isOpen: true
    });
  },
  handleCancel: function handleCancel() {
    this.setState({
      isOpen: false
    });
  },
  handleApply: function handleApply() {
    this.setState({
      isOpen: false
    });
  },
  handleRequestClose: function handleRequestClose(event, data) {
    if (this.props.log) {
      this.props.log('onRequestClose');
    }

    this.setState({
      isOpen: false
    });
  },
  handleClose: function handleClose(event, data) {
    if (this.props.log) {
      this.props.log('onClose')(event, data);
    }
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Popover, {
      isOpen: this.state.isOpen,
      body: "Are you sure you want to continue with your action?",
      footer: React.createElement("div", {
        className: "slds-text-align--right"
      }, React.createElement(Button, {
        label: "Cancel",
        onClick: this.handleCancel
      }), React.createElement(Button, {
        variant: "brand",
        label: "Apply",
        onClick: this.handleApply
      })),
      heading: "Confirmation",
      onClose: this.handleClose,
      onRequestClose: this.handleRequestClose
    }, React.createElement(Button, {
      label: "Trigger Popover",
      onClick: this.handleOpen
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=controlled-with-footer.js.map