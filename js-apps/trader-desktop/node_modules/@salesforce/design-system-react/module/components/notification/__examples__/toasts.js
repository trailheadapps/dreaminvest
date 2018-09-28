function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Notification from "../../../../components/notification"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
var Example = createReactClass({
  displayName: 'NotificationExample',
  getInitialState: function getInitialState() {
    return {
      baseIsOpen: false,
      successIsOpen: false,
      warningIsOpen: false,
      errorIsOpen: false
    };
  },
  toggleOpen: function toggleOpen(event, theme) {
    this.setState(_defineProperty({}, "".concat(theme, "IsOpen"), !this.state["".concat(theme, "IsOpen")]));
  },
  render: function render() {
    var _this = this;

    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Button, {
      label: "Open base toast",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'base');
      }
    }), React.createElement(Notification, {
      content: ['Base Toast'],
      isOpen: this.state.baseIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'base');
      },
      variant: "toast"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open success toast",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'success');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "new-contact"
      }, "Your new contact ", React.createElement("a", {
        href: "javascript:void(0);"
      }, "Sara Smith"), ' ', "was successfully created.")],
      iconName: "notification",
      isOpen: this.state.successIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'success');
      },
      theme: "success",
      variant: "toast"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open warning toast",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'warning');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "required-fields"
      }, "Oops, you\"ve missed some required form inputs.")],
      isOpen: this.state.warningIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'warning');
      },
      theme: "warning",
      variant: "toast"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open error toast",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'error');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "required-fields"
      }, "You encountered some errors when trying to save edits to Samuel Smith.")],
      iconName: "warning",
      isOpen: this.state.errorIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'error');
      },
      theme: "error",
      variant: "toast"
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=toasts.js.map