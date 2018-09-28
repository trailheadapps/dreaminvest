import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Pill from "../../../../components/pill"; // `~` is replaced with design-system-react at runtime

import Icon from "../../../../components/icon";
import Avatar from "../../../../components/avatar";

function noop() {}

var Example = createReactClass({
  displayName: 'PillExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      onClick: noop,
      onRemove: noop
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      onRemove: noop
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      icon: React.createElement(Icon, {
        title: "Account",
        category: "standard",
        name: "account"
      }),
      onClick: noop,
      onRemove: noop
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      avatar: React.createElement(Avatar, {
        variant: "user",
        title: "User avatar",
        imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
      }),
      onClick: noop,
      onRemove: noop
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      hasError: true,
      icon: React.createElement(Icon, {
        title: "Error",
        category: "utility",
        name: "warning",
        className: "slds-icon-text-error"
      }),
      onClick: noop,
      onRemove: noop
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Pill, {
      labels: {
        label: 'Pill Label',
        title: 'Full pill label verbiage mirrored here',
        removeTitle: 'Remove'
      },
      assistiveText: {
        remove: 'Press delete or backspace to remove'
      },
      bare: true,
      variant: "option",
      tabIndex: "0",
      "aria-selected": "true",
      onRemove: noop
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=snapshot.js.map