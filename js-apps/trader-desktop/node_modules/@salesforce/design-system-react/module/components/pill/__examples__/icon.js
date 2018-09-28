function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import Pill from "../../../../components/pill";
import Icon from "../../../../components/icon";
import Avatar from "../../../../components/avatar";
import IconSettings from "../../../../components/icon-settings";

function noop() {}

var Example = createReactClass({
  displayName: 'PillWithIconExample',
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
  getInitialState: function getInitialState() {
    return {
      pill1: true,
      pill2: true,
      pill3: true
    };
  },
  onClick: function onClick(event) {
    this.props.action('onClick')(event);
  },
  onRemove: function onRemove(event, pill) {
    this.props.action('onRemove')(event);
    this.setState(_defineProperty({}, pill, false));
  },
  render: function render() {
    var _this = this;

    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid_pull-padded-medium"
    }, React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.state.pill1 ? React.createElement(Pill, {
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
      onClick: this.onClick,
      onRemove: function onRemove(event) {
        return _this.onRemove(event, 'pill1');
      }
    }) : null), React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.state.pill2 ? React.createElement(Pill, {
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
      onClick: this.onClick,
      onRemove: function onRemove(event) {
        return _this.onRemove(event, 'pill2');
      }
    }) : null), React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.state.pill3 ? React.createElement(Pill, {
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
      onClick: this.onClick,
      onRemove: function onRemove(event) {
        return _this.onRemove(event, 'pill3');
      }
    }) : null)));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon.js.map