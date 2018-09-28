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
      errorIsOpen: false,
      offlineIsOpen: false
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
      label: "Open base alert",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'base');
      }
    }), React.createElement(Notification, {
      content: ['Base System Alert'],
      isOpen: this.state.baseIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'base');
      },
      texture: true,
      variant: "alert"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open success alert",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'success');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "maintenance"
      }, "Scheduled Maintenance Notification: Sunday March 15, 8:00 AM\u201310:00 PST ", React.createElement("a", {
        href: "javascript:void(0);"
      }, "More Information"))],
      iconName: "notification",
      isOpen: this.state.successIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'success');
      },
      texture: true,
      theme: "success",
      variant: "alert"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open error alert",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'error');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "browser"
      }, "Your browser is currently not supported. Your Salesforce may be degraded. ", React.createElement("a", {
        href: "javascript:void(0);"
      }, "More Information"))],
      iconName: "ban",
      isOpen: this.state.errorIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'error');
      },
      texture: true,
      theme: "error",
      variant: "alert"
    }), React.createElement("span", null), React.createElement(Button, {
      label: "Open offline alert",
      onClick: function onClick(event) {
        _this.toggleOpen(event, 'offline');
      }
    }), React.createElement(Notification, {
      content: [React.createElement("span", {
        key: "offline"
      }, "You are in offline mode", ' ', React.createElement("a", {
        href: "javascript:void(0);"
      }, "More Information"))],
      iconName: "offline",
      isOpen: this.state.offlineIsOpen,
      onDismiss: function onDismiss(event) {
        _this.toggleOpen(event, 'offline');
      },
      texture: true,
      theme: "offline",
      variant: "alert"
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=alerts.js.map