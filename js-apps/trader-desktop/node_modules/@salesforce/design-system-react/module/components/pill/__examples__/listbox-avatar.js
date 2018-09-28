import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import Pill from "../../../../components/pill";
import Avatar from "../../../../components/avatar";
import IconSettings from "../../../../components/icon-settings";

function noop() {}

var Example = createReactClass({
  displayName: 'PillWithAvatarListboxExample',
  propTypes: {
    action: PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      action: function action() {
        return noop;
      }
    };
  },
  onClick: function onClick(event) {
    this.props.action('onClick')(event);
  },
  onRemove: function onRemove(event) {
    this.props.action('onRemove')(event);
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement("div", {
      className: "slds-p-vertical_medium"
    }, React.createElement("h3", {
      className: "slds-text-heading_small"
    }, "Static Examples")), React.createElement("div", {
      className: "slds-grid slds-grid_vertical-align-start"
    }, React.createElement("div", {
      className: "slds-pill_container"
    }, React.createElement("ul", {
      className: "slds-listbox slds-listbox_horizontal slds-listbox_inline",
      role: "listbox",
      "aria-label": "Selected Options:",
      "aria-orientation": "horizontal"
    }, React.createElement("li", {
      className: "slds-listbox-item",
      role: "presentation"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      assistiveText: {
        remove: 'Press delete or backspace to remove'
      },
      tabIndex: "0",
      variant: "option",
      avatar: React.createElement(Avatar, {
        variant: "user",
        title: "User avatar",
        imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
      }),
      onClick: this.onClick,
      onRemove: this.onRemove
    })), React.createElement("li", {
      className: "slds-listbox-item",
      role: "presentation"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      assistiveText: {
        remove: 'Press delete or backspace to remove'
      },
      tabIndex: "0",
      variant: "option",
      avatar: React.createElement(Avatar, {
        variant: "user",
        title: "User avatar",
        imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
      }),
      onClick: this.onClick,
      onRemove: this.onRemove
    })))))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=listbox-avatar.js.map