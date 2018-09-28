function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import Pill from "../../../../components/pill";
import Icon from "../../../../components/icon";
import IconSettings from "../../../../components/icon-settings";
var PILLS = [{
  category: 'standard',
  name: 'account'
}, {
  category: 'standard',
  name: 'case'
}, {
  category: 'utility',
  name: 'retweet'
}, {
  category: 'standard',
  name: 'solution'
}, {
  category: 'standard',
  name: 'custom_notification'
}, {
  category: 'standard',
  name: 'email'
}, {
  category: 'standard',
  name: 'endorsement'
}, {
  category: 'standard',
  name: 'recent'
}, {
  category: 'custom',
  name: 'custom31'
}];

function noop() {}

var Example = createReactClass({
  displayName: 'PillWithIconListboxExample',
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
    return this.getAllOn();
  },
  onClick: function onClick(event) {
    this.props.action('onClick')(event);
  },
  onRemove: function onRemove(event, pill) {
    this.props.action('onRemove')(event);
    this.setState(_defineProperty({}, pill, false));
  },
  getAllOn: function getAllOn() {
    return PILLS.reduce(function (result, item, index) {
      result['pill' + index] = true;
      return result;
    }, {});
  },
  renderListItem: function renderListItem(icon, index) {
    var _this = this;

    if (this.state['pill' + index]) {
      return React.createElement("li", {
        className: "slds-listbox-item",
        role: "presentation",
        key: index
      }, React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        assistiveText: {
          remove: 'Press delete or backspace to remove'
        },
        variant: "option",
        icon: React.createElement(Icon, {
          title: "Title",
          category: icon.category,
          name: icon.name
        }),
        onClick: this.onClick,
        onRemove: function onRemove() {
          return _this.onRemove(event, 'pill' + index);
        }
      }));
    }

    return null;
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement("div", {
      className: "slds-grid slds-grid_vertical-align-start"
    }, React.createElement("div", {
      className: "slds-pill_container"
    }, React.createElement("ul", {
      className: "slds-listbox slds-listbox_horizontal slds-listbox_inline",
      role: "listbox",
      "aria-label": "Selected Options:",
      "aria-orientation": "horizontal"
    }, PILLS.map(this.renderListItem))))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=listbox-icon.js.map